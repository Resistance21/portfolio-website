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
}: {
  imagePath: string;
  imageWidth: number;
  imageHeight: number;
  customStyle?: CSSProperties;
  siteUrl: string;
}) => (
  <div className="flex overflow-hidden w-full">
    <a href={siteUrl} target="_blank" rel="noopener noreferrer">
      <Image
        src={imagePath}
        alt="banking app"
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
    title: "Bankiong Application",
    techStack: (
      <div>
        <h2>Teach stack</h2>
        <div className="flex gap-2">
          {techLogos.appWrite}
          {techLogos.react}
          {techLogos.tailwind}
          {techLogos.dwolla}
          {techLogos.next}
          {techLogos.vercel}
        </div>
      </div>
    ),
    description: `Banking application that allows users to add their banks to a central platform to view their balances, transactions as well as performing transactions between there accounts or other with the use of searable transfer id for each bank account.
    
    if you want to use an account use the following information:
    username: account1@email.com
    password: qazxswed`,
    header: (
      <Skeleton
        imagePath="/images/banking-app-preview.jpg"
        imageHeight={1309}
        imageWidth={1309}
        customStyle={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        siteUrl="https://banking-app-ten-sigma.vercel.app/"
      />
    ),
    liveLinks: (
      <div className="flex justify-between">
        <a
          className="text-blue-500"
          href="https://banking-app-ten-sigma.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site Link
        </a>
        <a
          className="flex justify-center items-center"
          href="https://github.com/Resistance21/banking-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="mr-3"
            src="/images/github-mark-white.svg"
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
    title: "Digital Clothing Store",
    techStack: (
      <div>
        <h2>Teach stack</h2>
        <div className="flex gap-2">
          {techLogos.react}
          {techLogos.firebase}
          {techLogos.scss}
          {techLogos.stripe}
          {techLogos.netlify}
        </div>
      </div>
    ),
    description:
      "A Digital clothing store where users can sign in to the website with either a gmail or personal email/password account, they can add items to a cart and then move to the checkout when ready to finalise their purchase through the use of stripe",
    header: (
      <Skeleton
        imagePath="/images/crown-clothing-preview.jpg"
        imageHeight={1309}
        imageWidth={1309}
        customStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
        siteUrl="https://crown-clothing-tscript.netlify.app/"
      />
    ),
    liveLinks: (
      <div className="flex justify-between">
        <a
          className="text-blue-500"
          href="https://crown-clothing-tscript.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site Link
        </a>
        <a
          className="flex justify-center items-center"
          href="https://github.com/Resistance21/crown-clothing-TS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="mr-3"
            src="/images/github-mark-white.svg"
            alt="git hub logo"
            height={30}
            width={30}
          />{" "}
          Github Reop
        </a>
      </div>
    ),
  },
];

const Grid = () => {
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

export default Grid;
