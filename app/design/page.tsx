import ContentContainer from "@/components/ContentContainer";
import Image from "next/image";
import DesignCard from "@/components/DesignCard";

// TODO: Add carousel for each design when clicked.

const Page = () => {
  return (
    <ContentContainer>
      <div className="text-xl font-bold mb-4">My Designs</div>

      <div className="flex flex-col gap-6">
        <DesignCard
          title="Man City fan page"
          image={
            <Image
              src="/mancity.png"
              width={150}
              height={150}
              alt="next icon"
            />
          }
        />

        <DesignCard
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
