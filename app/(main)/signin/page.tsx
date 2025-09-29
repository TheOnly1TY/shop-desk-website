"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import AuthLayout from "../AuthLayout";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ToastProperties } from "@/app/_libs/helpers";
import { useState } from "react";

type SignInTypes = {
  email: string;
  password: string;
};

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInTypes>();
  const router = useRouter();

  // NOTE: THIS APPROACH FOR SIGNING A USER IS NOT BEST. THIS IS NOT A REAL WORLD WEB APP YET(i.e NO BACKEND)

  const onSubmit: SubmitHandler<SignInTypes> = async (data) => {
    const storedUser = JSON.parse(localStorage.getItem("shopdesk_user") ?? "");
    const { email: userEmail, password: userPassword } = storedUser;

    setIsLoading(true);

    // artificial delay(to make things feel real world right?😎😂)
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
    if (!storedUser) {
      toast.error("No user found, please sign up first");
      return;
    }

    if (data.email !== userEmail || data.password !== userPassword) {
      toast.error("Wrong Credentials", ToastProperties);
      return;
    }

    toast.success("Logged in Successfully", ToastProperties);

    // WAIT TILL TOAST NOTIFICATION IS DONE
    await new Promise((r) => setTimeout(r, 3000));

    router.push("/dashboard");
    reset();
  };

  return (
    <AuthLayout>
      {" "}
      <div className="w-full max-w-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Sign in to your Account
        </h2>
        <p></p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="flex justify-between items-center">
              {" "}
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#121212]"
              >
                Email
              </label>
              {errors.email && (
                <p className="text-sm text-red-600 font-inter">
                  {errors.email.message}
                </p>
              )}
            </div>
            <input
              {...register("email", {
                required: "can't be empty",

                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "*invalid email",
                },
              })}
              type="email"
              id="email"
              disabled={isLoading}
              className="mt-1 placeholder:text-sm block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-primary-brand disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#121212]"
              >
                Password
              </label>
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <input
              type="password"
              disabled={isLoading}
              id="password"
              {...register("password", {
                required: "can't be empty",
              })}
              className="mt-1 placeholder:text-sm block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-primary-brand disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-brand text-white py-2 rounded-md hover:bg-[#00833e] transition cursor-pointer disabled:bg-primary-brand/30 disabled:cursor-not-allowed"
          >
            {isLoading ? "Signing..." : " Sign In"}
          </button>
        </form>
        <p className="text-[#8d8d8d] mt-3">
          Don&apos;t have an account yet?{" "}
          <Link
            href="/signup"
            className="text-primary-brand hover:underline transition-all ease-in-out duration-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
