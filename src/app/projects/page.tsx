"use client";
import React from "react";
import { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Loading from "../components/Loading";
type Project = {
  id: string;
  title: string;
  shortDescription: string;
  images: {
    url: string;
    main: boolean;
  }[];
};

const Card = ({
  project,
  complete,
}: {
  project: Project;
  complete: () => void;
}) => {
  return (
    <div className="relative bg-white w-full h-full overflow-hidden flex items-center justify-center cursor-pointer group">
      <div className="absolute w-full h-full group-hover:grayscale duration-300 transition-all">
        <Image
          src={
            project.images.find((image: any) => image.main == true)?.url || ""
          }
          alt={"Project image"}
          fill
          className="object-cover group-hover:scale-125 duration-300 transition-all"
          onLoad={complete}
        />
      </div>
      <div className="relative w-full h-full z-10">
        <svg
          width="88"
          height="98"
          viewBox="0 0 88 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full absolute scale-75"
        >
          <path
            d="M39 1.88675C42.094 0.100423 45.906 0.100423 49 1.88675L82.3013 21.1132C85.3953 22.8996 87.3013 26.2008 87.3013 29.7735V68.2265C87.3013 71.7992 85.3953 75.1004 82.3013 76.8868L49 96.1132C45.906 97.8996 42.094 97.8996 39 96.1132L5.69873 76.8868C2.60472 75.1004 0.69873 71.7992 0.69873 68.2265V29.7735C0.69873 26.2008 2.60472 22.8996 5.69873 21.1132L39 1.88675Z"
            fill="#D9D9D9"
          />
        </svg>
        <div className="absolute w-full h-full flex items-center justify-center flex-col">
          <h1 className="text-4xl text-[#191919]">{project.title}</h1>
          <p className="text-xl italic text-[#191919]/70">
            {project.shortDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [prepared, setPrepared] = React.useState(false);
  const [loadingWidth, setLoadingWidth] = React.useState(0);
  useEffect(() => {
    const fetchProjects = async () => {
      const url = "/api/project/getProjects";
      const res = await fetch(url);
      const data = await res.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);
  return (
    <>
      <div
        className={`duration-1000 transition-all fixed  ${
          prepared ? "opacity-0 -z-10" : "opacity-100 z-[60]"
        }`}
      >
        <Loading
          width={loadingWidth}
          complete={() => {
            if (!prepared) {
              setPrepared(true);
            }
          }}
        />
      </div>

      <section className="scroll-smooth w-screen h-screen relative">
        <Navbar />
        <div className="pt-[7vh] h-screen w-screen overflow-y-hidden overflow-hidden grid grid-cols-4 p-8">
          {projects.map((project) => (
            <Card
              project={project}
              complete={() =>
                setLoadingWidth((prev) => prev + 100 / projects.length)
              }
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
