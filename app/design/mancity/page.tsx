"use client";
import ContentContainer from "@/components/ContentContainer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Carousel from "@/components/Carousel/Carousel";
import { Button } from "@radix-ui/themes";
import { SwiperSlide } from "swiper/react";

const Page = () => {
  const router = useRouter();

  return (
    <ContentContainer>
      <div className="mb-2">
        <Button
          className="w-24"
          variant="soft"
          onClick={() => {
            router.back();
          }}
        >
          <Image src="/back.png" width={16} height={20} alt="back icon" />
          Designs
        </Button>
      </div>

      <Carousel>
        <SwiperSlide>
          <Image
            src="/hamza.jpeg"
            width={50}
            height={50}
            alt="Picture of Hamza"
            style={{
              borderBottomLeftRadius: "5%",
              borderBottomRightRadius: "5%",
            }}
          />
        </SwiperSlide>
      </Carousel>
      <div className="text-lg font-bold mb-2 mt-4">
        Manchester City fan page
      </div>

      <div className="text-md mb-4 font-medium text-gray-500">
        A mockup I made in Figma for a static Manchester City fan page.
      </div>
    </ContentContainer>
  );
};

export default Page;
