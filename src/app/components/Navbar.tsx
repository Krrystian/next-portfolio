"use client";
import React from "react";
import Link from "next/link";
import ScrollTo from "./ScrollTo";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/dboardSlice";

const Navbar = () => {
  const [width, setWidth] = React.useState(0);
  const isMenu = useSelector((state: any) => state.dboardSlice.showMenu);
  const dispatch = useDispatch();
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <nav className="fixed h-[7vh] z-50 w-full flex justify-between bg-white/50 backdrop-blur-sm uppercase px-4">
      <div className="flex items-center">
        <ScrollTo
          target="landing_page"
          text={width > 768 ? `Krystian Cichorz` : `KC`}
        />
      </div>
      <div className="hidden md:flex items-center gap-4">
        <ScrollTo target="about_me" text="About me" />
        <Link
          href="/projects"
          prefetch={true}
          className="text-xl tracking-widest cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-middle after:h-[4px] after:duration-500 after:bg-green-500"
        >
          Projects
        </Link>
        <ScrollTo target="contact" text="Contact" />
      </div>
      <div className="md:hidden flex items-center">
        <HiOutlineMenu
          size={25}
          className={`cursor-pointer ${isMenu ? "hidden" : "flex"}`}
          onClick={handleClick}
        />
        <IoCloseSharp
          size={25}
          className={`cursor-pointer ${isMenu ? "flex" : "hidden"}`}
          onClick={handleClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;
