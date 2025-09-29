// import type { Metadata } from "next";

import RouteShell from "@/app/(main)/RouteShell";

// export const metadata: Metadata = {
//   title: {
//     template: "%s - ShopDesk",
//     default: "ShopDesk - The simplest way to manage your shop!",
//   },
//   description:
//     "From inventory tracking to sales monitoring and order management. Shop Desk gives you the tools to run your business smoothly—all in one easy-to-use platform.",
// };

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <RouteShell>{children}</RouteShell>
    </div>
  );
}
