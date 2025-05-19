"use client";
import { useRouter } from "next/navigation";
import ContentContainer from "@/components/ContentContainer";
import Image from "next/image";
import DesignCard from "@/components/DesignCard";

const Page = () => {
  const router = useRouter();

  return (
    <ContentContainer>
      <div className="text-xl font-bold mb-4">My Designs</div>

      <div className="flex flex-col gap-6">
        {/* <DesignCard
          onClick={() => {
            router.push("/design/mancity");
          }}
          title="Man City fan page"
          image={
            <Image
              src="/mancity.png"
              width={150}
              height={150}
              alt="next icon"
            />
          }
        /> */}

        <DesignCard
          onClick={() => {
            router.push("/design/thoughtflow");
          }}
          title="ThoughtFlow IOS"
          image={
            <Image
              src="/thoughtflow-ios.png"
              width={150}
              height={150}
              alt="next icon"
            />
          }
        />
      </div>
    </ContentContainer>
  );
};

export default Page;
