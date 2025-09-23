export default function LoadMoreButton({ action }: { action: () => void }) {
  return (
    <button
      className="flex justify-center items-center mx-auto text-sm leading-5 text-white bg-[#009a49] hover:border hover:border-[#009a49] hover:bg-white hover:text-[#009a49] transition-all duration-300 ease-in-out rounded-[6px] py-2.5 px-4 mt-10 cursor-pointer"
      onClick={action}
    >
      Load More
    </button>
  );
}
