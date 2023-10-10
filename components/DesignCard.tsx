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
            px="5"
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

export default DesignCard;