"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Frontend from "./Frontend";
import AppDev from "./AppDev";
import Link from "next/link";
import getProjects from "@/sanity/utils/getProjects";
import Image from "next/image";

const ProjectsComponent = async () => {
  const projects = await getProjects();

  const hardCodedProjects = [
    {
      name: "Test",
      description:
        "Det her er en lille test til at starte på, her skriver jeg en masse bare for at se hvordan det ser ud, hvis vi har en hel del tekst, bam bamb bam test tstesd. asd asoddsdsd. asdasdasdaoasd. asdasd asd ad. asdasdasdasd, asdasdasda",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 1,
      path: "/",
    },
    {
      name: "Test",
      description:
        "Det her er en lille test til at starte på Det her er en lille test til at starte på, her skriver jeg en masse bare for at se hvordan det ser ud, hvis vi har en hel del tekst, bam bamb bam test tstesd. asd asoddsdsd. asdasdasdaoasd. asdasd asd ad. asdasdasdasd, asdasdasda",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 2,
      path: "/",
    },
    {
      name: "Test",
      description: "Det her er en lille test til at starte på",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 3,
      path: "/",
    },
    {
      name: "Test",
      description: "Det her er en lille test til at starte på",
      image: "/images/profile.jpg",
      github: "https://github.com/hqasmei/platoio",
      projectId: 4,
      path: "/",
    },
  ];

  return (
    <div className="relative mb-10 z-10 flex flex-col max-w-7xl items-center text-center md:text-left mx-auto p-5 overflow-x-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-darkturkish">
        Projects
      </h3>

      <div className="flex flex-col pt-[140px] xl:pt-[240px] items-center">
        <div className="flex flex-col hover:scale-105 duration-300 border-spacing-30 border-none border-opacity-25 rounded-2xl border-themegray shadow-xl bg-themelight px-10 py-24 xl:py-0 max-w-[1200px]">
          <div className="items-center xl:flex gap-0 space-y-5 xl:space-y-0 xl:max-w-none max-w-[700px]">
            <div className="text-start flex-1">
              <h3 className="text-4xl font-semibold mb-2">4. Semester.</h3>
              <p className="text-lg">
                Her er mine 2 emner, <a className="text-turkish">frontend</a> og{" "}
                <a className="text-turkish">app-udvikling</a>, som jeg har
                arbejdet med under 4. Semester på UCL. Det er her inde du vil
                finde lærings planer, og lærings mål for de to emner.
              </p>
            </div>

            {/* <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch"></div>
            py-24 xl:py-40
            */}
            <div className="hidden opacity-10 mx-10 xl:inline-block h-[600px] min-h-[1em] w-0.5 self-stretch bg-themegray"></div>

            <div className="flex-1 flex flex-row xl:flex-col space-x-2 xl:space-x-0 xl:space-y-5 col-span-4">
              <Link
                key={"frontend"}
                href={"/frontend"}
                className="navButton basis-1/2 text-turkish hover:bg-left-bottom hover:text-themeblack font-bold px-4 py-2 text-center ml-0 cursor-pointer"
              >
                <span>Frontend</span>
              </Link>
              <Link
                key={"appdev"}
                href={"/appdev"}
                className="navButton basis-1/2 text-turkish hover:bg-left-bottom hover:text-themeblack font-bold px-4 py-2 text-center ml-0 cursor-pointer"
              >
                <span>App dev</span>
              </Link>
            </div>
          </div>
        </div>

        <div className=" border-turkish mb-16 mt-16 opacity-70"></div>

        <div className="flex flex-col gap-10">
          {projects.map((project) => {
            return (
              <div
                className="flex flex-col mx-auto xl:mx-0 xl:flex-row text-start justify-between items-center gap-6 xl:max-w-none"
                key={project._id}
              >
                <div className="space-y-4">
                  <h4 className="text-3xl text-turkish font-semibold">
                    {project.name}
                  </h4>
                  <p>{project.description}</p>
                  <div className="flex">
                    <Link
                      key={project.name}
                      href={`${
                        project.type === "frontend" || project.type === "appdev"
                          ? `/${project.type}/${project.slug}`
                          : `/projects/${project.slug}`
                      }`}
                    >
                      <button className="navButton text-turkish hover:bg-left-bottom hover:text-themeblack font-bold px-4 py-2 text-center ml-0 cursor-pointer">
                        Læs mere...
                      </button>
                    </Link>
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                      }}
                    >
                      <SocialIcon
                        url={project.github}
                        target="_blank"
                        fgColor="#66fcf1"
                        bgColor="transparent"
                      />
                    </motion.div>
                  </div>
                </div>
                <Image
                  alt={project.imageAlt}
                  width={700}
                  height={400}
                  className="shadow-xl object-cover rounded-lg flex-shrink-0 w-[600px] h-[400px]"
                  src={project.image}
                  priority={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
//grid col-start-1 row-start-1 xl:justify-between space-x-5 xl:flex-row p-5 space-y-8 text-start place-items-center
