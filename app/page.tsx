"use client";

import { Button } from "@radix-ui/themes";
import ContentContainer from "@/components/ContentContainer";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SubContentContainer from "@/components/SubContentContainer";
import { useState } from "react";

const CopiedNotification = ({
  show,
  children,
}: {
  show: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div style={{ position: "relative" }}>
      {show ? (
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            marginBottom: "0.5rem",
            backgroundColor: "rgb(156 163 175)",
            color: "white",
            padding: "8px",
            borderRadius: "5px",
          }}
        >
          Copied!
        </div>
      ) : null}
      {children}
    </div>
  );
};

const Content = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleCopiedClick = () => {
    navigator.clipboard.writeText("hamzacarew@gmail.com");
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 1100);
  };

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
        <h1 className="text-2xl font-bold md:text-3xl"> Hamza Carew</h1>

        <div className="bg-green-200 px-1 rounded-full flex items-center justify-center w-40 font-semibold">
          <h2>Fullstack Developer</h2>
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

          <CopiedNotification show={showNotification}>
            <Button
              style={{ width: "7rem", height: "30px" }}
              variant="soft"
              onClick={handleCopiedClick}
            >
              Copy Email
            </Button>
          </CopiedNotification>
        </div>
      </div>

      <SubContent title="SAAS Products" />
    </ContentContainer>
  );
};

const SubContent = ({ title }: { title: string }) => {
  return (
    <>
    <SubContentContainer title={title}>
    <div className="my-2 flex flex-col gap-4 px-4 mb-3">
        <Link href="https://rapid-product-launcher.vercel.app/">
          <ProjectCard
            hover={true}
            leftIcon={
              <Image
                src="/rpd.png"
                width={45}
                height={45}
                alt="Rapid Product Launcher logo"
              />
            }
            title="Rapid Product Launcher"
            subTitle="Launch ecom products on Shopify."
          />
        </Link>
      </div>

      <div className="my-2 flex flex-col gap-4 px-4">
        <Link href="https://protutor.ai">
          <ProjectCard
            hover={true}
            leftIcon={
              <Image
                src="/protutor.png"
                width={35}
                height={35}
                alt="Pro Tutor AI logo"
              />
            }
            title="ProTutor AI"
            subTitle="Generate study notes for anything."
          />
        </Link>
      </div>
    </SubContentContainer>
    </>
  );
};

export default function Home() {
  return <Content />;
}
