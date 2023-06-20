import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

const getAppDevProjects = async () => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug",
        "image",
        url,
        content,
    }`
  );
};

export default getAppDevProjects;
