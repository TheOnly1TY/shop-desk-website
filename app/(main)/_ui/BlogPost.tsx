"use client";

import { useState } from "react";

export default function BlogPost({ blogPost }: { blogPost: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <p className="text-base leading-[24px]">
      {blogPost.slice(0, isExpanded ? blogPost.length : 140)}
      {blogPost.length > 140 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#009a49] cursor-pointer ml-2"
        >
          {isExpanded ? "read less" : "...read more"}
        </button>
      )}
    </p>
  );
}
