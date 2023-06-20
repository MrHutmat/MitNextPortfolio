import getProject from "@/sanity/utils/getProject";

const Project = async ({ params }) => {
  const slug = params.project;
  const project = await getProject(slug);
  console.log(project.name);

  return (
    <div className="h-screen text-themegray flex flex-col relative max-w-7xl justify-evenly text-center items-center">
      <div className="items-center text-center justify-center">
        {project.name}
      </div>
    </div>
  );
};

export default Project;
