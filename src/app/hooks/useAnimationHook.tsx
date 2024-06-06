"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const useAnimationHook = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    //Animate landing page
    const l1 = new SplitType("#l1", { types: "chars" });
    const l2 = new SplitType("#l2", { types: "chars" });
    const l3 = new SplitType("#l3", { types: "chars" });

    const chars_l1 = l1.chars;
    const chars_l2 = l2.chars;
    const chars_l3 = l3.chars;

    gsap.to(["#l1", "#l2", "#l3"], { opacity: 1 });
    gsap.fromTo(
      [chars_l1, chars_l2, chars_l3],
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
      }
    );
  }, []);
};

export default useAnimationHook;
