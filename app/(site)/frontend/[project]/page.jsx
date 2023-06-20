import getProject from "@/sanity/utils/getProject";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

const Project = async ({ params }) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <article className="z-10 h-screen flex flex-col relative max-w-[1440px] items-center justify-evenly text-center mx-auto md:text-start px-3 text-themegray">
      <section className="flex flex-col xl:flex-row space-x-5 space-y-7 xl:space-y-0 items-center">
        <div className="flex flex-col space-y-5">
          <h1 className="text-4xl font-black uppercase text-turkish">
            {project.name}
          </h1>
          <p className="text-lg">{project.description}</p>
        </div>
        <Image
          width={700}
          height={400}
          className="shadow-xl object-cover rounded-lg flex-shrink-0 w-[600px] h-[400px]"
          src={project.image}
          alt={project.imageAlt}
        />
      </section>
      <section>
        <div>
          <PortableText value={project.content} />
        </div>
      </section>
    </article>
  );
};

export default Project;
