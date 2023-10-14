"use client";
import { Inset, Flex, Card, Box, Text } from "@radix-ui/themes";
const DesignCard = ({
  title,
  image,
  onClick,
}: {
  title: string;
  image: JSX.Element;
  onClick: () => void;
}) => {
  return (
    <Card size="3" onClick={onClick}>
      <Flex>
        <Inset side="left" mr="4">
          <Flex
            align="center"
            justify="center"
            px="5"
            style={{ background: "#24292F", height: "100%", width: "90%" }}
          >
            {image}
          </Flex>
        </Inset>

        <Box style={{ maxWidth: 400 }}>
          <p className="font-sans font-medium md:text-xl">{title}</p>
        </Box>
      </Flex>
    </Card>
  );
};

export default DesignCard;
