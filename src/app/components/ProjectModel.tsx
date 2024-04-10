import React from "react";
import Link from "next/link";

interface ProjectModelProps {
  id: number;
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
      href={`/projects/${id}`}
      key={id}
      className={`flex flex-col border p-4 rounded-md shadow-md  duration-300 cursor-pointer overflow-hidden ${
        small ? "h-[269px] w-[330px] hover:shadow-xl" : "hover:shadow-2xl"
      }`}
    >
      <img
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=3160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={name}
        className={`rounded-md ${small && "h-[184px] w-[314px]"} object-cover`}
      />
      <div className="grid grid-cols-4 h-full">
        <div className=" col-span-3">
          <h2
            className={` font-bold ${small ? "text-xl p-1" : "text-3xl p-4"}`}
          >
            {name}
          </h2>
          <p
            className={`text-black/60 h-full ${
              small ? "px-1 text-lg" : "px-4"
            }`}
          >
            {type}
          </p>
        </div>
        <div className="flex justify-center items-center">
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
