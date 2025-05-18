import ContentContainer from "@/components/ContentContainer";
import VerticalPipes from "@/components/VerticalPipes";
import SubContentContainer from "@/components/SubContentContainer";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

const TimeLine = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-row gap-2 ">
        <div className="flex flex-row items-center">
          <span className="pr-8 font-semibold ">2025</span>

          <span className="flex flex-col">
            <span className=" font-extrabold">Voya</span>
            <p className=" text-gray-500 mt-1">Fullstack Software Engineer</p>
            <div className="bg-green-200 w-24 rounded-full flex items-center justify-center font-semibold mt-2">
              <h2>Current</h2>
            </div>
          </span>
        </div>
      </div>

      <VerticalPipes numOfPipes={3} />

      <div className="flex flex-row gap-2 ">
        <div className="flex flex-row items-center">
          <span className="pr-8 font-semibold">2020</span>

          <span className="flex flex-col">
            <span className="font-extrabold">Combine AI</span>
            <p className=" text-gray-500 mt-1">Frontend Software Engineer</p>
          </span>
        </div>
      </div>
      <VerticalPipes numOfPipes={3} />

      <div className="flex flex-row gap-2 ">
        <div className="flex flex-row items-center">
          <span className="pr-8 font-semibold">2020</span>

          <span className="flex flex-col">
            <span className="font-extrabold">University Of Greenwich</span>
            <p className=" text-gray-500 mt-1">BSc Computer Science (1:1)</p>
          </span>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <ContentContainer>
      <div className="text-xl font-bold mb-2"> Tech Stack</div>

      <SubContentContainer>
        <ProjectCard
          leftIcon={
            <Image src="/react.png" width={30} height={30} alt="next icon" />
          }
          title="React JS"
          subTitle="Frontend"
          disableRightIcon={true}
          textStyles="pr-44"
        />
        {/* <ProjectCard
          leftIcon={
            <Image
              src="/typescript.png"
              width={30}
              height={30}
              alt="typescript icon"
            />
          }
          title="Typescript"
          subTitle="Frontend & Backend"
          disableRightIcon={true}
          textStyles="md:mr-10.4rem mr-7.5rem"
        /> */}

<ProjectCard
          leftIcon={
            <Image
              src="/aws.svg"
              width={30}
              height={30}
              alt="aws icon"
            />
          }
          title="AWS"
          subTitle="Hosting & Storage"
          disableRightIcon={true}
          textStyles="md:mr-10.4rem mr-7.5rem"
        />

        <ProjectCard
          leftIcon={
            <Image src="/nextjs.png" width={30} height={30} alt="next icon" />
          }
          title="Next JS"
          subTitle="Frontend, Backend Infra & Storage"
          disableRightIcon={true}
        />
        <ProjectCard
          leftIcon={
            <Image src="/figma.png" width={30} height={30} alt="figma icon" />
          }
          title="Figma"
          subTitle="Design, Wireframes & Prototyping"
          disableRightIcon={true}
        />

        <ProjectCard
          leftIcon={
            <Image src="/python.png" width={30} height={30} alt="python icon" />
          }
          title="Python 3"
          subTitle="Scripting, Backend & Webscraping"
          disableRightIcon={true}
        />
      </SubContentContainer>

      <div className="text-xl font-bold mb-2 mt-8">Tech Timeline</div>
      <SubContentContainer>
        <TimeLine />
      </SubContentContainer>
    </ContentContainer>
  );
};

export default Page;
