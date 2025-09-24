"use client";

import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";
import { ReviewCardProps } from "../types/Type";
import LoadMoreButton from "../_ui/LoadMoreButton";
import { extractPlainText } from "../_libs/helpers";

export default function ReviewCard({ Data, searchWord }: ReviewCardProps) {
  const [nextReviews, setNextReviews] = useState(9);

  const MAX_RATING = 5;

  const handleDisplayNextPreview = () => {
    setNextReviews((prev) => prev + 9);
  };

  return (
    <>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-[42px]">
        {Data.slice(0, nextReviews).map((review) => (
          <div
            key={review._id}
            className="max-h-[240px] h-full w-full bg-white border-2 border-[#2a2a2a]/10 rounded-lg px-2.5 py-4 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <Image
                src={review.avatar}
                width={48}
                height={48}
                alt={review.name}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="text-sm leading-5">
                <h3 className="text-[#2a2a2a]">{review.name}</h3>
                <p className="text-gray-500">{review.business}</p>
              </div>
            </div>
            {/* Middle: Message */}
            <blockquote className="text-base text-[#2a2a2a] leading-6">
              {extractPlainText(review.message)
                .split(" ")
                .map((word, i) => {
                  const cleanWord = word.toLowerCase();
                  const normalizedQuery = searchWord.toLowerCase();
                  // alert(cleanWord);
                  if (normalizedQuery && cleanWord.includes(normalizedQuery)) {
                    const index = cleanWord.indexOf(normalizedQuery);
                    const before = cleanWord.slice(0, index);
                    const match = cleanWord.slice(
                      index,
                      index + normalizedQuery.length
                    );
                    const after = cleanWord.slice(
                      index + normalizedQuery.length
                    );
                    return (
                      <span key={i}>
                        {before}
                        <span className="bg-[#009a49] text-white px-1 rounded">
                          {match}
                        </span>
                        {after}{" "}
                      </span>
                    );
                  }
                  return <span key={i}>{word} </span>;
                })}
            </blockquote>

            {/* Bottom: Rating */}
            <div className="flex justify-start items-center gap-1">
              {Array.from({ length: MAX_RATING }, (_, i) => i + 1).map(
                (_, id) => (
                  <Star
                    key={id}
                    className={`w-[19.02px] h-[18.09px] ${
                      review.rate <= id ? "fill-[#D4D4D4]" : "fill-[#F1C644]"
                    } stroke-none stroke-0`}
                  />
                )
              )}
            </div>
          </div>
        ))}
      </ul>
      {Data.length > 9 && nextReviews <= Data.length ? (
        <LoadMoreButton action={handleDisplayNextPreview} />
      ) : null}
    </>
  );
}
