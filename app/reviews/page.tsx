import { Suspense } from "react";
import { PageProps } from "../types/Type";
import ReviewList from "../_components/ReviewList";
import FilterRating from "../_components/FilterRating";
import InputRatingField from "../_components/InputRatingField";
import ReviewSkeletonLoader from "../_ui/ReviewSkeletonLoader";

export const metadata = {
  title: "Reviews",
  description:
    "Real business owners. Real feedback. See how Shop Desk is making shop management easier for everyone.",
};

export default async function page({ searchParams }: PageProps) {
  const params = await searchParams;
  const filter = Array.isArray(params?.rating)
    ? params?.rating[0]
    : params?.rating ?? "all";
  const searchWord = Array.isArray(params?.search)
    ? params?.search[0]
    : params?.search || "";

  return (
    <div className="mb-16 md:mb-24 lg:mb-40 px-6 md:px-10">
      {" "}
      <div className=" max-w-[1210px] mx-auto pt-35">
        <div className="flex justify-center items-center">
          <span className="text-[#009a49] bg-[#009a49]/10 border border-[#009a49]/20 px-6 py-1.5 rounded-lg">
            4.8/5 (Based on 50+ reviews)
          </span>
        </div>
        <h1 className="text-[28px] leading-[42px] md:text-4xl md:leading-[54px] lg:text-5xl lg:leading-[72px] text-[#2a2a2a] text-center">
          What Our <span className="text-[#009a49]">Customers </span>
          Are Saying
        </h1>
        <p className="text-sm lg:text-base leading-5 lg:leading-6 text-[#8d8d8d] max-w-[601px] mx-auto text-center">
          Real business owners. Real feedback. See how Shop Desk is making shop
          management easier for everyone.
        </p>

        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-4 md:gap-8 my-10 md:my-16">
          <InputRatingField />
          <FilterRating />
        </div>
        <Suspense fallback={<ReviewSkeletonLoader />} key={filter}>
          <ReviewList filter={filter} searchWord={searchWord} />
        </Suspense>
      </div>
    </div>
  );
}
