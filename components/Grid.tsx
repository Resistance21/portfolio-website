import React, { CSSProperties } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Image from "next/image";
import { addScaleCorrector } from "framer-motion";

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
  <div className="flex overflow-hidden w-full ">
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

const techLogos = {
  react: (
    <Image
      src={"/images/react-logo.svg"}
      width={30}
      height={30}
      alt="react logo"
    />
  ),
  appWrite: (
    <Image
      src={"/images/appwrite-logo.svg"}
      width={30}
      height={30}
      alt="Appwrite logo"
    />
  ),
  tailwind: (
    <Image
      src={"/images/tailwind_css_logo.svg"}
      width={30}
      height={30}
      alt="tailwind logo"
    />
  ),
  firebase: (
    <Image
      src={"/images/firebase_logo.svg"}
      width={30}
      height={30}
      alt="google firebase logo"
    />
  ),
  scss: (
    <Image
      src={"/images/sass-logo.svg"}
      width={30}
      height={30}
      alt="Sass logo"
    />
  ),
  stripe: (
    <Image
      src={"/images/stripe-logo.svg"}
      width={40}
      height={40}
      alt="stripe logo"
    />
  ),
  dwolla: (
    <Image
      src={"/images/dwolla-logo.svg"}
      width={30}
      height={30}
      alt="dwolla logo"
    />
  ),
  next: (
    <Image
      src={"/images/nextjs-logo.svg"}
      width={30}
      height={30}
      alt="nextjs logo"
      className="invert"
    />
  ),
  vercel: (
    <Image
      src={"/images/vercel-logo.svg"}
      width={60}
      height={60}
      alt="vercel logo"
      className="invert"
    />
  ),
  netlify: (
    <Image
      src={"/images/netlify_logo.svg"}
      width={30}
      height={30}
      alt="netlify logo"
    />
  ),
};

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
    description:
      "Banking application that allows users to add their banks to a central platform to view there balances, transactions as well as performing transactions between there accounts or other with the use of searable transfer id for each bank account \n\n\n\nasdasd",
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
      "A Digital clothing store where users can sign in to the website with either a gamil or personal email/password account, they can add items to a cart and then move to the checkout when ready to finalise their perchase through the use of stripe",
    header: (
      <Skeleton
        imagePath="/images/crown-clothing-preview.jpg"
        imageHeight={1309}
        imageWidth={1309}
        customStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
        siteUrl="https://crown-clothing-tscript.netlify.app/"
      />
    ),
  },
  /* {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
  }, */
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
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
