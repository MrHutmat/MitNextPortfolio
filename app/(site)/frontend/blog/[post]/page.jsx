import getProject from "@/sanity/utils/getProject";

const Post = async ({ params }) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <article className="z-10 h-screen flex flex-col relative max-w-[1440px] items-center justify-evenly text-center xl:text-left xl:flex-row mx-auto p-5 text-themegray">
      <section className="flex flex-col xl:flex-row space-x-5 space-y-7 xl:space-y-0 items-center">
        <div className="flex flex-col space-y-5">
          <h1 className="text-4xl font-black uppercase text-turkish">
            {project.name}
          </h1>
          <p className="text-lg">{project.description}</p>
        </div>
      </section>
      <section></section>
    </article>
  );
};

export default Post;
