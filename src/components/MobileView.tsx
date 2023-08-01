import React from "react";

import { motion, useScroll } from "framer-motion";
import { CustomMobileLink } from "./custom";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./icons";

interface MobileViewProps {
  className: string;
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => void;
}

const MobileView = ({
  className,
  mode,
  setMode,
  handleClick,
}: MobileViewProps) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
      animate={{ scale: 1, opacity: 1 }}
      className="min-w-[70vw] sm:min-w-[90vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
      "
    >
      <nav className="flex items-center flex-col justify-center">
        <CustomMobileLink
          href="/"
          title="Home"
          className={className}
          toggle={handleClick}
        />
        <CustomMobileLink
          href="/about"
          title="About"
          className={className}
          toggle={handleClick}
        />
        <CustomMobileLink
          href="/projects"
          title="Projects"
          className={className}
          toggle={handleClick}
        />
      </nav>

      <nav className="flex items-center justify-center flex-wrap mt-2">
        <motion.a
          href={process.env.NEXT_PUBLIC_GITHUB_URL}
          target={"_blank"}
          className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
          target={"_blank"}
          className="w-6 mx-3 sm:mx-1"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1
      ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
      `}
        >
          {mode === "light" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
    </motion.div>
  );
};

export default MobileView;
