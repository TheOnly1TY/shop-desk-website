"use client";

import Image from "next/image";
import Logo from "../../_ui/Logo";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isNavItemOpen, setIsNavItemOpen] = useState<boolean>(false);

  return (
    <>
      <header className="fixed flex justify-center items-center w-full bg-white border-b border-b-[#dedede] px-6 md:px-10 z-30">
        <nav className="flex justify-between items-center h-[71px] lg:h-24 w-full lg:max-w-[1210px]">
          <div>
            <Logo />
          </div>

          {/* NAV MENU */}
          <ul
            className={`
    fixed top-0 right-0 h-screen w-3/4 bg-white shadow-lg flex flex-col items-center gap-8 pt-24
    transform transition-transform duration-500 ease-in-out
    ${isNavItemOpen ? "translate-x-0" : "translate-x-full"}
    lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:shadow-none lg:flex-row lg:pt-0 lg:translate-x-0
  `}
          >
            <li className="text-sm leading-5 hover:text-[#009a49] transition-all duration-300 ease-in-out cursor-pointer">
              <Link href="/" onClick={() => setIsNavItemOpen(false)}>
                Home
              </Link>
            </li>
            <li className="text-sm leading-5 hover:text-[#009a49] transition-all duration-300 ease-in-out cursor-pointer">
              <Link href="/blog" onClick={() => setIsNavItemOpen(false)}>
                Blog
              </Link>
            </li>
            <li className="text-sm leading-5 hover:text-[#009a49] transition-all duration-300 ease-in-out cursor-pointer">
              <Link href="/pricing" onClick={() => setIsNavItemOpen(false)}>
                Pricing
              </Link>
            </li>
            <li className="text-sm leading-5 hover:text-[#009a49] transition-all duration-300 ease-in-out cursor-pointer">
              <Link href="/reviews" onClick={() => setIsNavItemOpen(false)}>
                Reviews
              </Link>
            </li>
            <li className="text-sm leading-5 hover:text-[#009a49] transition-all duration-300 ease-in-out cursor-pointer">
              <Link href="/faq" onClick={() => setIsNavItemOpen(false)}>
                FAQ
              </Link>
            </li>
            <li
              className="flex justify-center items-center w-[7.375rem] h-10 text-sm leading-5 rounded-lg bg-[#009a49] text-white 
               hover:border-[#009a49] hover:border hover:text-[#009a49] hover:bg-transparent 
               transition-all duration-300 ease-in-out cursor-pointer"
            >
              <Link href="/signin" onClick={() => setIsNavItemOpen(false)}>
                Sign In
              </Link>
            </li>
          </ul>

          {/* MOBILE TOGGLE */}
          <div
            className="lg:hidden cursor-pointer z-50"
            onClick={() => setIsNavItemOpen((prev) => !prev)}
          >
            {isNavItemOpen ? (
              <Image
                src="/shared/icon-cancel.svg"
                width={24}
                height={24}
                alt="close menu button"
              />
            ) : (
              <Image
                src="/shared/icon-menu.svg"
                width={24}
                height={24}
                alt="open menu button"
              />
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
