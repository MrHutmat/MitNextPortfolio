"use client";

import getFrontendProjects from "@/sanity/utils/getFrontendProjects";
import Learning from "./Learning";
import Resources from "./Resources";
import getFrontendPosts from "@/sanity/utils/getFrontendPosts";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";

const FrontendHome = async () => {
  const projects = await getFrontendProjects();
  const blogPosts = await getFrontendPosts();

  return (
    <div className="relative mb-10 z-10 flex flex-col max-w-[1680px] items-center text-center mx-auto px-2 overflow-x-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-darkturkish">
        Projects
      </h3>

      <div className="text-themegray pt-[140px] xl:pt-[240px] mx-auto">
        <section id="start" className="flex flex-col lg:flex-row pb-10">
          <Learning />
          <Resources />
        </section>

        <section
          id="frontendBlog"
          className="flex flex-col lg:flex-row gap-10 mx-auto justify-between"
        >
          <div className="grid grid-rows-2 lg:w-fit w-full mx-auto grow space-y-10">
            {blogPosts.map((post) => {
              return (
                <div
                  className="flex flex-col text-start items-start gap-2 px-5 py-5 max-w-[715px] mx-auto bg-themelight border-spacing-30 border-none border-opacity-25 rounded-lg shadow-lg"
                  key={post._id}
                >
                  <div className="space-y-4 mx-auto">
                    <h4 className="text-2xl text-turkish font-semibold pb-20">
                      {post.name}
                    </h4>

                    <>
                      <Link
                        key={post.name}
                        href={`/frontend/blog/${post.slug}`}
                      >
                        <button className="navButton text-turkish hover:bg-left-bottom hover:text-themeblack font-bold px-4 py-2 text-center ml-0 cursor-pointer">
                          Læs mere...
                        </button>
                      </Link>
                    </>
                    <div className="flex justify-between">
                      <p>
                        Skrevet af:{" "}
                        <a className="text-turkish underline">{post.author}</a>
                      </p>
                      <p>{post.releaseDate}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex-auto w-fit mx-auto">
            {projects.map((project) => {
              return (
                <div
                  className="flex flex-col text-start items-start gap-2 py-0 max-w-[715px] mx-auto"
                  key={project._id}
                >
                  <div className="flex flex-col space-y-4">
                    <h4 className="text-2xl text-turkish font-semibold align-text-top">
                      {project.name}
                    </h4>
                    <p>{project.description}</p>
                    <div className="flex">
                      <Link
                        key={project.name}
                        href={`${
                          project.type === "frontend" ||
                          project.type === "appdev"
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
                    width={715}
                    height={515}
                    className="shadow-xl object-cover rounded-lg flex-shrink-0 w-[715] h-[515px]"
                    src={project.image}
                    priority={true}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="frontendProjects"
          className="flex flex-col gap-10"
        ></section>
      </div>
    </div>
  );
};

export default FrontendHome;
