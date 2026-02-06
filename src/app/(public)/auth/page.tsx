"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/icons/Logo.png";

export default function AuthPage() {
  return (
    <>
      <div className="flex flex-col items-center pb-20 pt-14">
        <Image src={logo} alt="logo image" className="h-20 mb-20 w-52" />
        <p className="text-gray-800 font-[700] text-lg mb-6">ورود / ثبت‌نام</p>
        <div className="flex flex-col items-center mb-5 gap-y-6">
          <Link
            href="/auth/otp"
            className="bg-primary-500 text-gray-50 px-4 py-2 rounded hover:bg-primary-700 transition min-w-56 text-center"
          >
            از طریق رمز یک بار مصرف
          </Link>
        </div>
        <p className="text-gray-800 text-xs text-center">
          ورود و عضویت در ترخینه به منزله قبول
          <span className="text-primary-500"> قوانین و مقررات </span> است.
        </p>
      </div>
    </>
  );
}
