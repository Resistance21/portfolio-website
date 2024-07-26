import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
import ShimmerButton from "./ui/ShimmerButton";

const Hero = () => {
  const animatedWords = `Web Devolopment Portfolio for`;
  const nameText = "Brendan Hales";
  return (
    <div>
      <div className="h-[80vh] w-full  flex items-center justify-center ">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-lg text-center max-w-80% mb-10">
              <TextGenerateEffect
                words={animatedWords}
                duration={2}
                className="text-4xl text-white dark:text-white"
              />
              <TextGenerateEffect
                className="dark:text-blue-600 text-4xl"
                words={nameText}
                duration={2}
              />
            </h2>
            <ShimmerButton buttonText="View My Propjects" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
