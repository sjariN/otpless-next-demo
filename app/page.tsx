"use client";

import { initOTPless } from "@/utils/initOtpless";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    initOTPless(callback);
  }, []);

  const callback = (otplessUser: any) => {
    localStorage.setItem("token", otplessUser.token);
    (window as any).location.href = "/result";
  };

  return (
    <main>
      <button className="loginBtn" id="otpless" data-custom="true">
        Login
      </button>
    </main>
  );
}
