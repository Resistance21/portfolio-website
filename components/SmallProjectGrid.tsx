import React, { CSSProperties } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Image from "next/image";
import { addScaleCorrector } from "framer-motion";
import { techLogos } from "@/constants/techLogos";

{
  /* <Image src="/images/banking-app-preview.png" alt="banking app" fill /> */
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>;
}
const Skeleton = ({
  imagePath,
  imageHeight,
  imageWidth,
  customStyle,
  siteUrl,
  altImageText,
}: {
  imagePath: string;
  imageWidth: number;
  imageHeight: number;
  customStyle?: CSSProperties;
  siteUrl: string;
  altImageText: string;
}) => (
  <div className="flex overflow-hidden w-full">
    <a href={siteUrl} target="_blank" rel="noopener noreferrer">
      <Image
        src={imagePath}
        alt={altImageText}
        width={imageWidth}
        height={imageHeight}
        style={customStyle}
        className="hover:scale-[1] scale-[1.3]  duration-500 overflow-hidden"
      />
    </a>
  </div>
);

const items = [
  {
    title: "Outdoor Vacation landing page",
    techStack: (
      <div>
        <h2>Teach stack</h2>
        <div className="flex gap-2">
          {techLogos.html5}
          {techLogos.javaScript}
          {techLogos.css3}
          {techLogos.netlify}
        </div>
      </div>
    ),
    description: "Small Landing page for a outdoors vacation location",
    header: (
      <Skeleton
        imagePath="/images/outdoor-vacation-preview.jpg"
        imageHeight={1309}
        imageWidth={1309}
        customStyle={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        siteUrl="https://natours-rec.netlify.app/"
        altImageText="Outdoor Vacation landing page"
      />
    ),
    liveLinks: (
      <div className="flex justify-between">
        <a
          className="text-blue-500"
          href="https://natours-rec.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site Link
        </a>
        <a
          className="flex justify-center items-center"
          href="https://github.com/Resistance21/outdoor-vacation-site"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="mr-3"
            src="/github-mark-white.svg"
            alt="git hub logo"
            height={30}
            width={30}
          />{" "}
          Github Reop
        </a>
      </div>
    ),
  },
  {
    title: "Healthy Food delivery service landing page",
    techStack: (
      <div>
        <h2>Teach stack</h2>
        <div className="flex gap-2">
          {techLogos.html5}
          {techLogos.css3}
          {techLogos.javaScript}
          {techLogos.netlify}
        </div>
      </div>
    ),
    description:
      "Landing page a  healthy food delivery service that users can sign up for.",
    header: (
      <Skeleton
        imagePath="/images/omni-food-preview.jpg"
        imageHeight={1309}
        imageWidth={1309}
        customStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
        siteUrl="https://quiet-gumption-ddba59.netlify.app/"
        altImageText="OmniFood landing page"
      />
    ),
    liveLinks: (
      <div className="flex justify-between">
        <a
          className="text-blue-500"
          href="https://quiet-gumption-ddba59.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site Link
        </a>
        <a
          className="flex justify-center items-center"
          href="https://github.com/Resistance21/omnifood-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="mr-3"
            src="/github-mark-white.svg"
            alt="git hub logo"
            height={30}
            width={30}
          />{" "}
          Github Reop
        </a>
      </div>
    ),
  },
  {
    title: "Real Estate website landing page",
    techStack: (
      <div>
        <h2>Teach stack</h2>
        <div className="flex gap-2">
          {techLogos.html5}
          {techLogos.css3}
          {techLogos.javaScript}
          {techLogos.netlify}
        </div>
      </div>
    ),
    description:
      "A landing page for a real estate website where users can view properties that are available for purchase.",
    header: (
      <Skeleton
        imagePath="/images/house-selling-preview.jpg"
        imageHeight={1309}
        imageWidth={1309}
        customStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
        siteUrl="https://nexter-bh.netlify.app/"
        altImageText="Nexter landing page"
      />
    ),
    liveLinks: (
      <div className="flex justify-between">
        <a
          className="text-blue-500"
          href="https://nexter-bh.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site Link
        </a>
        <a
          className="flex justify-center items-center"
          href="https://github.com/Resistance21/real-estate-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="mr-3"
            src="/github-mark-white.svg"
            alt="git hub logo"
            height={30}
            width={30}
          />
          Github Reop
        </a>
      </div>
    ),
  },
];

const SmallProjectGrid = () => {
  return (
    <section>
      <BentoGrid className="max-w-[70%] mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            techStack={item.techStack}
            liveLinks={item.liveLinks}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default SmallProjectGrid;
