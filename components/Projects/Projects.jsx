"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
  {
    name: "Password Generator",
    href: "https://aksadio.github.io/password-generator/",
    kind: "Web",
    note: "A secure, feature-rich password generator built with Python's secrets module — cryptographically safe and suitable for production use.",
  },
  {
    name: "1st Game",
    href: "https://aksadio.github.io/pong-game/",
    kind: "Web",
    note: "A classic Pong game with HTML, CSS, and JavaScript featuring player vs computer gameplay",
  },
  {
    name: "Constellation-explorer",
    href: "https://aksadio.github.io/constellation-explorer/",
    kind: "Web",
    note: "An interactive, browser-based app where you create and connect stars to build your own constellations — no libraries, no frameworks, just vanilla HTML/CSS/JS.",
  },
  {
    name: "Console",
    href: "https://aksadio.github.io/hacker-console/",
    kind: "Web",
    note: "A restricted-access terminal with a 3D animated login dashboard.",
  },
  {
    name: "QR",
    href: "https://qr-8jqu.onrender.com/",
    kind: "Web",
    note: "A stylish QR code generator built with Python — supports URLs, WiFi, contacts, emails, and more. Comes with both a CLI and a web UI.",
  },
  {
    name: "Aksad",
    href: "https://aksadio.github.io/Aksad/",
    kind: "Web",
    note: "Personal portfolio website built from scratch. Dark-themed, single-file, no frameworks.",
  },
];


// GIF Arrow
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const ArrowIcon = () => (
  <img
    src={`${BASE_PATH}/arrow.gif`}
    alt=""
    width="100%"
    height="100%"
    style={{
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
  />
);

const Row = ({ item, index }) => {
  const hasLink = Boolean(item.href);
  const Wrapper = hasLink ? "a" : "div";

  const wrapperProps = hasLink
    ? {
        href: item.href,
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <li className="pj-row">
      <Wrapper
        className={`pj-link${hasLink ? "" : " pj-link--static"}`}
        {...wrapperProps}
      >
        <span className="pj-num">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="pj-meta">
          <span className="pj-name">{item.name}</span>

          {item.role && (
            <span className="pj-role">{item.role}</span>
          )}

          {item.note && (
            <span className="pj-note">{item.note}</span>
          )}
        </div>

        <span className="pj-kind">{item.kind}</span>

        <span className="pj-arrow" aria-hidden="true">
          {hasLink ? (
            <ArrowIcon />
          ) : (
            <span className="pj-dot">•</span>
          )}
        </span>
      </Wrapper>
    </li>
  );
};


const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows =
        sectionRef.current.querySelectorAll(".pj-row");

      gsap.from(rows, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      const titles =
        sectionRef.current.querySelectorAll(".pj-title");

      gsap.from(titles, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects-section" ref={sectionRef}>
      <div className="pj-head">
        <span className="pj-label">PROJECTS</span>
        <h2 className="pj-title">selected work</h2>
      </div>

      <ul className="pj-list">
        {PROJECTS.map((p, i) => (
          <Row
            key={p.name}
            item={p}
            index={i}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
