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
import Frontend from "@/components/skills/Frontend";

const FrontendHome = async () => {
  const projects = await getFrontendProjects();
  const blogPosts = await getFrontendPosts();

  return (
    <div className="relative z-10 mx-auto mb-10 flex max-w-[1680px] flex-col items-center overflow-x-hidden px-2 text-center">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-darkturkish">
        Frontend
      </h3>

      <div className="mx-auto pt-[180px] text-themegray xl:pt-[240px]">
        <section id="start" className="flex flex-col gap-10 pb-10 lg:flex-row">
          <Learning />
          <Frontend />
        </section>

        <h1 className="mb-20 mt-20 text-xl uppercase tracking-[4px] text-darkturkish md:text-2xl md:tracking-[20px]">
          Læringsplan/Produkter
        </h1>
        <section
          id="frontendBlog"
          className="mx-auto flex w-fit flex-col justify-between gap-10 lg:flex-row"
        >
          <div className="flex w-full flex-1 flex-col justify-between space-y-10 lg:w-fit">
            {blogPosts.map((post) => {
              return (
                <div
                  className="border-spacing-30 mx-auto flex max-w-[715px] flex-col items-start gap-2 rounded-lg border-none border-opacity-25 bg-themelight px-5 py-5 text-start shadow-lg"
                  key={post._id}
                >
                  <div className="flex flex-col space-y-4">
                    <h4 className="pb-20 text-2xl font-semibold text-turkish">
                      {post.name}
                    </h4>

                    <Link key={post.name} href={`/frontend/blog/${post.slug}`}>
                      <button className="navButton ml-0 cursor-pointer px-4 py-2 text-center font-bold text-turkish hover:bg-left-bottom hover:text-themeblack">
                        Læs mere...
                      </button>
                    </Link>

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

          <div className="flex w-full flex-1 flex-col justify-between space-y-10 lg:w-fit">
            {projects.map((project) => {
              return (
                <div
                  className="mx-auto flex max-w-[636.62px] flex-col items-start gap-2 py-0 text-start lg:max-w-[715px]"
                  key={project._id}
                >
                  <div className="flex flex-col space-y-4">
                    <h4 className="align-text-top text-2xl font-semibold text-turkish">
                      {project.name}
                    </h4>
                    <p>{project.description}</p>
                    <div className="flex pb-5">
                      <Link
                        key={project.name}
                        href={`${
                          project.type === "frontend" ||
                          project.type === "appdev"
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
                    width={715}
                    height={515}
                    className="h-[515px] w-[715] flex-shrink-0 rounded-lg object-cover shadow-xl"
                    src={project.image}
                    priority={true}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <h1 className="mb-20 mt-[120px] text-xl uppercase tracking-[10px] text-darkturkish md:text-2xl md:tracking-[20px]">
          Litteraturliste
        </h1>
        <section
          id="frontendResources"
          className="flex flex-col items-center gap-10"
        >
          <Resources />
        </section>
      </div>
    </div>
  );
};

export default FrontendHome;
