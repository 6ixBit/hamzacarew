import ContentContainer from "@/components/ContentContainer";
import Image from "next/image";
import { Inset, Flex, Card, Box, Text } from "@radix-ui/themes";

const DesignCard = ({
  title,
  image,
}: {
  title: string;
  image: JSX.Element;
}) => {
  return (
    <Card size="3">
      <Flex>
        <Inset side="left" mr="4">
          <Flex
            align="center"
            justify="center"
            px="4"
            style={{ background: "#24292F", height: "100%", width: "90%" }}
          >
            {image}
          </Flex>
        </Inset>

        <Box style={{ maxWidth: 400 }}>
          <Text size="4">{title}</Text>
        </Box>
      </Flex>
    </Card>
  );
};

const Page = () => {
  return (
    <ContentContainer>
      <div className="text-xl font-bold mb-4 mt-8">My Designs</div>

      <div className="flex flex-col gap-6 p-2">
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
