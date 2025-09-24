import Image from "next/image";
import Logo from "../_ui/Logo";

export default function Footer() {
  return (
    <footer className="px-6">
      <div className=" mx-auto mb-14">
        {" "}
        <hr className="border-t border-[#BBBBBB]" />
        <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center py-6">
          <div>
            <p className="text-base leading-6">Join 10,000+ businesses</p>
            <p className="text-base leading-6">Download ShopDesk App</p>
          </div>
          <div className="flex md:justify-center items-center gap-6 md:gap-4 mt-4 md:mt-0">
            <button className="text-sm leading-5 text-white bg-[#009a49] hover:border hover:border-[#009a49] hover:bg-white hover:text-[#009a49] transition-all duration-300 ease-in-out rounded-[6px] py-2.5 px-4 cursor-pointer">
              Download for Mobile
            </button>
            <button className="text-sm leading-5 text-white bg-[#009a49] hover:border hover:border-[#009a49] hover:bg-white hover:text-[#009a49] transition-all duration-300 ease-in-out rounded-[6px] py-2.5 px-4 cursor-pointer">
              Download for PC
            </button>
          </div>
        </div>
        <hr className="border-t border-[#BBBBBB]" />
        <div className="flex flex-wrap gap-8 justify-between mt-5 md:mt-10 mb-14">
          <div>
            <Logo />
            <p className="text-base leading-6 max-w-[160px] md:max-w-[253px] text-[#414141] mt-2.5">
              The simplest way to manage your shop!
            </p>
          </div>

          <div className="flex justify-between items-center md:gap-x-[67px]">
            <div className="">
              {" "}
              <h3 className="text-base leading-5 text-[#2a2a2a] mb-3">
                Quicklinks
              </h3>
              <ul className="flex flex-col md:gap-3">
                <li className="text-sm leading-5 text-[#414141]">Homepage</li>
                <li className="text-sm leading-5 text-[#414141]">Blog</li>
                <li className="text-sm leading-5 text-[#414141]">Pricing</li>
                <li className="text-sm leading-5 text-[#414141]">Reviews</li>
                <li className="text-sm leading-5 text-[#414141]">FAQS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base leading-5 text-[#2a2a2a] mb-3">Legal</h3>
              <ul className="flex flex-col gap-3">
                <li className="text-sm leading-5 text-[#414141]">Terms</li>
                <li className="text-sm leading-5 text-[#414141]">Privacy</li>
                <li className="text-sm leading-5 text-[#414141]">Cookies</li>
                <li className="text-sm leading-5 text-[#414141]">Licences</li>
                <li className="text-sm leading-5 text-[#414141]">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base leading-5 text-[#2a2a2a] mb-3">
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="text-sm leading-5 text-[#414141]">About Us</li>
                <li className="text-sm leading-5 text-[#414141]">Partners</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-[#141414] mb-3">
              <h3 className="text-sm leading-5">Customer Support</h3>
              <p className="text-bade leading-6">+234-814-285-8076</p>
            </div>
            <div className="text-[#141414] mb-10">
              <h3 className="text-sm leading-5">E-mail</h3>
              <p className="text-bade leading-6">support@shopdesk.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/shared/icon-facebook.svg"
                width={24}
                height={24}
                alt="facebook icon"
              />
              <Image
                src="/shared/icon-linkedin.svg"
                width={24}
                height={24}
                alt="linkedin icon"
              />
              <Image
                src="/shared/icon-instagram.svg"
                width={24}
                height={24}
                alt="instagram icon"
              />
              <Image
                src="/shared/icon-x.svg"
                width={24}
                height={24}
                alt="x icon"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
