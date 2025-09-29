import Image from "next/image";
import NoSearch from "@/public/reviews/no-search.png";

export default function EmptyReview() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={NoSearch} alt="no matches found" />
      <h2 className="text-3xl text-[#2a2a2a]">Whoops, no matches</h2>
      <p className="text-base text-[#8d8d8d]">
        We couldn&apos;t find any reviews
      </p>
      <p className="text-base text-[#8d8d8d]">Give it another go</p>
    </div>
  );
}
