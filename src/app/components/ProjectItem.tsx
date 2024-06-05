import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  reverse?: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  image,
  github,
  demo,
  reverse,
}) => {
  return (
    <div
      className={`grid grid-cols-2 w-screen h-screen text-white z-10 sticky top-[5vh]`}
    >
      {reverse ? (
        <>
          <div className="flex flex-col gap-6 p-6 bg-[#191919]">
            <h3 className="text-7xl text-center">{title}</h3>
            <p>{description}</p>
            <div className="flex gap-4 justify-center">
              <Link
                href={github}
                target="_blank"
                rel="noreferrer"
                className="bg-black px-8 py-2 hover:bg-green-500/35 transition-all duration-300"
              >
                Github
              </Link>
              <Link
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="bg-black px-8 py-2 hover:bg-green-500/35 transition-all duration-300"
              >
                Demo
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        </>
      ) : (
        <>
          <div className="relative">
            <Image
              src={
                "https://utfs.io/f/0eafe0e3-8a64-49f6-8435-613907a9b54d-d6pvic.svg"
              }
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 p-6 bg-[#191919]">
            <h3 className="text-7xl text-center">{title}</h3>
            <p>{description}</p>
            <div className="flex gap-4 justify-center">
              <Link
                href={github}
                target="_blank"
                rel="noreferrer"
                className="bg-black px-8 py-2 hover:bg-green-500/35 transition-all duration-300"
              >
                Github
              </Link>
              <Link
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="bg-black px-8 py-2 hover:bg-green-500/35 transition-all duration-300"
              >
                Demo
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectItem;
