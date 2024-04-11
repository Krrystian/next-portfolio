"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { PiDotOutlineThin, PiDotOutlineFill } from "react-icons/pi";

type Project = {
  id: string;
  title: string;
  description: string;
  images: string[];
  stack: {
    description: string;
  }[];
  github: string;
  demo: string;
};

const page = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<Project>({
    title: "",
    description: "",
    images: [],
    stack: [{ description: "" }],
    github: "",
    demo: "",
    id: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const fetchProject = async () => {
      const url = `/api/project/getProject/${projectId}`;
      const res = await fetch(url);
      const data = await res.json();
      setProject(data);
      setLoaded(true);
    };
    fetchProject();
  }, [projectId]);

  if (!loaded) {
    return (
      <div className="w-screen h-screen flex justify-center items-center"></div>
    );
  }

  return (
    <section className="w-screen md:h-screen pt-[5vh] flex flex-col justify-center px-4 md:px-16">
      <div className="w-full grid grid-cols-1 md:grid-cols-8 py-4 md:py-0 gap-8 md:gap-0">
        <h1 className="md:col-span-8 text-4xl md:py-4 font-bold tracking-wider">
          {project.title}
        </h1>
        <div className="md:col-span-5 relative group flex justify-center">
          <Image
            src={
              project.images[currentIndex] ||
              "https://img.freepik.com/free-photo/background_53876-32170.jpg?w=2000&t=st=1712776298~exp=1712776898~hmac=40d4ad6a15482dff6ae9e50b6c112c47a6c8404d39fe9c466dfdd18f2c11a9b4"
            }
            alt={project.title}
            width={1200}
            height={500}
            className="rounded-md bg-cover bg-center duration-500 overflow-hidden select-none shadow-2xl"
          />
          <div className="absolute flex -bottom-8 left-[50%] translate-x-[-50%]">
            {project.images.map((_, index) =>
              index === currentIndex ? (
                <PiDotOutlineFill
                  key={index}
                  size={40}
                  onClick={() => setCurrentIndex(index)}
                  className="text-black cursor-pointer"
                />
              ) : (
                <PiDotOutlineThin
                  key={index}
                  size={40}
                  onClick={() => setCurrentIndex(index)}
                  className="text-black cursor-pointer"
                />
              )
            )}
          </div>
          <div>
            <BsChevronCompactLeft
              size={50}
              className="hidden group-hover:block absolute top-[50%] left-2 -translate-x-0 translate-y-[-50%] text-white bg-black/40 rounded-full cursor-pointer"
              onClick={() =>
                setCurrentIndex(
                  currentIndex > 0
                    ? currentIndex - 1
                    : project.images.length - 1
                )
              }
            />
            <BsChevronCompactRight
              size={50}
              className="hidden group-hover:block absolute top-[50%] right-2 -translate-x-0 translate-y-[-50%] text-white bg-black/40 rounded-full cursor-pointer"
              onClick={() =>
                setCurrentIndex(
                  currentIndex < project.images.length - 1
                    ? currentIndex + 1
                    : 0
                )
              }
            />
          </div>
        </div>
        <div className="md:col-span-3 md:px-8 flex flex-col justify-between cursor-default">
          <p className="text-base md:text-xl text-justify">
            {project.description}
          </p>
          <div className="flex flex-col md:text-xl text-green-500 gap-2 md:gap-4 font-bold">
            <Link href={project.demo} className="flex max-w-[100px]">
              Demo {"> >"}
            </Link>
            <Link href={project.github} className="flex max-w-[100px]">
              Github {"> >"}{" "}
            </Link>
          </div>
          <div>
            <p className="text-xl font-bold py-2"> Technologies:</p>
            <div className="*:bg-gray-500/30 *:rounded-md flex gap-4 *:px-2 *:py-1 flex-wrap *:w-[150px]">
              {project.stack.map((stack, index) => (
                <p key={index} className="text-lg text-center">
                  {stack.description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
