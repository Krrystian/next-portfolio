"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";
import { LuMoveDown } from "react-icons/lu";
import ProjectModel from "./components/ProjectModel";

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
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //Animate landing page
    const l1 = new SplitType("#l1", { types: "chars" });
    const l2 = new SplitType("#l2", { types: "chars" });
    const l3 = new SplitType("#l3", { types: "chars" });

    const chars_l1 = l1.chars;
    const chars_l2 = l2.chars;
    const chars_l3 = l3.chars;

    gsap.fromTo(
      [chars_l1, chars_l2, chars_l3],
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      "#swipe_down",
      {
        opacity: 0,
      },
      {
        delay: 4,
        opacity: 1,
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 1,
      }
    );
    gsap.fromTo(
      "#project_more",
      {
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
        delay: 1.5,
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#project_more",
        },
      }
    );

    //About me
    gsap.fromTo(
      "#about_me_title",
      {
        top: window.innerHeight / 2,
      },
      {
        duration: 1,
        top: "5vh",
        delay: 0.5,
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#about_me_title",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.fromTo(
      "#about_me_experience",
      {
        opacity: 0,
        top: window.innerHeight / 2,
      },
      {
        duration: 0.5,
        opacity: 1,
        delay: 1.5,
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#about_me_experience",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.to("#about_me_experience", {
      duration: 1,
      top: "15vh",
      right: "4vw",
      delay: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        scroller: "#hero",
        trigger: "#about_me_experience",
        start: "top 60%",
        end: "top 20%",
      },
    });
    gsap.fromTo(
      "#about_me_links",
      {
        opacity: 0,
        top: window.innerHeight / 2,
      },
      {
        duration: 0.5,
        opacity: 1,
        delay: 2.5,
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#about_me_links",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.to("#about_me_links", {
      duration: 1,
      top: "75vh",
      right: "4vw",
      delay: 3,
      ease: "power1.inOut",
      scrollTrigger: {
        scroller: "#hero",
        trigger: "#about_me_links",
        start: "top 60%",
        end: "top 20%",
      },
    });
    gsap.fromTo(
      "#about_me_hobbies",
      {
        opacity: 0,
        top: window.innerHeight / 2,
      },
      {
        duration: 0.5,
        opacity: 1,
        delay: 3.5,
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#about_me_hobbies",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.to("#about_me_hobbies", {
      duration: 1,
      right: "4vw",
      top: "45vh",
      delay: 4,
      ease: "power1.inOut",
      scrollTrigger: {
        scroller: "#hero",
        trigger: "#about_me_hobbies",
        start: "top 60%",
        end: "top 20%",
      },
    });
    gsap.fromTo(
      "#about_me_technologies",
      {
        opacity: 0,
        top: window.innerHeight / 2,
      },
      {
        duration: 0.5,
        opacity: 1,
        delay: 4.5,
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#about_me_links",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.fromTo(
      "#about_me_technologies",
      {
        top: window.innerHeight / 2,
      },
      {
        duration: 1,
        top: "15vh",
        left: "4vw",
        delay: 5,
        ease: "power1.inOut",
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#about_me_links",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.fromTo(
      [
        "#about_me_experience_body",
        "#about_me_technologies_body",
        "#about_me_hobbies_body",
        "#about_me_links_body",
      ],
      {
        opacity: 0,
        display: "none",
      },
      {
        duration: 0.5,
        opacity: 1,
        display: "",
        delay: 6,
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#about_me_experience_body",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );

    //Contact animation
    gsap.fromTo(
      "#left_wall",
      {
        width: "0vw",
        left: "0vw",
      },
      {
        duration: 1,
        delay: 1,
        width: "50vw",
        ease: "none",
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#left_wall",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.fromTo(
      "#left_wall",
      {
        left: "0vw",
      },
      {
        duration: 1,
        delay: 2,
        left: "50vw",
        ease: "none",
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#left_wall",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.fromTo(
      "#left_wall",
      { left: "50vw" },
      {
        duration: 1,
        delay: 3,
        left: "100vw",
        ease: "none",
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#left_wall",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );

    //Concat text
    gsap.fromTo(
      "#contact_title_left",
      {
        opacity: 1,
      },
      {
        duration: 0.1,
        delay: 2,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#contact_title_left",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.fromTo(
      "#contact_title_left_top",
      {
        opacity: 0,
      },
      {
        duration: 0.1,
        delay: 2,
        opacity: 1,
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#contact_title_left",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.fromTo(
      "#contact_title_middle",
      {
        display: "",
      },
      {
        duration: 0.1,
        delay: 2.5,
        opacity: 0,
        display: "hidden",
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#contact_title_middle",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
    gsap.fromTo(
      "#contact_title_right_top",
      {
        opacity: 0,
      },
      {
        duration: 0.1,
        delay: 2.5,
        opacity: 1,
        scrollTrigger: {
          scroller: "#hero",
          trigger: "#contact_title_middle",
          start: "top 60%",
          end: "top 20%",
        },
      }
    );
  }, []);

  return (
    <section
      className="snap-y snap-mandatory overflow-x-hidden overflow-y-scroll h-[100vh] w-screen no-scrollbar px-8 select-none cursor-default"
      id="hero"
    >
      <div className="relative h-screen min-w-screen flex justify-center items-center snap-center">
        <div className="flex flex-col gap-4">
          <p className="text-7xl font-extrabold split" id="l1">
            Hello! My name is
          </p>
          <p className="text-9xl text-green-500 font-extrabold" id="l2">
            Krystian Cichorz.
          </p>
          <p className="text-7xl font-extrabold" id="l3">
            I'm a fullstack developer.
          </p>
        </div>
        <div
          className="absolute bottom-8 flex items-center flex-col"
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
          <span className="text-green-500 cursor-pointer">more</span>...
        </div>
      </div>

      <div className="relative h-screen flex flex-col justify-center items-center snap-center py-[5vh]">
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
      <div className="relative h-screen min-w-screen flex justify-center items-center snap-center">
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
          className="absolute h-full bg-black left-0 w-0 -translate-x-8"
          id="left_wall"
        />

        <footer className="absolute bottom-0 w-full bg-black text-white px-2 py-1 flex justify-between">
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
