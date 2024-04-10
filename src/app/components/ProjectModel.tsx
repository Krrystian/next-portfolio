import React from "react";
import Link from "next/link";

interface ProjectModelProps {
  id: string;
  name: string;
  type: string;
  image: string;
  small?: boolean;
}
const ProjectModel: React.FC<ProjectModelProps> = ({
  id,
  name,
  image,
  type,
  small,
}) => {
  return (
    <Link
      href={`/project/${id}`}
      key={id}
      className={`flex flex-col border p-4 rounded-md shadow-md  duration-300 cursor-pointer overflow-hidden ${
        small ? "h-[269px] w-[330px] hover:shadow-xl" : "hover:shadow-2xl"
      }`}
    >
      <img
        src={image}
        alt={name}
        className={`rounded-md ${small && "h-[184px] w-[314px]"} object-cover`}
      />
      <div className="grid grid-cols-4 h-full">
        <div className={small ? "col-span-2" : "col-span-3"}>
          <h2
            className={` font-bold ${small ? "text-xl p-1" : "text-3xl p-4"}`}
          >
            {name}
          </h2>
          <p
            className={`text-black/60 h-full ${
              small ? "px-1 text-base" : "px-4"
            }`}
          >
            {type}
          </p>
        </div>
        <div
          className={`flex justify-end items-center  ${small && "col-span-2 "}`}
        >
          <p
            className={`border-2 border-black rounded-md  hover:bg-black hover:text-white duration-300 ${
              small ? "text-sm px-1" : "p-2"
            }`}
          >
            Case Study
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectModel;
