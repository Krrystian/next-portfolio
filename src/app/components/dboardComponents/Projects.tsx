import { toggleProjectModal } from "@/app/store/dboardSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

type Project = {
  id: number;
  title: string;
  shortDescription: string;
};
const Projects = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleProjectModal());
  };
  useEffect(() => {
    fetch("/api/project/getProjects").then(async (res) => {
      const data = await res.json();
      console.log(data);
      setProjects(data);
    });
  }, []);
  return (
    <div className="w-[80%] h-[60%] overflow-y-auto">
      <button
        className="p-1 border-black rounded-xl border-2 hover:bg-black hover:text-white transition-colors duration-300 float-end mb-2"
        onClick={handleClick}
      >
        Add new
      </button>
      <table className="border w-full">
        <thead>
          <tr className="border-2 *:border-black border-black cursor-default">
            <th className="border-r-2 w-[33%]">Name</th>
            <th className="border-r-2 w-[43%]">Description</th>
            <th className="w-[23%]">Operations</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 &&
            projects.map((project) => (
              <tr
                key={project.id}
                className="*:text-center *:px-2 *:border-black/20 border-2 border-black/20 odd:bg-gray-200"
              >
                <td className="border-r-2">{project.title}</td>
                <td className="border-r-2">
                  {project.shortDescription.length > 50
                    ? `${project.shortDescription.slice(0, 50)}...`
                    : project.shortDescription}
                </td>
                <td className="flex gap-4 justify-center">
                  <button className="">Show</button>
                  <button className="">Edit</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
