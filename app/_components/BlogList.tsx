import { SanityDocument } from "next-sanity";
import { client } from "../src/sanity/client";
import BlogCard from "./BlogCard";

const BLOG_QUERY = `*[_type == "Blog"]{
  _id, 
  "blogImage": image.asset->url,
  "title": title,
  "slug": slug,
  "writerAvatar": writer_avatar.asset->url,
  "writerName": writer_name,
  "publishedAt": publishedAt,
  "blogPost": blog_post
}`;

const options = { next: { revalidate: 30 } };

export default async function BlogList() {
  const FeaturedBlogPosts: SanityDocument[] = await client.fetch<
    SanityDocument[]
  >(BLOG_QUERY, {}, options);
  return <BlogCard FeaturedBlogPosts={FeaturedBlogPosts} />;
}
