import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/shared/logo.svg"
        width={47}
        height={47}
        priority
        alt="ShopDesk logo"
      />
      <span className="text-base leading-6">ShopDesk</span>
    </Link>
  );
}
