"use client";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ContentContainer from "@/components/ContentContainer";
import SubContentContainer from "@/components/SubContentContainer";
import { useEffect, useState, useRef } from "react";

const Content = () => {
  return (
    <ContentContainer>
      <div
        style={{
          width: 144,
          height: 144,
          padding: 2,
          borderRadius: "50%",
          background:
            "linear-gradient(white, white), radial-gradient(circle at top left, lightgrey, transparent)",
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box",
          boxSizing: "border-box",
        }}
      >
        <Image
          src="/hamza.jpeg"
          width={140}
          height={140}
          alt="Picture of Hamza"
          style={{ borderRadius: "50%" }}
        />
      </div>

      <div className="flex flex-col gap-2 my-6 w-full">
        <h1 className="text-2xl font-bold"> Hamza Carew</h1>

        <div className="bg-green-200 px-1 rounded-full flex items-center justify-center w-40 font-semibold">
          <h2>Fullstack Developer.</h2>
        </div>

        <h3 className="my-2 font-medium text-gray-500">
          Shipping code from port 1337.
        </h3>

        <div className="flex flex-row gap-4 mt-2 justify-between w-full">
          <div className="flex flex-row gap-4">
            <a
              href="https://www.linkedin.com/in/hamza-carew/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.png"
                width={30}
                height={30}
                alt="Github logo"
                style={{ transition: "transform 0.2s" }}
                className="hover:scale-110"
              />
            </a>

            <a
              href="https://twitter.com/HeCodes404s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/twitter.png"
                width={30}
                height={30}
                alt="Twitter logo"
                style={{ transition: "transform 0.2s" }}
                className="hover:scale-110"
              />
            </a>

            <a
              href="https://github.com/6ixBit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.png"
                width={30}
                height={30}
                alt="Github logo"
                style={{ transition: "transform 0.2s" }}
                className="hover:scale-110"
              />
            </a>
          </div>
          <CopiedNotification>
            <Button
              style={{ width: "7rem", height: "30px" }}
              variant="soft"
              onClick={() =>
                navigator.clipboard.writeText("hamzacarew@gmail.com")
              }
            >
              Copy Email
            </Button>
          </CopiedNotification>
        </div>
      </div>

      <SubContent title="Projects" />
    </ContentContainer>
  );
};

const SubContent = ({ title }: { title: string }) => {
  return (
    <SubContentContainer title={title}>
      <div className="my-2 flex flex-col gap-4 px-4">
        <Link href="https://www.thoughtflow.app">
          <ProjectCard
            leftIcon={
              <Image
                src="/thought-bubble.png"
                width={30}
                height={30}
                alt="next icon"
              />
            }
            title="ThoughtFlow"
            subTitle="Design, Backend & Frontend"
          />
        </Link>

        <Link href="https://www.thoughtflow.app">
          <ProjectCard
            leftIcon={
              <Image src="/ai.png" width={30} height={30} alt="next icon" />
            }
            title="PromptArena"
            subTitle="Design, Backend & Frontend"
          />
        </Link>
      </div>
    </SubContentContainer>
  );
};

const CopiedNotification = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(true);
  const notificationRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  }, [show]);

  // useEffect(() => {
  //   if (targetRef.current && notificationRef.current) {
  //     const targetRect = targetRef.current.getBoundingClientRect();
  //     const notificationRect = notificationRef.current.getBoundingClientRect();

  //     notificationRef.current.style.top = `${
  //       targetRect.top - notificationRect.height
  //     }px`;
  //     notificationRef.current.style.left = `${targetRect.left}px`;
  //   }
  // }, [targetRef]);

  return (
    <>
      <div ref={targetRef}>{children}</div>
      <div
        ref={notificationRef}
        className={`absolute m-6 p-2 rounded text-white bg-black transition-opacity duration-500 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        Copied!
      </div>
    </>
  );
};

export default function Home() {
  return <Content />;
}
