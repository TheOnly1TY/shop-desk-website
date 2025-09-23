import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 min-h-screen pt-35">
      <h1 className="text-7xl font-bold text-[#2a2a2a]">404</h1>
      <h2 className="text-3xl text-[#2a2a2a]">Page Not Found</h2>
      <p className="text-[#8d8d8d]">
        The requested page does not exist. <br /> Please go back to the homepage
      </p>

      <Link
        href="/"
        className="text-white bg-primary-brand py-1.5 px-3 duration-300 hover:bg-white hover:text-primary-brand hover:border hover:border-primary-brand rounded-lg"
      >
        Go home
      </Link>
    </div>
  );
}
