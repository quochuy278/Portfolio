import Head from "next/head";
import Image from "next/image";

import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";

import { AnimatedText } from "@/components/AnimatedText";
import {
  getBiography,
  getEducations,
  getExperiences,
  getSkills,
} from "@/sanity-client/sanityClient";

import profilePic from "../../public/images/image.jpg";
import DynamicHead from "@/components/DynamicHead";

const AboutPage = ({ skills, experience, education, biography }: any) => {
  return (
    <>
      <DynamicHead
        title="Portfolio | About me"
        content="Meet Huy Bui, a fresh graduate and aspiring software developer specializing in web development. With a focus on React and Node.js, Huy is dedicated to writing clean and maintainable code to deliver high-quality software applications. Join Huy's journey of continuous learning and growth in the dynamic field of software development."
      />
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                {biography[0].Title}
              </h2>
              {biography[0].Biography.length === 0 ? null : (
                <>
                  {biography[0].Biography.map((bio: string, index: number) => {
                    return (
                      <p key={index} className="font-medium my-4">
                        {bio}
                        <br />
                      </p>
                    );
                  })}
                </>
              )}
              {/* <p className="font-medium">{biography[0].Biography}</p> */}
            </div>

            <div
              className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Huy Bui"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              30vw"
              />
            </div>
          </div>

          <Skills skills={skills} />
          <Experiences experience={experience} />
          <Education education={education} />
        </Layout>
      </main>
    </>
  );
};

export default AboutPage;

export async function getStaticProps() {
  // Call an external API endpoint to get skills
  const skills = await getSkills();
  const experience = await getExperiences();
  const education = await getEducations();
  const biography = await getBiography();
  return {
    props: {
      skills,
      experience,
      education,
      biography,
    },
  };
}
