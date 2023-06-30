import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./Lilcon";
import { Details } from "./Detail";

const Education = ({ education }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  console.log(ref);
  return (
    <div className="my-24">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {education.length === 0 ? null : (
            <>
              {education.map((element: any, index: number) => {
                return (
                  <Details
                    key={index}
                    type={element.Type}
                    time={element.Time}
                    place={element.University}
                    info={element.Description}
                  />
                );
              })}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Education;
