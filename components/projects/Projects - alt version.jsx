"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Frontend from "./Frontend";
import AppDev from "./AppDev";

const ProjectAlt = () => {
  const projects = [
    {
      name: "Test",
      description:
        "Det her er en lille test til at starte på, her skriver jeg en masse bare for at se hvordan det ser ud, hvis vi har en hel del tekst, bam bamb bam test tstesd. asd asoddsdsd. asdasdasdaoasd. asdasd asd ad. asdasdasdasd, asdasdasda",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 1,
    },
    {
      name: "Test",
      description:
        "Det her er en lille test til at starte på Det her er en lille test til at starte på, her skriver jeg en masse bare for at se hvordan det ser ud, hvis vi har en hel del tekst, bam bamb bam test tstesd. asd asoddsdsd. asdasdasdaoasd. asdasd asd ad. asdasdasdasd, asdasdasda",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 2,
    },
    {
      name: "Test",
      description: "Det her er en lille test til at starte på",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 3,
    },
    {
      name: "Test",
      description: "Det her er en lille test til at starte på",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 4,
    },
  ];

  return (
    <div className="relative z-10 mx-auto flex h-[100%] max-w-7xl flex-col items-center justify-evenly p-5 text-center md:flex-row md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-darkturkish">
        Projects
      </h3>

      <div className="mt-[300px] flex flex-col">
        <div className="flex flex-col place-items-center">
          <div className="mb-20 auto-cols-max grid-cols-2 gap-10 space-y-5 p-5 lg:grid">
            <div className="text-start">
              <h3 className="mb-2 text-4xl font-semibold">4. Semester.</h3>
              <p className="text-lg">
                Her er mine 2 emner, <a className="text-turkish">frontend</a> og{" "}
                <a className="text-turkish">app-udvikling</a>, som jeg har
                arbejdet med under 4. Semester på UCL. Det er her inde du vil
                finde lærings planer, og lærings mål for de to emner.
              </p>
            </div>

            <div className="flex flex-row space-x-2 lg:flex-col lg:space-x-0 lg:space-y-5">
              <button className="navButton ml-0 basis-1/2 cursor-pointer px-4 py-2 text-center font-bold text-turkish hover:bg-left-bottom hover:text-themeblack">
                <span>Frontend</span>
              </button>
              <button className="navButton ml-0 basis-1/2 cursor-pointer px-4 py-2 text-center font-bold text-turkish hover:bg-left-bottom hover:text-themeblack">
                <span>App dev</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project) => {
            return (
              <div
                className="mx-auto flex max-w-[700px] flex-col items-center justify-between gap-6 text-start xl:mx-0 xl:max-w-none xl:flex-row "
                key={project.projectId}
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between">
                    <h4 className="text-3xl font-semibold">{project.name}</h4>
                    <div>
                      <SocialIcon
                        url={project.github}
                        target="_blank"
                        fgColor="#66fcf1"
                        bgColor="transparent"
                      />
                    </div>
                  </div>
                  <p>{project.description}</p>

                  <button className="navButton ml-0 cursor-pointer px-4 py-2 text-center font-bold text-turkish hover:bg-left-bottom hover:text-themeblack">
                    Læs mere...
                  </button>
                </div>
                <img
                  className="h-[400px] w-[700px] flex-shrink-0 rounded-lg object-cover shadow-2xl"
                  src={project.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsAlt;
//grid col-start-1 row-start-1 xl:justify-between space-x-5 xl:flex-row p-5 space-y-8 text-start place-items-center
