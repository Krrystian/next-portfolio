"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/dboardSlice";
interface ScrollToProps {
  target: string;
  text: string;
}

const ScrollTo: React.FC<ScrollToProps> = ({ target, text }) => {
  const pathname: string = usePathname();
  const isMenu = useSelector((state: any) => state.dboardSlice.showMenu);
  const dispatch = useDispatch();

  const scrollToTarget = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    if (isMenu) {
      dispatch(toggleMenu());
    }
  };

  if (pathname !== "/") {
    return (
      <Link
        href={`/#${target}`}
        className="text-xl uppercase tracking-widest cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-middle after:h-[4px] after:duration-500 after:bg-green-500"
        onClick={() => scrollToTarget(target)}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <button
        className="text-xl uppercase tracking-widest cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-middle after:h-[4px] after:duration-500 after:bg-green-500"
        onClick={() => scrollToTarget(target)}
      >
        {text}
      </button>
    );
  }
};

export default ScrollTo;
