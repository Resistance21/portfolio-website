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
    title: "University teaching staff scheduling system",
    techStack: (
      <div>
        <h2>Teach stack</h2>
        <div className="flex gap-2">
          {techLogos.firebase}
          {techLogos.react}
          {techLogos.scss}
        </div>
      </div>
    ),
    description: `Final year university project in which my team and I had to design a scheduling system for the university which would take over for the current scheduling system for teachers and classes. The old system was managed through excel sheets, the new system was an online portal that Admins, Managers and Teachers could log into to see their schedules as well as admins and manager have the abilities to add new users as well as assigning schedules and making class modifications as needed.
      Accounts:
      Manager: user - shane_tim@gmail.com pass - qwer123
      Lecturer: user - brendan_hales@test.com pass - qwer123
      (admin account has to much privileges)`,
    header: (
      <Skeleton
        imagePath="/images/uni-project-preview.jpg"
        imageHeight={1309}
        imageWidth={1309}
        customStyle={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        siteUrl="https://didasko-schedule-system.web.app/"
      />
    ),
    liveLinks: (
      <div className="flex justify-between">
        <a
          className="text-blue-500"
          href="https://didasko-schedule-system.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site Link
        </a>
        <a
          className="flex justify-center items-center"
          href="https://github.com/Resistance21/didasko_scheduling_system"
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
];
const UniProjectGrid = () => {
  return (
    <section className="flex mx-auto w-[70%] lg:w-[38%]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          techStack={item.techStack}
          liveLinks={item.liveLinks}
          className=""
        />
      ))}
    </section>
  );
};

export default UniProjectGrid;
