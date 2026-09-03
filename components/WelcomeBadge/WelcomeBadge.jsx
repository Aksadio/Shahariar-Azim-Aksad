"use client";

import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const WelcomeBadge = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
        zIndex: 999999,
        pointerEvents: "none",
      }}
    >
      <img
        src={`${BASE_PATH}/welcome.gif`}
        alt="Welcome"
        style={{ width: "110px", height: "110px", objectFit: "contain" }}
        draggable="false"
      />
    </div>
  );
};

export default WelcomeBadge;
