export default function ConfirmedMessage({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 text-center">
      <h2 className="text-2xl text-[#2a2a2a] font-semibold">
        Your Question has been sent
      </h2>
      <p className="max-w-[400px] mx-auto text-[#8d8d8d]">
        We&apos;ll respond to you shortly. Kindly check your email in few days
        time
      </p>
      <button
        className="text-sm leading-5 text-white bg-[#009a49] hover:border hover:border-[#009a49] hover:bg-white hover:text-[#009a49] transition-all duration-300 ease-in-out rounded-[6px] py-2.5 px-4 cursor-pointer"
        onClick={() => setIsModalOpen(false)}
      >
        Close
      </button>
    </div>
  );
}
