import React from "react";

import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import { AnimatedText } from "@/components/AnimatedText";
import { getProjects } from "@/sanity-client/sanityClient";
import { Project } from "@/components/Project";

const ProjectPage = ({ projects }: any) => {
  console.log(projects);
  return (
    <>
      <Head>
        <title>Portfolio | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Unleash Your Creative Pawsibilities!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              {projects.map((project: any, index: number) => {
                return (
                  <Project
                    key={project._id}
                    id={project._id}
                    images={project.Images.Upload}
                    type={project.type}
                    title={project.title}
                    link={project.Link}
                    github={project.Github}
                  />
                );
              })}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ProjectPage;

export async function getStaticProps() {
  // Call an external API endpoint to get skills
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}
