"use client";

import About from "@/components/About";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import SmallProjectGrid from "@/components/SmallProjectGrid";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/NavbarMenu";
import UniProjectGrid from "@/components/UniProjectGrid";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex justify-between items-center w-full">
          <div className="text-[12px]">brendan_hales@hotmail.com</div>
          <div>
            <HoveredLink className="mr-2" href="#Projects">
              Projects
            </HoveredLink>
            <HoveredLink href="#About">About</HoveredLink>
          </div>
          <a
            className="flex justify-center items-center"
            href="https://github.com/Resistance21"
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
            <span className="text-[12px]">Github Reop</span>
          </a>
        </div>
      </Menu>
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState<string | null>(null);
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: undefined,
    },
  ];
  return (
    <main className=" bg-black-100 flex justify-center items-center flex-col mx-auto sm:p-10 p-5">
      <Navbar />
      <div className="w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.01] bg-grid-small-black/[0.2]">
        <Hero />
        <div className=" flex flex-col justify-center items-center mb-8">
          <h2 className="font-bold font-sans text-6xl mb-10" id="Projects">
            Projects
          </h2>
          <h2 className="font-bold font-sans text-4xl mb-10">
            University Project
          </h2>
          <UniProjectGrid />
        </div>
        <div className=" flex flex-col justify-center items-center mb-8">
          <h2 className="font-bold font-sans text-4xl mb-10">
            Web Applications
          </h2>
          <Grid />
        </div>
        <div className=" flex flex-col justify-center items-center mb-14">
          <h2 className="font-bold font-sans text-4xl mb-10">Small Pages</h2>
          <SmallProjectGrid />
        </div>
        <div>
          <div className=" flex flex-col justify-center items-center w-[70%] mx-auto">
            <h2 className="font-bold font-sans text-6xl mb-10" id="About">
              About
            </h2>
            <About />
          </div>
        </div>
      </div>
    </main>
  );
}
