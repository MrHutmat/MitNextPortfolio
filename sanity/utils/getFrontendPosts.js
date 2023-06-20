import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

const getFrontendPosts = async () => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "frontendPost"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      url,
      releaseDate,
      author,
      content,
    }`
  );
};

export default getFrontendPosts;
