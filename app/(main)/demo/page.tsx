"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import AuthLayout from "../AuthLayout";
import { toast } from "react-toastify";
import { ToastProperties } from "@/app/_libs/helpers";
import { useState } from "react";

type DemoFormInputs = {
  name: string;
  email: string;
  company: string;
  phone: string;
  businessType: string;
  message?: string;
};

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DemoFormInputs>();

  const onSubmit: SubmitHandler<DemoFormInputs> = async () => {
    setIsLoading(true);
    // artificial delay(to make things feel real world right?😎😂)
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
    toast.success("Request Sent Sucessfully", ToastProperties);
  };

  return (
    <AuthLayout>
      <div className="w-full md:max-w-2xl px-6 py-10">
        {/* Heading */}
        <div className="text-center my-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#171717]">
            Request a Demo of ShopDesk
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            See how ShopDesk can help you manage inventory, track sales, and
            grow your business—all from one dashboard.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#171717] mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Full name is required" })}
                placeholder="John Doe"
                className={`mt-1 block w-full text-[#171717] placeholder:text-sm rounded-md border px-3 py-2 focus:outline-none focus:border-primary-brand ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#171717] mb-1"
              >
                Business Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
                placeholder="you@company.com"
                className={`mt-1 block w-full text-[#171717] placeholder:text-sm rounded-md border px-3 py-2 focus:outline-none focus:border-primary-brand ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Company / Shop Name */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-[#171717] mb-1"
              >
                Company / Shop Name
              </label>
              <input
                type="text"
                id="company"
                {...register("company", {
                  required: "Company / Shop name is required",
                })}
                placeholder="E.g. BrightMart Supermarket"
                className={`mt-1 block w-full text-[#171717] placeholder:text-sm rounded-md border px-3 py-2 focus:outline-none focus:border-primary-brand ${
                  errors.company ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.company && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.company.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#171717] mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?\d{10,15}$/,
                    message: "Enter a valid phone number",
                  },
                })}
                placeholder="+234 812 345 6789"
                className={`mt-1 block w-full text-[#171717] placeholder:text-sm rounded-md border px-3 py-2 focus:outline-none focus:border-primary-brand ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Type of Business */}
          <div>
            <label
              htmlFor="businessType"
              className="block text-sm font-medium text-[#171717] mb-1"
            >
              Type of Business
            </label>
            <select
              id="businessType"
              {...register("businessType", {
                required: "Please select your business type",
              })}
              className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary-brand ${
                errors.businessType ? "border-red-500" : "border-gray-300"
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
              <p className="text-xs text-red-600 mt-1">
                {errors.businessType.message}
              </p>
            )}
          </div>

          {/* Message (optional) */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#171717] mb-1"
            >
              Message (optional)
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={3}
              placeholder="Tell us a bit about your shop or what you’d like to see in the demo..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary-brand resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-3 w-full bg-primary-brand hover:bg-primary-brand/80 text-white font-medium py-2.5 rounded-lg transition-all duration-200 disabled:bg-primary-brand/30 cursor-pointer"
          >
            {isLoading ? "Submitting..." : "Request Demo"}
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 mt-5 text-center">
          By requesting a demo, you agree to be contacted by the ShopDesk team
          for scheduling and follow-up.
        </p>
      </div>
    </AuthLayout>
  );
}
