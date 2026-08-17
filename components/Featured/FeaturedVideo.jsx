import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const FeaturedVideo = ({refForward, ...props }) => {
  const ref = useRef(null);

  const variants = {
    initial: { scale: 1, x: 0, y: 0 },
    animate: { scale: 1.08, x: 0, y: 0 },
  };

  const { scrollYProgress } = useScroll({
    target: refForward,
    layoutEffect: false,
  });

  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={progress > 0.5 ? "animate" : "initial"}
      className="relative md:absolute mx-auto md:mx-0 mt-4 md:mt-0 md:top-[55vh] md:left-20 md:translate-x-0 md:translate-y-0 z-30 w-[82vw] md:w-[40vw] max-w-[22rem] md:max-w-[856px] overflow-hidden rounded-3xl"
      {...props}
    >
     <img
  src={`${BASE_PATH}/Portfolio_Img-4.png`}
  alt="Featured portrait"
  className="block w-full h-auto object-contain"
    />
    </motion.div>
  );
};

export default FeaturedVideo;
