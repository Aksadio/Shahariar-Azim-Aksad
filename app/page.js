"use client";
import { Suspense, useRef, useEffect, useState } from "react";
import IntroLoader from "@/components/IntroLoader/IntroLoader";
import WelcomeBadge from "@/components/WelcomeBadge/WelcomeBadge";
import Footer from "@/components/Character/Experience";
import FeaturedVideo from "@/components/Featured/FeaturedVideo";
import Header from "@/components/Featured/Header";
import Skiggle from "@/components/Featured/Skiggle";
import SubHeader from "@/components/Featured/SubHeader";
import Description from "@/components/Navbar/Description";
import Navbar from "@/components/Navbar/Navbar";
import ScrollText from "@/components/Navbar/ScrollText";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import HeroSection from "@/components/HeroSection/HeroSection";
import SmoothScroll from "@/components/SmoothScroll";
import GradualBlur from "@/components/GradualBlur/GradualBlur";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const ref = useRef(null);
  const blurRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    console.clear();
    console.log(
      "%cMADE BY AKSAD",
      "background: #D9E6FF; color: #0f172a; font-size: 16px; font-weight: 800; padding: 10px 16px; border-radius: 10px; letter-spacing: 2px;"
    );
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const blur = blurRef.current;
    const footer = document.getElementById("main-footer");
    if (!blur || !footer) return;

    const setVisible = (visible) =>
      gsap.to(blur, { autoAlpha: visible ? 1 : 0, duration: 0.3 });

    const footerInView = footer.getBoundingClientRect().top < window.innerHeight;
    gsap.set(blur, { autoAlpha: footerInView ? 0 : 1 });

    const trigger = ScrollTrigger.create({
      trigger: footer,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => setVisible(false),
      onEnterBack: () => setVisible(false),
      onLeave: () => setVisible(false),
      onLeaveBack: () => setVisible(true),
    });

    return () => trigger.kill();
  }, []);

  return (
    <>
    {showIntro && <IntroLoader onFinish={() => setShowIntro(false)} />}
    <SmoothScroll>
    <Suspense
      fallback={
        <div className="w-screen bg-black h-screen text-white text-4xl md:text-7xl lg:text-9xl flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <div className="bg-bg text-fg h-auto w-screen overflow-x-hidden">
        <Navbar />

        <HeroSection />
        <div
          id="about"
          className="h-auto md:h-[190vh] relative mt-16 md:mt-[10rem] flex flex-col md:block pb-16 md:pb-0 gap-8 md:gap-0"
          ref={ref}
        >
          <Skiggle />
          <Header />
          
          <SubHeader />
        </div>

        <Projects />

        <HorizontalScroll />
        <Contact />
        <SiteFooter />

        {/* GradualBlur — hidden when footer is in view */}
        <div
          ref={blurRef}
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 99999,
          }}
        >
          <GradualBlur
            target="parent"
            position="bottom"
            height="6rem"
            strength={2}
            divCount={6}
            curve="bezier"
            exponential={false}
            opacity={0.9}
            zIndex={1}
          />
        </div>
      </div>
    </Suspense>
    </SmoothScroll>
    {!showIntro && <WelcomeBadge />}
    </>
  );
}
