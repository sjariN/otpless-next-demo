"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { initOTPless } from "@/utils/initOtpless";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(()=>initOTPless(callback),[]);
  
  const callback = (otplessUser:any) => {
    localStorage.setItem('token',otplessUser.token);
    (window as any).location.href = "/result";
  };

  return (
    <main>
    </main>
  );
}
