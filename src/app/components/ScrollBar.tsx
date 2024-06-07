"use client";
import { motion, scroll, useScroll, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

const ScrollBar = () => {
  const [scaleY, setScaleY] = useState(0);

  useEffect(() => {
    scroll((progress) => setScaleY(progress));
  }, []);
  return (
    <motion.div
      style={{ scaleY: scaleY, transformOrigin: "top" }}
      className="fixed bg-black w-2 overflow-hidden h-full z-[60] right-0"
      initial={{ scaleY: 0 }}
    >
      abc
    </motion.div>
  );
};

export default ScrollBar;
