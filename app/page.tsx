"use client";
import styles from "./page.module.css";
import { initOTPless } from "@/utils/initOtpless";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  useEffect(() => initOTPless(handleOtplessData), []);
  const router = useRouter();
  const handleOtplessData = (otplessUser: any) => {
    localStorage.setItem("token", otplessUser.token);
    router.push("/result");
  };
  return (
    <main className={styles.main}>
      <div id="otpless-login-page"></div>
    </main>
  );
}
