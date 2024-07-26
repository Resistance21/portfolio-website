import { cn } from "../../lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto");

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  techStack,
  liveLinks,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  techStack?: React.ReactNode;
  liveLinks?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl hover:shadow-xl shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col ",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div>{header}</div>
        <div className="flex flex-col h-full">
          <div className="my-5 font-bold">{title}</div>
          <div className="mb-5">{techStack}</div>
          <div className="font-sans font-normal text-neutral-600 dark:text-neutral-300 mb-3">
            <p className="whitespace-pre-line">{description}</p>
          </div>
          <div className="mt-auto">{liveLinks}</div>
        </div>
      </div>
    </div>
  );
};

/* animation stuff 
group / bento;
group-hover/bento:translate-x-2 
group-hover/bento:translate-x-2 transition duration-200
*/
