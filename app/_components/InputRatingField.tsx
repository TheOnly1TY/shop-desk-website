"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function InputRatingField() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("search") || "");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    const term = e.target.value;
    setQuery(term);
    if (query) {
      params.set("search", term.trim());
    } else {
      params.delete("search");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        id="search-testimonial"
        value={query}
        onChange={handleChange}
        placeholder="Looking for something specific?"
        className="w-[373px] text-[#2a2a2a] h-[42px] border border-[#8d8d8d] placeholder:text-sm rounded-sm px-3 focus:border-[#009a49] outline-none"
      />
    </form>
  );
}
