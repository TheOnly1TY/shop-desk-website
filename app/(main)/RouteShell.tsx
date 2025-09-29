"use client";

import Navbar from "@/app/(main)/_components/Navbar";
import Footer from "@/app/(main)/_components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const hideShell =
    pathname.startsWith("/signin") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/demo");
  return (
    <>
      {!hideShell && <Navbar />}
      <main className="relative flex-grow overflow-hidden">{children}</main>
      {!hideShell && <Footer />}
    </>
  );
}
