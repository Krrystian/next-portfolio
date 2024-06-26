import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleAddSkillModal } from "../../store/dboardSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import Image from "next/image";

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
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("/api/skill/getSkills").then(async (res) => {
      const data = await res.json();
      setSkills(data);
      setLoading(false);
    });
  }, []);
  const handleClick = () => {
    dispatch(toggleAddSkillModal());
  };
  const handleDelete = (id: number) => {
    fetch("/api/skill/deleteSkill", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    }).then(async (res) => {
      if (res.status === 201) {
        setSkills((prev) => prev.filter((skill) => skill.id !== id));
      }
    });
  };
  if (loading) return <div className="text-3xl">Loading...</div>;
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
            <th className="border-r-2 w-[20%]">Icon</th>
            <th className="border-r-2 w-[40%]">Description</th>
            <th className="border-r-2 w-[20%]">Category</th>
            <th className="w-[20%]">Operations</th>
          </tr>
        </thead>
        <tbody>
          {skills.length > 0 &&
            skills.map((skill) => (
              <tr
                key={skill.id}
                className="*:text-center *:px-2 *:border-black/20 border-2 border-black/20 odd:bg-gray-200"
              >
                <td className="border-r-2 flex justify-center items-center">
                  <Image
                    width={30}
                    height={30}
                    src={skill.icon}
                    alt={skill.description}
                  />
                </td>
                <td className="border-r-2">{skill.description}</td>
                <td className="border-r-2">{skill.Category?.name}</td>
                <td className="w-full">
                  <FaRegTrashAlt
                    size={20}
                    className="cursor-pointer text-center w-full"
                    onClick={() => handleDelete(skill.id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
