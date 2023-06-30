import React from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity-client/sanityClient";

const builder = imageUrlBuilder(client);
const urlFor = (source: string) => {
  return builder.image(source);
};

const Skill = ({ skill }: any) => {
  const imageUrl = urlFor(skill.Icon.icon[0].asset._ref).url();
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
