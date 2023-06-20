import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

const getFrontendProjects = async () => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset -> url,
      "imageAlt": image.alt,
      url,
      type,
      github,
      description,
      content,
    }`
  );
};

export default getFrontendProjects;
