import React from "react";

const AboutMe = () => {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    section: string
  ) => {
    e.preventDefault();
    const desc = (e.currentTarget.elements[0] as HTMLInputElement).value;
    fetch("/api/aboutme/createAbout", {
      method: "POST",
      body: JSON.stringify({ title: section, description: desc }),
    });
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <form
        className="w-full grid grid-cols-4 text-center"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          handleSubmit(e, "experience")
        }
      >
        <h2 className="text-xl self-center">EXPERIENCE</h2>
        <textarea
          className="col-span-2 resize-none border-b-2 border-black focus:outline-none focus:bg-gray-100 p-4 placeholder:text-xl"
          rows={5}
          placeholder="Type your new experience here"
          id="experience"
        />
        <div className="flex justify-center items-center">
          <button
            className="border-2 border-black p-4 rounded-md hover:bg-black duration-300 hover:text-white"
            type="submit"
          >
            Change
          </button>
        </div>
      </form>
      <form
        className="w-full grid grid-cols-4 text-center"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          handleSubmit(e, "hobbies")
        }
      >
        <h2 className="text-xl self-center">HOBBIES</h2>
        <textarea
          className="col-span-2 resize-none border-b-2 border-black focus:outline-none focus:bg-gray-100 p-4 placeholder:text-xl"
          rows={5}
          placeholder="Type your hobbies here"
          id="hobbies"
        />
        <div className="flex justify-center items-center">
          <button
            className="border-2 border-black p-4 rounded-md hover:bg-black duration-300 hover:text-white"
            type="submit"
          >
            Change
          </button>
        </div>
      </form>
      <form
        className="w-full grid grid-cols-4 gap-y-8 text-center"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          handleSubmit(e, "github")
        }
      >
        <h2 className="text-xl self-center">GITHUB</h2>
        <input
          type="text"
          className="border-b-2 col-span-2 border-black focus:outline-none focus:bg-gray-100 p-4 placeholder:text-xl"
          placeholder="Type your new link here"
          id="github"
        />
        <div>
          <button
            className="border-2 border-black p-4 rounded-md hover:bg-black duration-300 hover:text-white"
            type="submit"
          >
            Change
          </button>
        </div>
      </form>
      <form
        className="w-full grid grid-cols-4 gap-y-8 text-center"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          handleSubmit(e, "linkedin")
        }
      >
        <h2 className="text-xl self-center">LINKEDIN</h2>
        <input
          type="text"
          className="border-b-2 col-span-2 border-black focus:outline-none focus:bg-gray-100 p-4 placeholder:text-xl"
          placeholder="Type your new link here"
          id="linkedin"
        />
        <div>
          <button
            className="border-2 border-black p-4 rounded-md hover:bg-black duration-300 hover:text-white"
            type="submit"
          >
            Change
          </button>
        </div>
      </form>
      <form
        className="w-full grid grid-cols-4 gap-y-8 text-center"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          handleSubmit(e, "email")
        }
      >
        <h2 className="text-xl self-center">EMAIL</h2>
        <input
          type="text"
          className="border-b-2 col-span-2 border-black focus:outline-none focus:bg-gray-100 p-4 placeholder:text-xl"
          placeholder="Type your new link here"
          id="email"
        />
        <div>
          <button
            className="border-2 border-black p-4 rounded-md hover:bg-black duration-300 hover:text-white"
            type="submit"
          >
            Change
          </button>
        </div>
      </form>
    </div>
  );
};

export default AboutMe;
