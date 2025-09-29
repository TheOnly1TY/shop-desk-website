import Image from "next/image";
import SignInImage from "@/public/shared/shopdesk-signin.jpeg";
import Logo from "@/app/_ui/Logo";

// export const metadata: Metadata = {
//   title: {
//     template: "%s - ShopDesk",
//     default: "ShopDesk - The simplest way to manage your shop!",
//   },
//   description:
//     "From inventory tracking to sales monitoring and order management. Shop Desk gives you the tools to run your business smoothly—all in one easy-to-use platform.",
// };

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      {/* Left Side - Image with Logo */}
      <div className="relative w-full md:w-1/2 h-[40vh] md:h-full">
        <Image
          src={SignInImage}
          alt="signin image"
          fill
          className="object-cover"
          priority
        />

        {/* Logo - top left */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
          <Logo />
        </div>
      </div>

      {/* Right Side - Form Section (scrollable) */}
      <div className="flex items-center justify-center w-full md:w-1/2 bg-white overflow-y-auto">
        <div className="w-full flex justify-center py-10">{children}</div>
      </div>
    </div>
  );
}
