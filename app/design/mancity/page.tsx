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
            src="/HomePageOfManCityDesign.png"
            width={250}
            height={250}
            quality={85}
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
        This is a Figma mockup of a Manchester City fan page homepage. It
        features two vertical grids for content allocation, a gradient header
        and footer, social media buttons, and important links like terms and
        privacy.
      </div>
    </ContentContainer>
  );
};

export default Page;
