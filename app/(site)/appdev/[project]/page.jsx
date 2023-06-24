import getProject from "@/sanity/utils/getProject";

const Project = async ({ params }) => {
  const slug = params.project;
  const project = await getProject(slug);
  console.log(project.name);

  return (
    <div className="relative flex h-screen max-w-7xl flex-col items-center justify-evenly text-center text-themegray">
      <div className="items-center justify-center text-center">
        {project.name}
      </div>
    </div>
  );
};

export default Project;
