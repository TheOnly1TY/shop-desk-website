import ReviewCard from "./ReviewCard";
import EmptyReview from "../_ui/EmptyReview";
import { client } from "@/app/src/sanity/client";
import { type SanityDocument } from "next-sanity";
import { ReviewListPropsType } from "../types/Type";
import { extractPlainText } from "../_libs/helpers";

const REVIEWS_QUERY = `*[_type == "Reviews"]{
  _id,
  "avatar": Avatar.asset->url,
  "business": BusinessName,
  "name": Name,
  "rate": Rate,
  "message": ReviewMessage
}`;

const options = { next: { revalidate: 30 } };

export default async function ReviewList({
  filter,
  searchWord,
}: ReviewListPropsType) {
  const ReviewsData: SanityDocument[] = await client.fetch<SanityDocument[]>(
    REVIEWS_QUERY,
    {},
    options
  );

  let selectedRatings: SanityDocument[] = [];
  let Data: SanityDocument[] = [];

  if (filter === "all") selectedRatings = ReviewsData;
  if (filter === "poor")
    selectedRatings = ReviewsData.filter((data) => data.rate <= 2);
  if (filter === "fair")
    selectedRatings = ReviewsData.filter(
      (data) => data.rate >= 3 && data.rate <= 4
    );
  if (filter === "good")
    selectedRatings = ReviewsData.filter((data) => data.rate === 5);
  if (searchWord !== "" && !searchWord.includes(" ")) {
    Data = selectedRatings.filter((data) =>
      extractPlainText(data.message)
        .toLowerCase()
        .includes(searchWord.toLowerCase())
    );
  } else {
    Data = selectedRatings;
  }

  if (!Data.length) return <EmptyReview />;

  return <ReviewCard Data={Data} searchWord={searchWord} />;
}
