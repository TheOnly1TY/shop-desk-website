import FaqHeader from "../_components/FaqHeader";
import FaqBody from "../_components/FaqBody";
import AskQuestion from "../_components/AskQuestion";

export const metadata = {
  title: "FAQ",
  description:
    "Get questions and answers to what you are curious about ShopDesk",
};

export default function page() {
  return (
    <div className="pt-[71px] lg:pt-24 mb-16 md:mb-24 lg:mb-40">
      <FaqHeader />
      <div className="px-6 md:px-10">
        <FaqBody />
      </div>
      <AskQuestion />
    </div>
  );
}
