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
      className={`z-100 h-[95vh] top-[5vh] z-50 flex flex-col justify-center bg-white fixed right-0 w-[50%] duration-500 transition-all shadow-2xl translate-x-[100%] ${
        isMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex flex-col gap-8 items-center justify-center">
        <ScrollTo target="about_me" text="About Me"></ScrollTo>
        <Link
          href="/projects"
          prefetch={true}
          className="uppercase text-3xl tracking-widest cursor-pointer"
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
