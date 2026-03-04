"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-[#2c2e5f] relative group/card w-full max-w-xl sm:w-[30rem] h-auto rounded-xl p-4 sm:p-6">
        <CardItem
          translateZ="50"
          className="text-xl sm:text-2xl font-bold text-white">
          Namaste, I'm Shriya
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-[#ecacc6] text-base sm:text-lg max-w-sm mt-2">
          a developer crafting scalable, intuitive web experiences.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
        <img
          src="https://res.cloudinary.com/doojbkvn6/image/upload/v1772462790/1716181949024_1_sfoovs.png"
          height="1000"
          width="1000"
          className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-xl group-hover/card:shadow-xl"
          alt="Shriya"
        />
        </CardItem>
        <div className="flex justify-between items-center mt-8 sm:mt-12 md:mt-16">
         
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Connect
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
