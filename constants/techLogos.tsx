import Image from "next/image";
export const techLogos = {
  react: (
    <Image src={"/react-logo.svg"} width={30} height={30} alt="react logo" />
  ),
  appWrite: (
    <Image
      src={"/appwrite-logo.svg"}
      width={30}
      height={30}
      alt="Appwrite logo"
    />
  ),
  tailwind: (
    <Image
      src={"/tailwind_css_logo.svg"}
      width={30}
      height={30}
      alt="tailwind logo"
    />
  ),
  firebase: (
    <Image
      src={"/firebase_logo.svg"}
      width={30}
      height={30}
      alt="google firebase logo"
    />
  ),
  scss: <Image src={"/sass-logo.svg"} width={30} height={30} alt="Sass logo" />,
  stripe: (
    <Image src={"/stripe-logo.svg"} width={40} height={40} alt="stripe logo" />
  ),
  dwolla: (
    <Image src={"/dwolla-logo.svg"} width={30} height={30} alt="dwolla logo" />
  ),
  next: (
    <Image
      src={"/nextjs-logo.svg"}
      width={30}
      height={30}
      alt="nextjs logo"
      className="invert"
    />
  ),
  vercel: (
    <Image
      src={"/vercel-logo.svg"}
      width={60}
      height={60}
      alt="vercel logo"
      className="invert"
    />
  ),
  netlify: (
    <Image
      src={"/netlify_logo.svg"}
      width={30}
      height={30}
      alt="netlify logo"
    />
  ),
  gitHubWhite: (
    <Image
      src={"/github-mark-white.svg"}
      width={30}
      height={30}
      alt="github logo"
    />
  ),
  html5: (
    <Image src={"/html5-logo.svg"} width={30} height={30} alt="html5 logo" />
  ),
  css3: <Image src={"/css3-logo.svg"} width={30} height={30} alt="css3 logo" />,
  javaScript: (
    <Image
      src={"/javascript-logo.svg"}
      width={30}
      height={30}
      alt="java script logo"
    />
  ),
};
