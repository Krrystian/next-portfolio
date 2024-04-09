"use client";
import { LuMoveDown } from "react-icons/lu";
import ProjectModel from "./components/ProjectModel";
import animationHook from "./hooks/animationHook";
import Link from "next/link";
import Input from "./components/Input";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
type Skill = {
  id: number;
  icon: string;
  description: string;
  Category: {
    name: string;
  };
};
type AboutMe = {
  section: string;
  description: string;
};

export default function Home() {
  let submitButton = gsap.timeline({ paused: true, once: true });
  const [skills, setSkills] = useState<Skill[]>([]);
  const [aboutMe, setAboutMe] = useState<AboutMe[]>([]);

  const skillList = () => {
    fetch("/api/skill/getSkills").then(async (res) => {
      const data = await res.json();
      setSkills(data);
    });
  };
  const aboutMeList = () => {
    fetch("/api/aboutme/getAbout").then(async (res) => {
      const data = await res.json();
      console.log(data);
      setAboutMe(data);
    });
  };

  useEffect(() => {
    submitButton
      .to("#contact_button", {
        width: "50%",
        cursor: "default",
        duration: 0.5,
        ease: "linear",
      })
      .to("#contact_button", {
        height: "110%",
        duration: 1,
        color: "rgba(34,197,94,0)",
        transform: "translateY(16px)",
        ease: "linear",
      })
      .to("#contact_body", {
        opacity: 0,
        duration: 0.1,
        ease: "linear",
      })
      .to("#contact_hidden", {
        duration: 0.5,
        height: "auto",
        ease: "linear",
      });
    skillList();
    aboutMeList();
  }, []);

  const animations = animationHook();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("Email"),
      name: formData.get("Name"),
      message: formData.get("Message"),
    };
    submitButton.play(0);
    try {
      await fetch("/api/contact/newMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => setLoading(false));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      className="snap-y snap-mandatory overflow-x-hidden overflow-y-scroll h-[100vh] w-screen no-scrollbar px-8 select-none cursor-default"
      id="hero"
    >
      <div
        className="relative h-screen min-w-screen flex justify-center items-center snap-center snap-always"
        id="landing_page"
      >
        <div className="flex flex-col gap-4">
          <p className="text-7xl font-extrabold opacity-0" id="l1">
            Hello! My name is
          </p>
          <p
            className="text-9xl text-green-500 font-extrabold opacity-0"
            id="l2"
          >
            Krystian Cichorz.
          </p>
          <p className="text-7xl font-extrabold opacity-0" id="l3">
            I'm a fullstack developer.
          </p>
        </div>
        <div
          className="absolute bottom-8 flex items-center flex-col opacity-0"
          id="swipe_down"
        >
          <p className="text-base text-green-900">Scroll down to continue</p>
          <LuMoveDown className="text-6xl text-green-500" />
        </div>
      </div>
      <div className="relative h-screen flex justify-center items-center snap-center snap-always py-[5vh]">
        <h2 className="absolute top-[5vh] tracking-widest col-span-3 text-4xl flex items-center justify-center w-full font-extrabold">
          PROJECTS
        </h2>
        <div className="grid grid-cols-3">
          <ProjectModel id={1} description="hello" name="test" image="a" />
          <ProjectModel id={1} description="hello" name="test" image="a" />
          <ProjectModel id={1} description="hello" name="test" image="a" />
        </div>
        <div className="absolute bottom-8 text-xl italic" id="project_more">
          and many, many &nbsp;
          <Link
            href="/projects"
            prefetch
            className="text-green-500 cursor-pointer"
          >
            more
          </Link>
          ...
        </div>
      </div>

      <div
        className="relative h-screen flex flex-col justify-center items-center snap-center snap-always py-[5vh]"
        id="about_me"
      >
        <h2
          className="absolute tracking-widest font-extrabold text-4xl flex items-center justify-center w-full"
          id="about_me_title"
        >
          ABOUT ME
        </h2>
        <div
          className="absolute w-[40%] text-center tracking-widest font-bold"
          id="about_me_experience"
        >
          <h1 className="text-2xl mb-2">
            <span className="text-green-500">EXP</span>ERIENCE
          </h1>
          <div id="about_me_experience_body">
            {aboutMe
              .filter((about) => about.section === "experience")
              .map((about) => (
                <p key={about.section}>{about.description}</p>
              ))}
          </div>
        </div>
        <div
          className="absolute w-[40%] text-center tracking-widest font-bold"
          id="about_me_technologies"
        >
          <h2 className="text-2xl mb-2">
            <span className="text-green-500">TECH</span>NOLOGIES
          </h2>
          <div
            className="grid grid-cols-6 justify-center items-center h-full gap-8"
            id="about_me_technologies_body"
          >
            <div className="w-full col-span-2 h-full border-4 border-green-500">
              <h4 className="tracking-widest font-extrabold text-xl text-white bg-green-500">
                FRONTEND
              </h4>
              <div className="p-4 grid grid-cols-2 gap-4 justify-center">
                {skills
                  .filter((skill) => skill.Category.name === "FRONTEND")
                  .map((skill) => (
                    <div
                      key={skill.id}
                      className="group relative flex justify-center"
                    >
                      <Image
                        width="60"
                        height="60"
                        src={skill.icon}
                        alt={skill.description}
                      />
                      <p className="absolute opacity-0 group-hover:opacity-100 top-0 text-sm flex justify-center px-1 -translate-y-[55%] text-white bg-black duration-500">
                        {skill.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-full col-span-2 h-full border-4 border-green-500">
              <h4 className="tracking-widest font-extrabold text-xl text-white bg-green-500">
                BACKEND
              </h4>
              <div className="p-4 grid grid-cols-2 gap-4 justify-center">
                {skills
                  .filter((skill) => skill.Category.name === "BACKEND")
                  .map((skill) => (
                    <div
                      key={skill.id}
                      className="group relative flex justify-center"
                    >
                      <Image
                        width="60"
                        height="60"
                        src={skill.icon}
                        alt={skill.description}
                      />
                      <p className="absolute opacity-0 group-hover:opacity-100 top-0 text-sm flex justify-center px-1 -translate-y-[55%] text-white bg-black duration-500">
                        {skill.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-full col-span-2 h-full border-4 border-green-500">
              <h4 className="tracking-widest font-extrabold text-xl text-white bg-green-500">
                DEVOPS
              </h4>
              <div className="p-4 grid grid-cols-2 gap-4 justify-center">
                {skills
                  .filter((skill) => skill.Category.name === "DEVOPS")
                  .map((skill) => (
                    <div
                      key={skill.id}
                      className="group relative flex justify-center"
                    >
                      <Image
                        width="60"
                        height="60"
                        src={skill.icon}
                        alt={skill.description}
                      />
                      <p className="absolute opacity-0 group-hover:opacity-100 top-0 text-sm flex justify-center px-1 -translate-y-[55%] text-white bg-black duration-500">
                        {skill.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-full col-span-3 h-full border-4 border-green-500">
              <h4 className="tracking-widest font-extrabold text-xl text-white bg-green-500">
                LANGUAGES
              </h4>
              <div className="p-4 grid grid-cols-2 gap-4 justify-center">
                {skills
                  .filter((skill) => skill.Category.name === "LANGUAGES")
                  .map((skill) => (
                    <div
                      key={skill.id}
                      className="group relative flex justify-center"
                    >
                      <Image
                        width="60"
                        height="60"
                        src={skill.icon}
                        alt={skill.description}
                      />
                      <p className="absolute opacity-0 group-hover:opacity-100 top-0 text-sm flex justify-center px-1 -translate-y-[55%] text-white bg-black duration-500">
                        {skill.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-full col-span-3 h-full border-4 border-green-500">
              <h4 className="tracking-widest font-extrabold text-xl text-white bg-green-500">
                TOOLS
              </h4>
              <div className="p-4 grid grid-cols-2 gap-4 justify-center">
                {skills
                  .filter((skill) => skill.Category.name === "TOOLS")
                  .map((skill) => (
                    <div
                      key={skill.id}
                      className="group relative flex justify-center"
                    >
                      <Image
                        width="60"
                        height="60"
                        src={skill.icon}
                        alt={skill.description}
                      />
                      <p className="absolute opacity-0 group-hover:opacity-100 top-0 text-sm flex justify-center px-1 -translate-y-[55%] text-white bg-black duration-500">
                        {skill.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute w-[40%] text-center tracking-widest font-bold"
          id="about_me_hobbies"
        >
          <h2 className="text-2xl mb-2">
            <span className="text-green-500">HO</span>BBIES &{" "}
            <span className="text-green-500">INT</span>ERESTS
          </h2>
          <div id="about_me_hobbies_body">
            {aboutMe
              .filter((about) => about.section === "hobbies")
              .map((about) => (
                <p key={about.section}>{about.description}</p>
              ))}
          </div>
        </div>

        <div
          className="absolute w-[40%] text-center tracking-widest font-bold"
          id="about_me_links"
        >
          <h2 className="text-2xl mb-2">
            L<span className="text-green-500">INK</span>S
          </h2>
          <div id="about_me_links_body" className="flex gap-8 justify-center">
            <a
              href={
                aboutMe
                  .filter((about) => about.section === "linkedin")
                  .map((about) => about.description)
                  .flat()[0]
              }
            >
              <Image
                width="48"
                height="48"
                src="https://img.icons8.com/color/160/linkedin.png"
                alt="linkedin"
                className="hover:rotate-[360deg] duration-[1500ms] cursor-pointer "
              />
            </a>
            <a
              href={
                aboutMe
                  .filter((about) => about.section === "github")
                  .map((about) => about.description)
                  .flat()[0]
              }
            >
              <Image
                width="48"
                height="48"
                src="https://img.icons8.com/glyph-neue/160/github.png"
                alt="github"
                className="hover:rotate-[360deg] duration-[1500ms] cursor-pointer"
              />
            </a>
            <a
              href={
                `mailto:` +
                aboutMe
                  .filter((about) => about.section === "email")
                  .map((about) => about.description)
                  .flat()[0]
              }
            >
              <Image
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/160/gmail-new.png"
                alt="gmail"
                className="hover:rotate-[360deg] duration-[1500ms] cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        className="relative h-screen min-w-screen flex justify-center items-center snap-center snap-always"
        id="contact"
      >
        <h2
          className="absolute tracking-widest col-span-3 text-4xl flex items-center justify-center w-full font-extrabold"
          id="contact_title_middle"
        >
          <span id="contact_title_left">CON</span>
          TACT
        </h2>
        <h2 className="absolute tracking-widest col-span-3 text-4xl flex items-center justify-center w-full font-extrabold top-[5vh]">
          <span id="contact_title_left_top" className="opacity-0">
            CON
          </span>
          <span id="contact_title_right_top" className="opacity-0">
            TACT
          </span>
        </h2>
        <figure
          className="absolute h-full bg-black left-0 w-0 -translate-x-8 z-10"
          id="left_wall"
        />

        <div className="grid grid-cols-2 w-full h-full justify-center items-center select-auto">
          <form
            className="w-full flex justify-center relative"
            id="contact_form"
            method="post"
            onSubmit={onSubmit}
          >
            <div className="flex flex-col gap-8 w-1/2">
              <div id="contact_body" className="flex flex-col gap-8">
                <Input placeholder="Email" type="email" />
                <Input placeholder="Name" />
                <Input placeholder="Message" type="textarea" />
              </div>
              <button
                type="submit"
                id="contact_button"
                className="bg-green-500 text-white py-2 w-1/3 self-center absolute bottom-0 translate-y-16"
              >
                Send
              </button>
            </div>
          </form>
          <div className="text-xl" id="contact_words">
            <p>
              I hope you enjoyed your stay here. It was a pleasure to host you
              in my humble corner. Hope to talk to you again someday, but for
              now, take care and experience your beautiful day.
            </p>
            <br />
            <p id="contact_hidden" className=" h-0 overflow-hidden">
              Thank you for contacting me. I will try to respond to your message
              in the next few days.
            </p>
            <p className="italic font-bold text-black/60">Krystian Cichorz</p>
          </div>
        </div>
        <footer className="absolute bottom-0 w-full bg-black text-white px-2 py-1 z-20 flex justify-between">
          <p>
            Designed by{" "}
            <a href="" className="underline">
              Krystian Cichorz.
            </a>
          </p>
          <p>
            Icons by{" "}
            <a href="https://icons8.com/" className="underline">
              Icons8.
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}
