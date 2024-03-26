"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Messages from "../components/Messages";

const Page = () => {
  const { data: session } = useSession();
  const [selected, setSelected] = useState<number>(0);
  if (!session || !session.user) {
    redirect("/");
  }
  const options = ["Messages", "About Me", "Skills", "Projects"];
  return (
    <section className="w-screen h-screen overflow-hidden grid grid-cols-4 justify-center items-center">
      <div className="h-full top-[5vh] flex flex-col items-center justify-center border-r-4 border-black">
        <h1 className="text-3xl p-4 cursor-default">Dashboard</h1>
        <ul className="mt-4 flex flex-col gap-4 text-xl w-full text-center *:p-4 ">
          <li
            className={`cursor-pointer hover:bg-black hover:text-white transition-color duration-300 ${
              selected === 0 && "bg-black text-white"
            }`}
            onClick={() => setSelected(0)}
          >
            MESSAGES
          </li>
          <li
            className={`cursor-pointer hover:bg-black hover:text-white transition-color duration-300 ${
              selected === 1 && "bg-black text-white"
            }`}
            onClick={() => setSelected(1)}
          >
            ABOUT ME
          </li>
          <li
            className={`cursor-pointer hover:bg-black hover:text-white transition-color duration-300 ${
              selected === 2 && "bg-black text-white"
            }`}
            onClick={() => setSelected(2)}
          >
            SKILLS
          </li>
          <li
            className={`cursor-pointer hover:bg-black hover:text-white transition-color duration-300 ${
              selected === 3 && "bg-black text-white"
            }`}
            onClick={() => setSelected(3)}
          >
            PROJECTS
          </li>
        </ul>
      </div>
      <div className="relative h-full top-[5vh] flex flex-col col-span-3 items-center justify-center">
        <h1 className="absolute top-0 p-4 text-3xl">{options[selected]}</h1>
        {selected === 0 && <Messages />}
        {selected === 1 && <AboutMe />}
        {selected === 2 && <Skills />}
        {selected === 3 && <div>Projects</div>}
      </div>
    </section>
  );
};

export default Page;
