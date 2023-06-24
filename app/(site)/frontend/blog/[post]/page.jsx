import getProject from "@/sanity/utils/getProject";

const Post = async ({ params }) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <article className="relative z-10 mx-auto flex h-screen max-w-[1440px] flex-col items-center justify-evenly p-5 text-center text-themegray xl:flex-row xl:text-left">
      <section className="flex flex-col items-center space-x-5 space-y-7 xl:flex-row xl:space-y-0">
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
