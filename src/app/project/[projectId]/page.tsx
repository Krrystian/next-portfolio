"use client";
import Mouse from "@/app/components/Mouse";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

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

  const { scrollYProgress } = useScroll({
    target: imageScrollRef,
    offset: ["start end", "end end"],
  });
  const size = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);
  const translation = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-125%", "0%"])
  );
  return (
    <>
      <Mouse element={imageRef} />
      <section className="relative w-screen top-[7vh] flex flex-col min-h-[100vh] px-16 items-center">
        <div className="grid grid-cols-2 gap-16 items-center w-full h-[93vh] top-[7vh] pb-24 sticky">
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
            className="overflow-hidden rounded-3xl w-full h-full cursor-pointe relative"
            ref={imageRef}
          >
            <Image
              src={project.images[2]?.url || ""}
              alt={"Project img"}
              fill
              className="object-cover"
            ></Image>
          </motion.div>
        </div>
        <div
          className="relative h-[93vh] w-full flex justify-center pb-16"
          ref={imageScrollRef}
        >
          <motion.div
            className="relative rounded-xl border-[#191919] border-2 overflow-hidden"
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
            ></Image>
            <Image
              src={project.images[0]?.url || ""}
              alt={"Project img"}
              fill
              className="object-cover px-[20%]" //moze cos z paddingiem pomyśleć
            ></Image>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Page;
