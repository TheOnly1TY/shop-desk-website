"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen pt-35">
      <h2 className="text-7xl font-bold text-[#2a2a2a]">
        Something went wrong :(
      </h2>

      <Link
        href="/"
        className="text-white bg-primary-brand py-1.5 px-3 duration-300 hover:bg-white hover:text-primary-brand hover:border hover:border-primary-brand rounded-lg"
      >
        Reset
      </Link>
    </div>
  );
}
