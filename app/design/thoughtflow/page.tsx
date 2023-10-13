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
            src="/ThoughtFlow-Login-Design.png"
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

        <SwiperSlide>
          <Image
            src="/ThoughtFlow-SignUp-Design.png"
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

        <SwiperSlide>
          <Image
            src="/ThoughtFlow-Home-Design.png"
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

        <SwiperSlide>
          <Image
            src="/ThoughtFlow-Categories-Design.png"
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

        <SwiperSlide>
          <Image
            src="/ThoughtFlow-Recording-Design.png"
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

        <SwiperSlide>
          <Image
            src="/ThoughtFlow-Settings-Design.png"
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

        <SwiperSlide>
          <Image
            src="/ThoughtFlow-UserCategory-Design.png"
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
      <div className="text-lg font-bold mb-2 mt-4">ThoughtFlow IOS</div>

      <div className="text-md mb-4 font-medium text-gray-500">
        IOS mockups I designed in for my app Thoughtflow, it consists of a page
        for all aspects of the audio transcription app. From authentication to
        core features to settings.
      </div>
    </ContentContainer>
  );
};

export default Page;
