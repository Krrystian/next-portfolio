"use client";
import React from "react";
import { useRef, useEffect } from "react";
import ProjectModel from "../components/ProjectModel";
type Project = {
  id: string;
  title: string;
  shortDescription: string;
  images: string[];
};
const Page = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);
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
    <section className="text-3xl px-32 flex flex-col items-center pt-[5vh] scroll-smooth">
      <h1 className="text-center text-4xl py-8">Projects</h1>
      <div className="grid grid-cols-3 gap-4 items-center justify-center">
        {projects.map((project) => (
          <ProjectModel
            key={project.id}
            id={project.id}
            name={project.title}
            type={project.shortDescription}
            image={project.images[0]}
            small
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
