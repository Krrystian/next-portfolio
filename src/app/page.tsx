"use client";
import { LuMoveDown } from "react-icons/lu";
import ProjectModel from "./components/ProjectModel";
import animationHook from "./hooks/animationHook";
import Link from "next/link";
import Input from "./components/Input";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Home() {
  const frontend: Map<string, string> = new Map([
    ["React", "https://img.icons8.com/officel/160/000000/react.png"],
    [
      "Redux",
      "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/160/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-shadow-tal-revivo.png",
    ],
    ["Tailwind CSS", "https://img.icons8.com/fluency/160/tailwind_css.png"],
    ["HTML", "https://img.icons8.com/color/160/html-5--v1.png"],
    ["CSS", "https://img.icons8.com/color/160/css3.png"],
    ["Bootstrap", "https://img.icons8.com/fluency/160/bootstrap.png"],
  ]);
  const backend: Map<string, string> = new Map([
    ["Node.js", "https://img.icons8.com/color/160/nodejs.png"],
    ["Express", "https://img.icons8.com/color/160/000000/express-js.png"],
    ["MongoDB", "https://img.icons8.com/color/160/mongodb.png"],
    ["MySQL", "https://img.icons8.com/color/160/mysql.png"],
    ["Next.js", "https://img.icons8.com/color/160/nextjs.png"],
    ["Laravel", "https://img.icons8.com/fluency/160/laravel.png"],
  ]);
  const devops: Map<string, string> = new Map([
    ["Docker", "https://img.icons8.com/color/160/docker.png"],
    ["Git", "https://img.icons8.com/color/160/git.png"],
    ["GitHub", "https://img.icons8.com/fluency/160/github.png"],
    ["Npm", "https://img.icons8.com/color/160/npm.png"],
  ]);
  const languages: Map<string, string> = new Map([
    ["JavaScript", "https://img.icons8.com/color/160/javascript.png"],
    ["TypeScript", "https://img.icons8.com/color/160/typescript.png"],
    ["PHP", "https://img.icons8.com/color/160/php.png"],
    ["Python", "https://img.icons8.com/color/160/python.png"],
    ["Java", "https://img.icons8.com/color/160/java-coffee-cup-logo.png"],
    ["C++", "https://img.icons8.com/color/160/c-plus-plus-logo.png"],
  ]);
  const tools: Map<string, string> = new Map([
    ["VSCode", "https://img.icons8.com/color/160/visual-studio-code-2019.png"],
    ["Postman", "https://img.icons8.com/dusk/160/postman-api.png"],
  ]);
  let submitButton = gsap.timeline({ paused: true, once: true });
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
  };

  return (
    <section
      className="snap-y snap-mandatory overflow-x-hidden overflow-y-scroll h-[100vh] w-screen no-scrollbar px-8 select-none cursor-default"
      id="hero"
    >
      <div
        className="relative h-screen min-w-screen flex justify-center items-center snap-center"
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
      <div className="relative h-screen flex justify-center items-center snap-center py-[5vh]">
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
        className="relative h-screen flex flex-col justify-center items-center snap-center py-[5vh]"
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
            As a computer science student, being a full-stack developer means
            having a comprehensive understanding of both front-end and back-end
            technology, which allows me to design and develop applications that
            meet a variety of user needs. During my studies, I gained a variety
            of skills and knowledge that not only enhanced my technical skills,
            but also shaped my professional identity.
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
                {Array.from(frontend.entries()).map(([key, value]) => (
                  <div key={key} className="group relative flex justify-center">
                    <img width="60" height="60" src={value} alt={key} />
                    <p className="absolute opacity-0 group-hover:opacity-100 top-0 text-sm flex justify-center px-1 -translate-y-[55%] text-white bg-black duration-500">
                      {key}
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
                {Array.from(backend.entries()).map(([key, value]) => (
                  <div key={key} className="group relative flex justify-center">
                    <img width="60" height="60" src={value} alt={key} />
                    <p className="absolute opacity-0 group-hover:opacity-100 top-0 text-sm flex justify-center px-1 -translate-y-[55%] text-white bg-black duration-500">
                      {key}
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
                {Array.from(devops.entries()).map(([key, value]) => (
                  <div key={key} className="group relative flex justify-center">
                    <img width="60" height="60" src={value} alt={key} />
                    <p className="absolute opacity-0 group-hover:opacity-100 top-0 text-sm flex justify-center px-1 -translate-y-[55%] text-white bg-black duration-500">
                      {key}
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
                {Array.from(languages.entries()).map(([key, value]) => (
                  <div key={key} className="group relative flex justify-center">
                    <img width="60" height="60" src={value} alt={key} />
                    <p className="absolute opacity-0 group-hover:opacity-100 top-0 text-sm flex justify-center px-1 -translate-y-[55%] text-white bg-black duration-500">
                      {key}
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
                {Array.from(tools.entries()).map(([key, value]) => (
                  <div key={key} className="group relative flex justify-center">
                    <img width="60" height="60" src={value} alt={key} />
                    <p className="absolute opacity-0 group-hover:opacity-100 top-0 text-sm flex justify-center px-1 -translate-y-[55%] text-white bg-black duration-500">
                      {key}
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
            In addition to expanding programming skills, I find joy in exploring
            other activities. I love anything that flies (except pigeons), have
            parrots in my care, would like to take a glider course, and fly
            drones. I also enjoy all kinds of competetive games. In addition, I
            like to drink yerba, appreciating its flavors, and I have a fondness
            for fountain pens, appreciating the elegance and craftsmanship of
            these writing instruments.
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
            <a href="">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/160/linkedin.png"
                alt="linkedin"
                className="hover:rotate-[360deg] duration-[1500ms] cursor-pointer "
              />
            </a>
            <a href="">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/glyph-neue/160/github.png"
                alt="github"
                className="hover:rotate-[360deg] duration-[1500ms] cursor-pointer"
              />
            </a>
            <a href="">
              <img
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
        className="relative h-screen min-w-screen flex justify-center items-center snap-center"
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
//ICONS BY https://icons8.com/ <-ADD
