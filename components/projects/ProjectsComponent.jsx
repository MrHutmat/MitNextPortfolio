"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Frontend from "./Frontend";
import AppDev from "./AppDev";
import Link from "next/link";
import getProjects from "@/sanity/utils/getProjects";
import Image from "next/image";
import { SemesterCard } from "./SemesterCard";

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
    <div className="relative z-10 mx-auto mb-10 flex max-w-7xl flex-col items-center overflow-x-hidden p-5 text-center md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-darkturkish">
        Projects
      </h3>

      <div className="flex flex-col items-center pt-[140px] xl:pt-[240px]">
        {/* <SemesterCard /> */}

        <div className=" mb-16 mt-16 border-turkish opacity-70"></div>

        <div className="flex flex-col gap-10">
          {projects.map((project) => {
            return (
              <div
                className="mx-auto flex flex-col items-center justify-between gap-6 text-start xl:mx-0 xl:max-w-none xl:flex-row"
                key={project._id}
              >
                <div className="space-y-4">
                  <h4 className="text-3xl font-semibold text-turkish">
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
                      <button className="navButton ml-0 cursor-pointer px-4 py-2 text-center font-bold text-turkish hover:bg-left-bottom hover:text-themeblack">
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
                  className="h-[400px] w-[600px] flex-shrink-0 rounded-lg object-cover shadow-xl"
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
