import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import {
  getReferenceDocument,
  getProjectsById,
  getMutitpleReferenceDocument,
} from "@/sanity-client/sanityClient";
import { transformToUrl } from "@/utils/imageBuilder";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { SanityAssetDocument, SanityDocument } from "@sanity/client";
import { useState } from "react";
const ProjectDetail = ({ project, author, skills, images }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      // add plugins here
    ]
  );
  console.log(images);
  const {
    name,
    role,
    title,
    type,
    description,
    contribution,
    solutions,
    challenges,
    conclusion,
  } = project[0];
  console.log(project[0]);
  const authorImageUrl = transformToUrl(author.profile_image[0].asset._ref);
  return (
    <div>
      <Head>
        <title>{project[0].title}</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>
      <TransitionEffect />
      <Layout>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <Image
                      className="mr-4 w-16 h-16 rounded-full"
                      src={authorImageUrl}
                      alt={author.author}
                      width={50}
                      height={50}
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        className="text-xl font-bold text-gray-900 dark:text-white"
                      >
                        {author.author}
                      </a>
                      <p className="text-base font-light text-gray-500 dark:text-gray-400">
                        {role}
                      </p>
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  {title}
                </h1>
              </header>
              <h4 className="text-2xl strong">1. Project Description</h4> <br />
              <p className="lead">{description}</p>
              <br />
              <h4 className="text-2xl strong">2. Contribution</h4> <br />
              <p>{contribution}</p>
              <br />
              <h4 className="text-2xl strong">3. Challenges</h4> <br />
              <p> {challenges}</p>
              <br />
              <h4 className="text-2xl strong">4. Solutions</h4> <br />
              <p> {solutions}</p>
              <br />
              <h4 className="text-2xl strong">5. Tech Stacks</h4> <br />
              <div className="w-full flex justify-around">
                {skills.map((skill: SanityDocument) => {
                  const skillImageUrl = transformToUrl(
                    skill.Icon.icon[0].asset._ref
                  );
                  return (
                    <Image
                      key={skill._id}
                      src={skillImageUrl}
                      alt={skill.Icon.title}
                      width={50}
                      height={50}
                    />
                  );
                })}
              </div>
              <br />
              <h4 className="text-2xl strong">6. Images</h4>
              <br />
              <div ref={sliderRef} className="keen-slider flex">
                {images.map((image: SanityDocument) => {
                  return (
                    <Image
                      key={image._id}
                      src={image.url}
                      className="keen-slider__slide"
                      alt={image.originalFilename}
                      width={50}
                      height={50}
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      50vw"
                    />
                  );
                })}
              </div>
              {loaded && instanceRef.current && (
                <div className="flex py-[10px] px-0 justify-center">
                  {[
                    ...Array(
                      instanceRef.current.track.details.slides.length
                    ).keys(),
                  ].map((idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx);
                        }}
                        className={
                          "bg-[#c5c5c5] w-[10px] h-[10px] my-0 mx-[5px] p-[5px] rounded-full cursor-pointer" +
                          (currentSlide === idx ? " bg-black" : "")
                        }
                      ></button>
                    );
                  })}
                </div>
              )}
              <h4 className="text-2xl strong">7. Conclusion</h4>
              <br/>
              <div>{conclusion}</div>
            </article>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default ProjectDetail;

export async function getStaticProps(context: GetStaticPropsContext) {
  // Call an external API endpoint to get skills
  const { params } = context;
  const projectId = params!.projectId as string;
  const project = await getProjectsById(projectId as string);
  const author = await getReferenceDocument(project[0].Author[0]._ref);
  const skills = project[0].skills;
  const images = project[0].Images.Upload;
  const refSkillsArray = skills.map((skill: any) => skill._ref);
  const refImagesArray = images.map((image: any) => image.asset._ref);
  const skillDocument = await getMutitpleReferenceDocument(refSkillsArray);
  const imageDocument = await getMutitpleReferenceDocument(refImagesArray);
  return {
    props: {
      project,
      author: author,
      skills: skillDocument,
      images: imageDocument,
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

function LeftArrow(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

function RightArrow(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
