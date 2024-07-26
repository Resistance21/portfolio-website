"use client";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/NavbarMenu";
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
        <HoveredLink href="/web-dev">Projects</HoveredLink>
        <HoveredLink href="/web-dev">Projects</HoveredLink>
        <HoveredLink href="/web-dev">Projects</HoveredLink>
        <HoveredLink href="/web-dev">Projects</HoveredLink>
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
      </div>
      <Grid />
    </main>
  );
}
