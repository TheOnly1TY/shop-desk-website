"use client";

import Link from "next/link";
import AuthLayout from "../AuthLayout";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ToastProperties } from "@/app/_libs/helpers";
import { useState } from "react";

type SignUpDetailsType = {
  name: string;
  email: string;
  businessType: string;
  company: string;
  password: string;
  confirmPassword: string;
};

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<SignUpDetailsType>();

  // NOTE: THIS APPROACH FOR CREATING A USER IS NOT BEST. THIS IS NOT A REAL WORLD WEB APP YET(i.e NO BACKEND)

  const onSubmit: SubmitHandler<SignUpDetailsType> = async (data) => {
    setIsLoading(true);
    // artificial delay(to make things feel real world right?😎😂)
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
    localStorage.setItem("shopdesk_user", JSON.stringify(data));
    toast.success("Account Created! Kindly Sign In", ToastProperties);
    reset();
  };

  return (
    <AuthLayout>
      <div className="w-full md:max-w-2xl px-6 md:px-10 py-10">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#171717]">
          Create an account
        </h2>
        <p className="text-[#8d8d8d] mt-1 mb-6 text-sm md:text-base">
          Welcome to ShopDesk. Kindly fill up your details below to get started.
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#171717]"
              >
                Full Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                disabled={isLoading}
                type="text"
                id="name"
                className={`mt-1 block w-full text-[#171717] placeholder:text-sm rounded-md border px-3 py-2 focus:outline-none focus:border-primary-brand ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your Full Name"
              />
              {errors.name && (
                <p className="text-xs text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-[#121212]"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "*invalid email",
                  },
                })}
                disabled={isLoading}
                type="email"
                id="email"
                className={`mt-1 block w-full text-[#171717] placeholder:text-sm rounded-md border px-3 py-2 focus:outline-none focus:border-primary-brand ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Company / Shop Name */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-[#171717]"
              >
                Company / Shop Name
              </label>
              <input
                {...register("company", {
                  required: "Company is required",
                })}
                disabled={isLoading}
                type="text"
                id="company"
                className={`mt-1 block w-full text-[#171717] placeholder:text-sm rounded-md border px-3 py-2 focus:outline-none focus:border-primary-brand ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your Company or Shop Name"
              />
              {errors.company && (
                <p className="text-xs text-red-600">{errors.company.message}</p>
              )}
            </div>

            {/* Type of Business */}
            <div>
              <label
                htmlFor="businessType"
                className="block text-sm font-medium text-[#171717]"
              >
                Type of Business
              </label>
              <select
                {...register("businessType", {
                  required: "Business type is required",
                })}
                disabled={isLoading}
                id="businessType"
                className={`mt-1 block w-full text-[#171717] placeholder:text-sm rounded-md border px-3 py-2 focus:outline-none focus:border-primary-brand ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select your business type</option>
                <option value="retail">Retail Store</option>
                <option value="supermarket">Supermarket</option>
                <option value="wholesale">Wholesale Shop</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="restaurant">Restaurant</option>
                <option value="other">Other</option>
              </select>
              {errors.businessType && (
                <p className="text-xs text-red-600">
                  {errors.businessType.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#171717]"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                disabled={isLoading}
                type="password"
                id="password"
                className={`mt-1 block w-full text-[#171717] placeholder:text-sm rounded-md border px-3 py-2 focus:outline-none focus:border-primary-brand ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#171717]"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword", {
                  required: " can't be empty",
                  validate: (value) =>
                    value === watch("password") || "Password doesn't match",
                })}
                disabled={isLoading}
                type="password"
                id="confirmPassword"
                className={`mt-1 block w-full text-[#171717] placeholder:text-sm rounded-md border px-3 py-2 focus:outline-none focus:border-primary-brand ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="px-2 bg-primary-brand text-white py-2 rounded-md hover:bg-[#00833e] transition cursor-pointer disabled:bg-primary-brand/30 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating..." : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-[#8d8d8d] mt-3 text-sm text-center md:text-left">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-primary-brand hover:underline transition-all ease-in-out duration-300"
          >
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
