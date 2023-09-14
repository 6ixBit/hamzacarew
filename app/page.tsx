"use client";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const [page, setPage] = useState(pathname);

  const handleClick = (path: string) => {
    setPage(path);
    console.log(pathname);
  };

  return (
    <div className="w-96 border-1 bg-white rounded-md flex items-center gap-6 px-4 h-12 justify-between">
      <div className="flex items-center gap-6">
        <div
          onClick={() => handleClick("/")}
          style={{ transition: "transform 0.2s", borderRadius: "50%" }}
          className={`hover:scale-110 ${page === "/" ? "bg-gray-300" : ""}`}
        >
          <Image src="/hut.png" width={20} height={20} alt="hut icon" />
        </div>

        <div
          onClick={() => handleClick("/me")}
          style={{ transition: "transform 0.2s", borderRadius: "31%" }}
          className={`hover:scale-110 ${page === "/me" ? "bg-gray-300" : ""}`}
        >
          <Image src="/user.png" width={20} height={20} alt="user icon" />
        </div>

        <div
          onClick={() => handleClick("/designs")}
          style={{ transition: "transform 0.2s", borderRadius: "50%" }}
          className={`hover:scale-110 ${
            page === "/designs" ? "bg-gray-300" : ""
          }`}
        >
          <Image src="/arts.png" width={24} height={24} alt="web design icon" />
        </div>
      </div>

      <div>
        <Button
          color="gray"
          variant="solid"
          style={{ boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)" }}
          onClick={() => window.open("/HamzaCV.pdf", "_blank")}
        >
          View CV
        </Button>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="border-red-500 h-max bg-white rounded-md shadow w-96 flex flex-col p-6">
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

      <div className="flex flex-col gap-2 my-6 w-3/4">
        <h1 className="text-2xl font-bold"> Hamza Carew</h1>

        <div className="bg-green-200 rounded-full flex items-center justify-center w-36 font-semibold">
          <h2>Fullstack Dev</h2>
        </div>

        <h3 className="my-2 font-medium text-gray-500">
          Shipping code as a founder from port 1337.
        </h3>

        <div className="flex flex-row gap-4 mt-2">
          <a
            href="      https://www.linkedin.com/in/hamza-carew/"
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
      </div>

      <SubContent />
    </div>
  );
};

const SubContent = () => {
  return (
    <div className="flex flex-col border bg-gray-100 rounded-md w-full">
      <p className="font-medium my-2 px-2">Projects</p>
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
            title="PromptBase"
            subTitle="Design, Backend & Frontend"
          />
        </Link>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  leftIcon: JSX.Element;
  title: string;
  subTitle: string;
}

const ProjectCard = ({ leftIcon, title, subTitle }: ProjectCardProps) => {
  return (
    <div className="flex justify-between border bg-white rounded-md items-center h-20 px-1 shadow-lg">
      <div className="pl-2 rounded-full">{leftIcon}</div>

      <div className="flex flex-col gap-2 pr-2">
        <div className="font-bold">{title}</div>
        <div className="font-medium text-gray-500">{subTitle}</div>
      </div>
      <div className="pr-1">
        <Image src="/next.png" width={20} height={20} alt="next icon" />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 max-w-3/4 mx-auto bg-slate-300 gap-4">
      <Header />
      <Content />
    </main>
  );
}
