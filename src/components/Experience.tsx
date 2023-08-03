import { useRef } from "react";
import LiIcon from "./Lilcon";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

const Experience = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: any) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between text-justify"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 ">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
        <Link href={'/projects'} className="underline">More detail ...</Link>
      </motion.div>
    </li>
  );
};

export default Experience;
