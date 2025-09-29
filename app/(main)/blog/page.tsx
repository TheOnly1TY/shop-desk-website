import { Suspense } from "react";
import MainBlog from "../_components/MainBlog";
import BlogList from "../_components/BlogList";
import ReviewSkeletonLoader from "../_ui/ReviewSkeletonLoader";

export default async function page() {
  return (
    <div className="pt-35 mb-16 md:mb-24 lg:mb-40 px-6 md:px-10">
      <div className="max-w-[75.625rem] mx-auto">
        <div className="max-w-[862px] mb-16">
          <h1 className="text-[1.75rem] md:text-[48px] leading-[2.625rem] md:leading-[72px] ">
            ShopDesk Blog Coverage
          </h1>
          <p className="text-sm md:text-base leading-5 md:leading-[24px] text-[#8d8d8d]">
            Shop Desk blogs provide expert tips, insights, and updates to help
            small business owners streamline their operations, grow their stores
            and make the most of our app&apos;s features
          </p>
        </div>
        <div className="mb-16 md:mb-24 lg:mb-40">
          <MainBlog />
        </div>
        <section>
          <div>
            <h2 className="text-[24px] leading-[36px] text-[#2a2a2a] mb-[40px]">
              Featured Blog Post
            </h2>

            <Suspense fallback={<ReviewSkeletonLoader />}>
              <BlogList />
            </Suspense>
          </div>
        </section>
      </div>
    </div>
  );
}
