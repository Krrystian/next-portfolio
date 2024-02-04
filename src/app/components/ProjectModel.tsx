import React from "react";

interface ProjectModelProps {
  id: number;
  name: string;
  description: string;
  image: string;
}
const ProjectModel: React.FC<ProjectModelProps> = ({
  id,
  name,
  description,
  image,
}) => {
  return (
    <div className="h-full flex flex-col justify-center items-center cursor-pointer">
      <div className="group relative flex justify-center items-center">
        <div className="overflow-hidden">
          <img
            src={
              "https://mateuszjablonski.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fsu7lwncim2tu%2F5jBExBZ0229SivTV2gW7RH%2Fc59eee388b2938f9d2549fe2763ad84d%2FKopia_Feature_image_-_articles.png&w=3840&q=75"
            }
            alt={name}
            className="h-[700px] object-cover transition-all duration-700 group-hover:scale-125"
          />
        </div>
        <div className="absolute text-xl flex flex-col gap-4 text-white w-[70%] h-[70%]">
          <h3 className="uppercase bg-black text-center text-2xl">"{name}"</h3>
          <p className="bg-black text-xl px-4 py-2 h-full opacity-80">
            {description}
          </p>
        </div>
        {/* <div className="absolute text-xl w-full h-0 bottom-0 left-0 opacity-0 group-hover:opacity-60 group-hover:h-full duration-300 transition-all bg-green-800">
          <p className="text-white p-4">{description}</p>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectModel;
