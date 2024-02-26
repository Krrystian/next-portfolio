import React from "react";
import Link from "next/link";
import ScrollTo from "./ScrollTo";

const Navbar = () => {
  return (
    <div className="fixed h-[5vh] z-50 w-full flex justify-between bg-white uppercase px-4">
      <div className="flex items-center">
        <ScrollTo target="landing_page" text="Krystian Cichorz" />
      </div>
      <div className="flex items-center gap-4">
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
    </div>
  );
};

export default Navbar;
