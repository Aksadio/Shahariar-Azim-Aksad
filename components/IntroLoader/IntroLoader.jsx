"use client";

import React, { useEffect, useState } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const IntroLoader = ({ onFinish }) => {
  const [count, setCount] = useState(1);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyShown = sessionStorage.getItem("introShown");
    if (alreadyShown) {
      setHide(true);
      onFinish?.();
      return;
    }

    const totalDuration = 6000; // ms, 1 -> 100
    const stepTime = totalDuration / 100;

    let current = 1;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= 100) {
        clearInterval(interval);
        sessionStorage.setItem("introShown", "1");
        setTimeout(() => {
          setHide(true);
          onFinish?.();
        }, 300);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (hide) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.3s ease",
        opacity: count >= 100 ? 0 : 1,
        pointerEvents: count >= 100 ? "none" : "auto",
      }}
    >
      <img
        src={`${BASE_PATH}/hello.gif`}
        alt="Loading"
        style={{ width: "180px", height: "180px", objectFit: "contain" }}
        draggable="false"
      />

      <div
  style={{
    position: "absolute",
    bottom: "24px",
    right: "24px",
    color: "#fff",
    fontSize: "20px",
    fontWeight: 600,
    fontFamily: "monospace",
    fontVariantNumeric: "tabular-nums",
    width: "3ch",
    textAlign: "right",
  }}
>
  {count}
     </div>
    </div>
  );
};

export default IntroLoader;
