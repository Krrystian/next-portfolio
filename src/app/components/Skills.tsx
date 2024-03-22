import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleAddSkillModal } from "../store/dboardSlice";
type Skill = {
  id: number;
  icon: string;
  description: string;
  Category: {
    name: string;
  };
};

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch("/api/skills")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setSkills(data);
    //   });
  }, []);
  const handleClick = () => {
    dispatch(toggleAddSkillModal());
  };
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
          <tr className="border-2">
            <th className="border-r-2 w-[20%]">Icon</th>
            <th className="border-r-2 w-[40%]">Description</th>
            <th className="border-r-2 w-[20%]">Category</th>
            <th className="w-[20%]">Operations</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over skills and render each skill as a table row */}
          {skills.map((skill) => (
            <tr key={skill.id}>
              <td>{skill.icon}</td>
              <td>{skill.description}</td>
              <td>{skill.Category?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
