"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function FilterRating() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value;

    const params = new URLSearchParams(searchParams);

    // 1. BUILD THE URL
    params.set("rating", filter);

    // 2. PROGRAMATICALY NAVIGATE TO THE URL
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <select
      className="w-[157px] text-[#2a2a2a] h-[42px] border-1 border-[#8d8d8d] placeholder:text-sm rounded-sm px-3 focus:border-[#009a49] outline-none cursor-pointer"
      onChange={(e) => handleFilter(e)}
      defaultValue={searchParams.get("rating") || ""}
    >
      <option value="all">Filter</option>
      <option value="poor">1-2 Rating</option>
      <option value="fair">3-4 Rating</option>
      <option value="good">5 Rating</option>
    </select>
  );
}
