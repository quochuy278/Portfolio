import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Experience from "./Experience";

const Experiences = ({ experience }: any) => {
  const ref = useRef(null);
  console.log(experience);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-24">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {experience.map((element: any) => {
            return (
              <Experience
                key={element._id}
                position={element.Position}
                company={element.Company}
                companyLink={element.Link}
                time={element.Time}
                addres={element.Address}
                work={element.Work}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
