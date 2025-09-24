import type { Metadata } from "next";
import "./globals.css";
import { circular } from "./fonts";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s - ShopDesk",
    default: "ShopDesk - The simplest way to manage your shop!",
  },
  description:
    "From inventory tracking to sales monitoring and order management. Shop Desk gives you the tools to run your business smoothly—all in one easy-to-use platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${circular.className} antialiased`}>
        <Navbar />
        <main className="relative flex-grow overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
