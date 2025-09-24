"use client";

import Image from "next/image";
import { useState } from "react";
import BlogPost from "../_ui/BlogPost";
import { SanityDocument } from "next-sanity";
import LoadMoreButton from "../_ui/LoadMoreButton";
import { extractPlainText } from "../_libs/helpers";

export default function BlogCard({
  FeaturedBlogPosts,
}: {
  FeaturedBlogPosts: SanityDocument[];
}) {
  const [nextBlog, setNextBlog] = useState(6);

  const handleDisplayNextPreview = () => {
    setNextBlog((prev) => prev + 6);
  };

  return (
    <>
      <ul className="flex flex-wrap items-center justify-center md:items-start gap-x-[28px] gap-y-[80px]">
        {FeaturedBlogPosts.slice(0, nextBlog).map((blogpost, id) => (
          <li key={id} className="flex flex-col max-w-[379px]">
            <Image
              src={blogpost.blogImage}
              width={379}
              height={364}
              className="w-[379px] h-[364px] object-cover rounded-lg mb-[20px]"
              alt="blog image"
            />
            <h3 className="text-xl font-semibold leading-[28px] text-[#2a2a2a] mb-[8px]">
              {blogpost.title}
            </h3>
            <BlogPost blogPost={extractPlainText(blogpost.blogPost)} />
            <div className="inline-flex items-center gap-6 mt-[8px]">
              <div className="inline-flex items-center gap-2">
                <Image
                  src={blogpost.writerAvatar}
                  width={48}
                  height={48}
                  className="w-9 h-9 object-cover rounded-full"
                  alt={blogpost.writerName}
                />
                <span>By {blogpost.writerName}</span>
              </div>
              <p>{blogpost.publishedAt}</p>
            </div>
          </li>
        ))}
      </ul>
      {FeaturedBlogPosts.length > 6 && nextBlog <= FeaturedBlogPosts.length ? (
        <LoadMoreButton action={handleDisplayNextPreview} />
      ) : null}
    </>
  );
}
