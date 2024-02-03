import React from "react";

const Navbar = () => {
  return (
    <div className="fixed h-[5vh] w-full flex justify-between bg-white uppercase px-4">
      <div className="flex items-center">
        <a className="text-xl cursor-pointer">Krystian Cichorz</a>
      </div>
      <div className="flex items-center gap-4">
        <a className="text-xl tracking-widest cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-middle after:h-[4px] after:duration-500 after:bg-green-500">
          Home
        </a>
        <a className="text-xl tracking-widest cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-middle after:h-[4px] after:duration-500 after:bg-green-500">
          Projects
        </a>
      </div>
    </div>
  );
};

export default Navbar;
