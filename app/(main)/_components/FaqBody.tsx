"use client";

import Image from "next/image";
import FAQData from "../../../public/data/faq.json";
import { useState } from "react";

export default function FaqBody() {
  const [openFaq, setOpenFaq] = useState<null | number>(null);

  const handleToggle = (id: number | null) =>
    setOpenFaq((prev) => (prev === id ? null : id));

  return (
    <ul className="max-w-[1210px] mx-auto grid gap-y-12 lg:gap-y-[54px] mt-16 md:mt-24">
      {FAQData.map((faq, id) => (
        <li key={id} className="flex flex-col lg:flex-row justify-between">
          <h2 className="text-2xl md:text-[28px] leading-[36px] md:leading-[42px] text-[#2a2a2a] mb-4 md:mb-6">
            {faq.title}
          </h2>
          <ul className="w-full lg:w-[587px] cursor-pointer">
            {faq.faq.map((questionList, id) => (
              <li key={id} onClick={() => handleToggle(questionList.id)}>
                <hr className="border-t border-[#BBBBBB]" />
                <div className="my-3 md:my-5 md:mx-4">
                  <p className="flex justify-between items-center text-base leading-6 text-[#2a2a2a]">
                    {questionList.questions}

                    <Image
                      src="/shared/icon-dropdown.svg"
                      width={24}
                      height={24}
                      className={`transition-all duration-300 ease-in--out ${
                        questionList.id === openFaq ? "rotate-180" : "rotate-0"
                      }`}
                      alt="dropdown - open answer"
                    />
                  </p>
                  {openFaq === questionList.id && (
                    <p className="text-gray-600 mt-4">{questionList.answers}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
