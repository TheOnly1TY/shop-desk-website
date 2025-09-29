"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [user, setUser] = useState<null | {
    name: string;
    email: string;
    company: string;
  }>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("shopdesk_user");

    if (!storedUser) {
      router.push("/signin");
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    } catch (error) {
      console.error("Invalid user data in localStorage:", error);
      localStorage.removeItem("shopdesk_user");
      router.push("/signin");
    }
  }, [router]);

  if (!user) {
    return <p>Loading...</p>;
  }

  const { name: fullName, email, company: companyName } = user;

  return (
    <section className="m-6 md:m-10">
      <header className="px-4 py-2 border-2 border-gray-200 rounded-xl">
        <div className="flex flex-col md:flex-row md:items-center md:gap-2">
          {" "}
          <Link href="/dashboard" className="flex items-center gap-1">
            <Image
              src="/shared/logo.svg"
              width={47}
              height={47}
              priority
              className="w-7 h-7 md:w-auto md:h-auto"
              alt="ShopDesk logo"
            />
            <span className="text-sm md:text-base leading-6">ShopDesk</span>
          </Link>
          <div className="hidden md:block w-[1px] h-4 bg-[#8d8d8d] mx-1 md:mx-2" />
          <p className="text-sm md:text-base">
            The simplest way to manage your shop!
          </p>
        </div>
      </header>
      <div className="min-h-screen flex items-center justify-center mt-[22px] md:mt-[44px]">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4"
              />
            </svg>
          </div>

          <h1 className="text-gray-600 mt-2 mb-6">
            Hi <span className="font-medium text-gray-800">{fullName}</span>,
            welcome to{" "}
            <span className="font-medium text-gray-800">ShopDesk</span>!
          </h1>

          <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 text-left mb-6">
            <p className="text-sm text-gray-700">
              <strong>Company:</strong>{" "}
              <span className="font-medium">{companyName}</span>
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <strong>Email:</strong>{" "}
              <span className="font-medium">{email}</span>
            </p>
          </div>

          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            We’re currently rebuilding the full workspace experience so you can
            manage your store, analytics, and settings all in one place.
          </p>

          <p className="text-sm text-gray-500 mb-6">
            You’re one of our early new version users — we’ll notify you at{" "}
            <span className="font-medium">{email}</span> once your workspace
            dashboard is live.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => router.push("/")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2 rounded-lg shadow-sm text-white font-medium transition
                       bg-[#009a49] hover:bg-[#00823f] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9be7b8]"
            >
              Return to Home
            </button>

            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  localStorage.removeItem("shopdesk_user");
                }
                router.push("/");
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2 rounded-lg border border-gray-200 text-gray-700 font-medium bg-white hover:bg-gray-50 transition"
            >
              Log Out
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-6">
            Thank you for joining early — exciting things are coming! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
