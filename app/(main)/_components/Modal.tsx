"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ConfirmedMessage from "./ConfirmedMessage";
type Inputs = {
  email: string;
  question: string;
};
export default function Modal({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    reset();
    setIsConfirmed(true);
  };

  return (
    <div>
      <div className="fixed top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="w-[320px] md:w-auto bg-white rounded-[10px] md:p-8 p-6">
          {!isConfirmed ? (
            <>
              {" "}
              <h2 className="text-lg md:text-2xl md:leading-9 mb-4">
                Didn&apos;t find your answer? Ask us directly
              </h2>
              <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between items-center">
                  <label htmlFor="question" className="text-[#2a2a2a] mb-2">
                    Email Address
                  </label>
                  {errors.email ? (
                    <span className="tsxt-sm text-red-600">
                      {errors.email.message}
                    </span>
                  ) : null}
                </div>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "can't be empty",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "invalid email",
                    },
                  })}
                  className="text-[#2a2a2a] h-10 border-1 border-[#8d8d8d] mb-4 placeholder:text-sm rounded-sm px-4 focus:border-[#009a49] outline-none"
                  placeholder="Provide a valid email"
                />
                <div className="flex justify-between items-center">
                  <label htmlFor="question" className="text-[#2a2a2a] mb-2">
                    Your Question
                  </label>
                  {errors.question ? (
                    <span className="tsxt-sm text-red-600">
                      {errors.question.message}
                    </span>
                  ) : null}
                </div>
                <textarea
                  id="question"
                  {...register("question", { required: "can't be empty" })}
                  placeholder="Type your question..."
                  className="text-[#2a2a2a] border-1 border-[#8d8d8d] mb-4 placeholder:text-sm focus:border-[#009a49] rounded-sm h-20 py-2 px-4 outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="text-sm leading-5 text-white bg-[#009a49] hover:border hover:border-[#009a49] hover:bg-white hover:text-[#009a49] transition-all duration-300 ease-in-out rounded-[6px] py-2.5 px-4 cursor-pointer"
                >
                  Send Question
                </button>
              </form>
            </>
          ) : (
            <ConfirmedMessage setIsModalOpen={setIsModalOpen} />
          )}
        </div>
      </div>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40"
        onClick={() => setIsModalOpen(false)}
      ></div>
    </div>
  );
}
