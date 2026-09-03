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
        zIndex: 9998,
        pointerEvents: "none",
      }}
    >
      <img
        src={`${BASE_PATH}/welcome.gif`}
        alt="Welcome"
        style={{ width: "64px", height: "64px", objectFit: "contain" }}
        draggable="false"
      />
    </div>
  );
};

export default WelcomeBadge;
