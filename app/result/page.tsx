"use client";
import React, { useEffect, useState } from "react";

const Result = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken as any);
  }, []);

  return <main className="main">token: {token}</main>;
};

export default Result;
