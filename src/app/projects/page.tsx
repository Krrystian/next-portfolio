"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#i2", {
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: "#i2",
        start: "top 80%",
        end: "top 20%",
      },
    });
  }, []);
  return (
    <section className="snap-mandatory snap-y text-3xl flex w-screen min-h-screen justify-center items-center flex-col scroll-smooth">
      <div className="h-screen flex items-center w-full justify-center">
        <p id="i1">Item 1</p>
      </div>
      <div className="h-screen flex items-center w-full justify-center">
        <p id="i2">Item2</p>
      </div>
      <div className="h-screen flex items-center w-full justify-center">
        <p id="i3">Item 3</p>
      </div>
    </section>
  );
};

export default Page;
