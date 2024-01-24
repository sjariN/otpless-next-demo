"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { initOTPless } from "@/utils/initOtpless";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Note: We are adding 'ex' parameter to open login page automatically after redirection in between of authentication process
export default function Home() {
  const router = useRouter();

  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const paramsValue = urlParams.get("ex");
    if (urlParams.get("ex")) initOTPless(callback);
  },[]);
  

  const callback = (otplessUser:any) => {
    removeQueryParam("ex");
    localStorage.setItem('token',otplessUser.token);
    router.push('/result');
  };

  const openModal = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramsValue = urlParams.get("ex");

    if (!paramsValue) {
      const currentURL = window.location.href;
      const newParam1 = "ex=true";
      const updatedURL = `${currentURL}?${newParam1}`;
      window.history.pushState(null, "", updatedURL);
    }
    initOTPless(callback);
    const modalContainer = document.getElementById("modalContainer");
    modalContainer? modalContainer.style.display = "flex": "";

    setTimeout(() => {
      removeQueryParam('ex');
    }, 1000);
  };

  const removeQueryParam = (param) => {
    const url = new URL(window.location.href);
    url.searchParams.delete(param)
    window.history.pushState(null, "", url);
  }

  const closeModal = (e : any) => {
    removeQueryParam('ex');
    const modalContainer = document.getElementById("modalContainer");
    if (e.target === modalContainer) {
      modalContainer? modalContainer.style.display = "none": "";
    }
  };

  return (
    <main>
      <div className="modal-container" id="modalContainer" onClick={closeModal}>
          <div id="otpless-login-page"></div>
      </div>
      <button id="loginBtn" onClick={openModal}>
        Login with modal
      </button>
    </main>
  );
}
