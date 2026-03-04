"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var w-full flex justify-center">
      <CardBody
        className="
        bg-[#2c2e5f] 
        relative 
        group/card 
        w-full 
        max-w-[380px] 
        sm:max-w-[420px] 
        md:max-w-[480px]
        rounded-xl 
        p-4 sm:p-6
      "
      >
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl md:text-2xl font-bold text-white"
        >
          Namaste, I'm Shriya
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="
          text-[#ecacc6]
          text-sm sm:text-base md:text-lg
          max-w-sm
          mt-2
        "
        >
          a developer crafting scalable, intuitive web experiences.
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://res.cloudinary.com/doojbkvn6/image/upload/v1772462790/1716181949024_1_sfoovs.png"
            className="
            w-full 
            h-auto
            max-h-[220px] 
            sm:max-h-[280px] 
            md:max-h-[320px]
            object-cover 
            rounded-xl
            group-hover/card:shadow-xl
          "
            alt="Shriya"
          />
        </CardItem>

        <div className="flex justify-between items-center mt-6 sm:mt-10">
          <CardItem
            translateZ={20}
            as="button"
            className="
            px-4 py-2
            rounded-lg
            bg-black
            text-white
            text-xs sm:text-sm
            font-semibold
            hover:scale-105
            transition
          "
          >
            Connect
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}