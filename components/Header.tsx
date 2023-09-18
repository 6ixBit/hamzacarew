"use client";

import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [page, setPage] = useState(pathname);

  const handleClick = (path: string) => {
    setPage(path);
    router.push(path);
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
          onClick={() => handleClick("/design")}
          style={{ transition: "transform 0.2s", borderRadius: "50%" }}
          className={`hover:scale-110 ${
            page === "/design" ? "bg-gray-300" : ""
          }`}
        >
          <Image src="/arts.png" width={24} height={24} alt="web design icon" />
        </div>
      </div>

      <div>
        <Button
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

export default Header;
