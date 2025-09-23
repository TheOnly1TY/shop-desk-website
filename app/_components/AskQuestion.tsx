"use client";
import { useState } from "react";
import Modal from "../_components/Modal";

export default function AskQuestion() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      {" "}
      <div className="px-6 md:px-10 mt-12">
        <div className="max-w-[1210px] mx-auto">
          <p className="text-base leading-6 italic mb-2">
            Still can&apos;t find the solution you need?
          </p>
          <button
            className="text-sm leading-5 text-white bg-[#009a49] hover:border hover:border-[#009a49] hover:bg-white hover:text-[#009a49] transition-all duration-300 ease-in-out rounded-[6px] py-2.5 px-4 cursor-pointer"
            onClick={() => setIsModalOpen((prev) => !prev)}
          >
            Send Your Question
          </button>
        </div>
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}
