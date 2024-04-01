import React from "react";

const Projects = () => {
  const handleClick = () => {};
  return (
    <div className="w-[80%]">
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
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Projects;
