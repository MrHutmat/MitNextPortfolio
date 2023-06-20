import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

const getProject = (slug) => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
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
    }`,
    { slug }
  );
};

export default getProject;
