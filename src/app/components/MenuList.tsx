"use client";
import React from "react";
import ScrollTo from "./ScrollTo";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/dboardSlice";

const MenuList = () => {
  const isMenu = useSelector((state: any) => state.dboardSlice.showMenu);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div
      className={`z-100 h-[95vh] top-[5vh] z-50 flex flex-col justify-center bg-white fixed right-0 w-[50%] duration-500 transition-all shadow-2xl ${
        isMenu ? "translate-x-0" : "translate-x-[100%]"
      }`}
    >
      <div className="flex flex-col gap-8 items-center justify-center">
        <ScrollTo target="about_me" text="About Me"></ScrollTo>
        <Link
          href="/projects"
          prefetch={true}
          className="text-3xl uppercase tracking-widest cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-middle after:h-[4px] after:duration-500 after:bg-green-500"
          onClick={handleClick}
        >
          Projects
        </Link>
        <ScrollTo target="contact" text="Contact"></ScrollTo>
      </div>
    </div>
  );
};

export default MenuList;
