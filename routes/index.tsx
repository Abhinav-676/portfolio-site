import SpinningModel from "../islands/SpinningModel.tsx";
import TypingAnimation from "../islands/TypingAnimation.tsx";
import { Icon } from "@iconify-icon/react";
import Wave from "../components/Wave.tsx";

function Hero() {
  return (
    <section class="p-4 flex justify-evenly items-center flex-wrap">
      <div class="max-w-sm mt-8">
        <h1 class="text-4xl font-bold text-primary">
          <TypingAnimation
            strings={[
              '"Hello, World!"',
              "I'm a developer.",
            ]}
            autoStart={true}
          />
        </h1>
        <p class="text-xl mt-4">
          I build web applications and websites using modern technologies.
        </p>
      </div>
      <SpinningModel />
    </section>
  );
}

interface Value {
  title: string;
  description: string;
  image: string;
}

function Values() {
  const values: Value[] = [
    {
      title: "Passion for Continuous Learning",
      description:
        "I actively seek out new technologies and stay up-to-date with industry trends.",
      image: "/img/pexels-pixabay-159711.webp",
    },
    {
      title: "User-Centric Approach",
      description:
        "My goal is to create user-friendly applications that solve real-world problems.",
      image: "/img/pexels-picjumbo-com-55570-196644.webp",
    },
    {
      title: "Collaboration and Communication",
      description:
        "I excel in team environments and communicate effectively with stakeholders.",
      image: "/img/pexels-fauxels-3184418.webp",
    },
  ];

  return (
    <>
      <Wave flip={false} />
      <section class="p-4 flex justify-center items-center gap-4 flex-wrap bg-primary">
        {values.map((value, i) => (
          <div
            class={"card md:max-w-64 bg-base-100 flex-row md:flex-col shadow-lg" +
              (i % 2 ? " md:-translate-y-8" : "")}
          >
            <figure class="w-1/3 md:w-auto rounded-none rounded-l-box md:rounded-none md:rounded-t-box">
              <img
                class="h-full w-full object-cover"
                src={value.image}
                alt={value.title}
              />
            </figure>
            <div class="card-body w-2/3 md:w-auto">
              <h2 class="card-title">{value.title}</h2>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </section>
      <Wave flip={true} />
    </>
  );
}

interface Experience {
  title: string;
  company: string;
  timePeriod: string;
  location: string;
}

function Experience() {
  const experiences: Experience[] = [
    {
      title: "Full Stack Web Developer",
      company: "AST Advanced Sales Technologies GmbH",
      timePeriod: "Sep 2023 - Apr 2024",
      location: "Vienna, Austria",
    },
    {
      title: "Junior Web Developer",
      company: "AST Advanced Sales Technologies GmbH",
      timePeriod: "Feb 2023 - Sep 2023",
      location: "Vienna, Austria",
    },
  ];

  return (
    <section class="p-4 flex flex-wrap-reverse justify-evenly items-center gap-4">
      <div class="flex flex-col">
        {experiences.map((experience, i) => (
          <>
            {i > 0 &&
              (
                <div class="flex flex-col gap-2 ml-8 my-2">
                  {[...Array(3)].map(() => (
                    <span className="w-1 aspect-square bg-gray-500 rounded-full" />
                  ))}
                </div>
              )}

            <div class="card">
              <div class="card-body p-4">
                <h2 class="card-title">{experience.title}</h2>
                <span class="flex items-center gap-2 text-gray">
                  <Icon icon="majesticons:suitcase" width="24" height="24" />
                  {experience.company}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon icon="tabler:calendar-filled" width="24" height="24" />
                  {experience.timePeriod}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon icon="carbon:location-filled" width="24" height="24" />
                  {experience.location}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
      <h1 class="text-3xl font-bold text-primary">Work Experience</h1>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  link: string;
  type: string;
  icon: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "Denoland Fresh",
      description:
        "Fresh is a full stack modern web framework for JavaScript and TypeScript developers.",
      link: "https://fresh.deno.dev/",
      type: "Open Source",
      icon: "logos:deno",
    },
    {
      title: "Dogr.",
      description:
        "Dogr is a web application I developed to hone my skills in Nuxt and Vue.",
      link: "https://dogr.vercel.app/",
      type: "Personal",
      icon: "logos:vue",
    },
  ];

  return (
    <section class="p-4 my-8">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Projects and Contributions
      </h1>
      <div class="flex flex-wrap justify-center items-center">
        {projects.map((project) => (
          <div class="card max-w-96">
            <div class="card-body py-4">
              <h2 class="card-title">
                <Icon icon={project.icon} width="24" height="24" />
                {project.title}
                <span class="badge badge-ghost ml-auto">{project.type}</span>
              </h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" class="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <section class="my-16">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Technologies
      </h1>
      <div class="p-4 flex justify-center items-center flex-wrap gap-4">
        <Icon
          icon="vscode-icons:file-type-js-official"
          width="32"
          height="32"
        />
        <Icon icon="logos:html-5" width="32" height="32" />
        <Icon icon="logos:css-3" width="32" height="32" />
        <Icon icon="logos:php" width="32" height="32" />
        <Icon icon="logos:typescript-icon" width="32" height="32" />
        <Icon icon="skill-icons:react-dark" width="32" height="32" />
        <Icon icon="logos:vue" width="32" height="32" />
        <Icon icon="devicon:nextjs" width="32" height="32" />
        <Icon icon="skill-icons:nuxtjs-dark" width="32" height="32" />
        <Icon icon="logos:nestjs" width="32" height="32" />
        <Icon icon="logos:fresh" width="32" height="32" />
        <Icon icon="skill-icons:laravel-dark" width="32" height="32" />
        <Icon icon="skill-icons:tailwindcss-dark" width="32" height="32" />
        <Icon icon="logos:deno" width="32" height="32" />
        <Icon icon="logos:nodejs" width="32" height="32" />
        <Icon icon="logos:mongodb" width="32" height="32" />
        <Icon icon="logos:postgresql" width="32" height="32" />
        <Icon icon="devicon:mariadb-wordmark" width="32" height="32" />
        <Icon icon="logos:cassandra" width="32" height="32" />
        <Icon icon="logos:docker" width="32" height="32" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Projects />
      <Experience />
      <Technologies />
    </>
  );
}