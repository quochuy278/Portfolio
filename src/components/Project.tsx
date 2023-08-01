import Link from "next/link";
import { GithubIcon } from "./icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectPropsType } from "./types";
import { transformToUrl } from "@/utils/imageBuilder";

const FramerImage = motion(Image);

const  Project = ({
  id,
  title,
  type,
  images,
  link,
  github,
}: ProjectPropsType) => {
  const heroImages = transformToUrl(images[0].asset._ref);
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
      border border-solid border-dark bg-light p-6 relative mb-[4rem] dark:bg-dark dark:border-light xs:p-4
      "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
      />
      <Link
        href={`projects/${id}`}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={heroImages}
          width={200}
          height={250}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link ? link : "#"}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full flex items-center justify-between">
          <Link
            href={link ? link : "#"}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link
            href={github ? github : "#"}
            target="_blank"
            className="w-8 md:w-6"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export { Project };
