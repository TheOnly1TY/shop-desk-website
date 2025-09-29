import type { Metadata } from "next";
import "./globals.css";
import { circular } from "./fonts";
import { Slide, ToastContainer } from "react-toastify";

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
        {children}
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      </body>
    </html>
  );
}
