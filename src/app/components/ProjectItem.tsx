import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectItemProps {
  title: string;
  description: string[];
  image: string;
  github: string;
  demo: string;
  reverse?: boolean;
  loaded?: () => void;
  stack?: { description: string }[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  image,
  github,
  demo,
  reverse,
  loaded,
  stack,
}) => {
  const onLoad = () => {
    if (loaded) {
      loaded();
    }
  };
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 w-full min-h-[93vh] text-white z-10 bg-[#191919] md:sticky top-[7vh]`}
    >
      {reverse ? (
        <>
          <div className="flex flex-col gap-6 p-6">
            <h3 className="text-7xl text-center">{title}</h3>
            {description.map((desc, index) => (
              <p className="text-xl text-justify" key={index}>
                {desc}
              </p>
            ))}
            <div className="flex gap-4 justify-center flex-wrap">
              {stack &&
                stack.map((tech, index) => (
                  <p
                    className="text-xl px-4 py-2 bg-green-500 rounded-xl"
                    key={index}
                  >
                    {tech.description}
                  </p>
                ))}
            </div>
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
          <div className="relative h-48 md:h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
              onLoad={onLoad}
            />
          </div>
        </>
      ) : (
        <>
          <div className="relative h-48 md:h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
              onLoad={onLoad}
            />
          </div>
          <div className="flex flex-col gap-6 p-6 bg-[#191919]">
            <h3 className="text-7xl text-center">{title}</h3>
            {description.map((desc, index) => (
              <p className="text-xl text-justify" key={index}>
                {desc}
              </p>
            ))}
            <div className="flex gap-4 justify-center flex-wrap">
              {stack &&
                stack.map((tech, index) => (
                  <p
                    className="text-xl px-4 py-2 bg-green-500 rounded-xl"
                    key={index}
                  >
                    {tech.description}
                  </p>
                ))}
            </div>
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
