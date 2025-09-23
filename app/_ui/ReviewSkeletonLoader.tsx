import React from "react";

export default function ReviewSkeletonLoader() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[42px]">
      <span className="block m-auto relative bg-white box-border w-full md:h-[150px] loader border-2 border-[#2a2a2a]/10 px-6 rounded-lg"></span>
      <span className="block m-auto relative bg-white box-border w-full md:h-[150px] loader border-2 border-[#2a2a2a]/10 px-6 rounded-lg"></span>
      <span className="block m-auto relative bg-white box-border w-full md:h-[150px] loader border-2 border-[#2a2a2a]/10 px-6 rounded-lg"></span>
      <span className="block m-auto relative bg-white box-border w-full md:h-[150px] loader border-2 border-[#2a2a2a]/10 px-6 rounded-lg"></span>
      <span className="block m-auto relative bg-white box-border w-full md:h-[150px] loader border-2 border-[#2a2a2a]/10 px-6 rounded-lg"></span>
      <span className="block m-auto relative bg-white box-border w-full md:h-[150px] loader border-2 border-[#2a2a2a]/10 px-6 rounded-lg"></span>
    </div>
  );
}
