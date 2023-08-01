import { transformToUrl } from "@/utils/imageBuilder";
import Image from "next/image";


const Skill = ({ skill }: any) => {
  const imageUrl = transformToUrl(skill.Icon.icon[0].asset._ref);
  return (
    <li className="w-full h-18 flex items-center justify-center p-3">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={imageUrl}
          alt={skill.Icon.title}
          width={skill.Icon.Width}
          height={skill.Icon.Height}
        />
        <div className="font-bold my-1">{skill.name}</div>
      </div>
    </li>
  );
};

export default Skill;
