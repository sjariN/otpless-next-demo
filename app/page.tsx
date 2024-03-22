"use client";
import { initOTPless } from "@/utils/initOtpless";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    initOTPless(callback);
    return () => {
      const floater = document.getElementById("otpless-floating-button");
      if (floater) {
        document.body.removeChild(floater);
      }
    };
  });

  const callback = (otplessUser: any) => {
    localStorage.setItem("token", otplessUser.token);
    (window as any).location.href = "/result";
  };

  return <main></main>;
}
