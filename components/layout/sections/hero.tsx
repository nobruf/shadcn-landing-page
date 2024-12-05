"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full m-auto mt-8">
      <div className="flex flex-col md:flex-row items-center lg:p-8 gap-12 mx-auto">
        <div className="text-center md:text-left md:min-w-[32rem] space-y-8">
          {/* <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Design is out now! </span>
          </Badge> */}

          <div className="max-w-screen-lg mx-auto md:text-left text-4xl md:text-6xl font-semibold">
            <h1>
              {/* <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Reimagine
              </span> */}
              Reimagine Word Processor
            </h1>
          </div>

          <p className="max-w-screen-sm text-xl text-muted-foreground">
            {`Your All-in-one Writing Interface for Better Writing.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link
                aria-label="Start Writing"
                href="http://go.grimo.ai"
                target="_blank"
              >
                Start Writing
              </Link>
              {/* <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" /> */}
            </Button>

            {/* <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Github respository
              </Link>
            </Button> */}
          </div>
        </div>

        <div className="relative group md:mt-14">
          {/* <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/35 rounded-full blur-3xl"></div> */}
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center  border-secondary  border-t-primary/30"
            src={
              theme === "light" ? "/grimo/comment.png" : "/grimo/comment.png"
            }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
