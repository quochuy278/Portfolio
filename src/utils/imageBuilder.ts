import { client } from "@/sanity-client/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const transformToUrl = (source: string) => {
  const builder = imageUrlBuilder(client);
  return builder.image(source).url();
};

export { transformToUrl };
