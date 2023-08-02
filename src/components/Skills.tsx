import Skill from "./Skill";

const Skills = ({ skills }: any) => {
  return (
    <div className="my-24">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Skills
      </h2>

      <div className="w-full flex justify-center items-center">
        <ul className="w-full grid grid-cols-4 gap-2 gap-y-5 2xl:grid-cols-6 xl:grid-cols-5 sm:grid-cols-4 xs:grid-cols-3">
          {skills.map((skill: any) => {
            return <Skill skill={skill} key={skill._id} />;
          })}
        </ul>
      </div> 
    </div>
  );
};

export default Skills;
