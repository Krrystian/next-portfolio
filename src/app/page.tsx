"use client";
import { useState } from "react";

export default function Home() {
  const [snap, setSnap] = useState(0);
  return (
    <section className="snap-y snap-mandatory overflow-y-scroll h-screen w-screen no-scrollbar">
      <div className="min-h-screen min-w-screen flex justify-center items-center snap-center">
        <div className="flex flex-col gap-4 select-none cursor-default">
          <p className="text-5xl font-extrabold">Hello! My name is</p>
          <p className="text-7xl text-green-500 font-extrabold ">
            Krystian Cichorz.
          </p>
          <p className="text-5xl font-extrabold">I'm a fullstack developer.</p>
        </div>
      </div>
      <div className="min-h-screen min-w-screen flex justify-center items-center snap-center">
        <div className="flex flex-col gap-4 select-none cursor-default">
          <p className="text-5xl font-extrabold">Hello! My name is</p>
          <p className="text-7xl text-green-500 font-extrabold ">
            Krystian Cichorz.
          </p>
          <p className="text-5xl font-extrabold">I'm a fullstack developer.</p>
        </div>
      </div>
    </section>
  );
}
