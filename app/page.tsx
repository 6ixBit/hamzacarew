import { Button } from "@radix-ui/themes";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-96 border-1 bg-white rounded-md flex items-center gap-6 px-6 h-12">
      <div
        style={{ transition: "transform 0.2s", borderRadius: "50%" }}
        className="hover:scale-110 hover:bg-gray-300"
      >
        <Image src="/hut.png" width={20} height={20} alt="hut icon" />
      </div>

      <div
        style={{ transition: "transform 0.2s", borderRadius: "31%" }}
        className="hover:scale-110 hover:bg-gray-300"
      >
        <Image src="/user.png" width={20} height={20} alt="user icon" />
      </div>

      <div
        style={{ transition: "transform 0.2s", borderRadius: "50%" }}
        className="hover:scale-110 hover:bg-gray-300"
      >
        <Image src="/arts.png" width={24} height={24} alt="web design icon" />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="border-red-500 h-max bg-white rounded-md shadow w-96 flex flex-col p-6">
      {/* <p className="text-lg"> Software Developer </p> */}

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

        <div className="bg-green-200 rounded-full flex items-center justify-center w-36">
          <h2>Fullstack Dev</h2>
        </div>

        <h3 className="my-2">
          Shipping stuff as a solopreneur from Atlanta, GA.
        </h3>

        {/* <Button variant="soft" size="1" style={{ width: "10rem" }}>
          Copy Email
        </Button> */}

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
