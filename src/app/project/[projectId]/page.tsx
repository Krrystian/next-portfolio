"use client";
import Mouse from "@/app/components/Mouse";
import ScrollBar from "@/app/components/ScrollBar";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import Loading from "@/app/components/Loading";
type Project = {
  id: string;
  title: string;
  description: string[];
  stack: {
    description: string;
  }[];
  github: string;
  demo: string;
  images: {
    url: string;
    main: boolean;
    position: number;
  }[];
};

const Page = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<Project>({
    title: "",
    description: [],
    images: [],
    stack: [{ description: "" }],
    github: "",
    demo: "",
    id: "",
  });

  useEffect(() => {
    const fetchProject = async () => {
      const url = `/api/project/getProject/${projectId}`;
      const res = await fetch(url);
      const data = await res.json();
      setProject(data);
    };
    fetchProject();
  }, [projectId]);

  const imageRef = useRef<HTMLDivElement>(null);
  const imageScrollRef = useRef<HTMLDivElement>(null);
  const swapRef = useRef<HTMLDivElement>(null);
  const lastImageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageScrollRef,
    offset: ["start end", "end end"],
  });
  const { scrollYProgress: swapYProgress } = useScroll({
    target: swapRef,
    offset: ["start 0.8", "end end"],
  });
  const { scrollYProgress: lastImageYProgress } = useScroll({
    target: lastImageRef,
    offset: ["start 0.8", "end end"],
  });
  const size = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);
  const padding = useTransform(swapYProgress, [0, 1], ["0%", "100%"]);
  const padding2 = useTransform(lastImageYProgress, [0, 1], ["0%", "100%"]);
  const translation = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-125%", "0%"])
  );
  const [prepared, setPrepared] = React.useState(false);
  const [loadingWidth, setLoadingWidth] = React.useState(0);

  project.images.sort((a, b) => (a.position > b.position ? 1 : -1));
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
      <Mouse element={imageRef} />
      <ScrollBar />
      <section className="relative w-screen top-[7vh] flex flex-col min-h-[100vh] px-16 items-center">
        <div className="grid grid-cols-2 gap-16 items-center w-full h-[93vh] top-[7vh] pb-24 sticky ">
          <div className="flex flex-col gap-4">
            <h1 className="text-9xl font-extrabold text-left w-full pb-16">
              {project.title}
            </h1>
            {project.description.map((desc, index) => (
              <p key={index} className="text-2xl text-left">
                {desc}
              </p>
            ))}
          </div>
          <motion.div
            className="overflow-hidden rounded-3xl w-full h-full cursor-pointer relative flex flex-row"
            ref={imageRef}
          >
            <Image
              src={project.images[0]?.url || ""}
              alt={"Project img"}
              fill
              className="object-cover"
              onLoad={() => setLoadingWidth((prev) => prev + 33)}
              onClick={() => {
                window.open(project.demo || "", "_blank");
              }}
            ></Image>
          </motion.div>
        </div>
        <div
          className="sticky top-[7vh] h-[93vh] w-full flex justify-center pb-16 pointer-events-none"
          ref={imageScrollRef}
        >
          <motion.div
            className="relative rounded-xl border-[#191919] border-2 overflow-hidden pointer-events-auto"
            style={{
              translateY: translation,
              width: size,
              height: size,
            }}
          >
            <Image
              src={project.images[1]?.url || ""}
              alt={"Project img"}
              fill
              className="object-cover absolute"
              onLoad={() => setLoadingWidth((prev) => prev + 33)}
            ></Image>
            <motion.div
              style={{
                height: padding,
              }}
              className="relative w-full flex flex-row bg-white overflow-hidden"
            >
              <div className="relative w-[50%] flex justify-center items-center">
                <Image
                  src={project.images[2]?.url || ""}
                  alt={"Project img"}
                  fill
                  className="object-cover"
                  onLoad={() => setLoadingWidth((prev) => prev + 33)}
                ></Image>
              </div>
              <div className="w-full p-16">
                <p className="text-7xl w-full font-bold pb-8 tracking-wide">
                  Software stack
                </p>
                <ul className="list-disc flex flex-col gap-4 px-8">
                  {project.stack.map((stack, index) => (
                    <li key={index} className="text-2xl">
                      {stack.description}
                    </li>
                  ))}
                </ul>
                <div className="w-full grid grid-cols-2 py-8">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-2xl text-center flex items-center justify-center h-24 border-r-2 border-[#191919] hover:bg-[#191919] hover:text-white duration-500"
                  >
                    Github
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-2xl text-center flex items-center justify-center h-24 border-[#191919] hover:bg-[#191919] hover:text-white duration-500"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <motion.div
                className="absolute bg-white flex items-center w-full justify-center overflow-hidden"
                style={{ height: padding2 }}
              >
                <div>
                  <video
                    src={project.images[3]?.url || ""}
                    width={1280}
                    height={720}
                    className=""
                    controls
                  >
                    <source
                      src={project.images[3]?.url || ""}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div
          className="relative h-[93vh] w-full flex justify-center pb-16 pointer-events-none "
          ref={swapRef}
        ></div>
        <div
          className="relative h-[93vh] w-full flex justify-center pb-16 pointer-events-none "
          ref={lastImageRef}
        ></div>
      </section>
    </>
  );
};

export default Page;
