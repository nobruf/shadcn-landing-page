"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { preinitModule } from "react-dom";

interface DescriptionProps {
  id: string;
  image: string;
  tag?: string;
  title: string;
  description: string;
}

const descriptionList: DescriptionProps[] = [
  {
    id: "1",
    image: "/grimo/1.png",
    title: "1 Build Brand Trust",
    tag: "hello",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
  {
    id: "2",
    image: "/grimo/2.png",
    title: "2 More Leads",
    // tag: "hello",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur.",
  },
  {
    id: "3",
    image: "/grimo/3.png",
    title: "3 Higher Conversions",
    tag: "hello",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur. A odio velit cum aliquam",
  },
  {
    id: "4",
    image: "/grimo/4.png",
    title: "4 Test Marketing Ideas",
    tag: "hello",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
];

export const Descriptions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const descriptionRefs = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const targetNode = descriptionRefs.current;

    const handleScroll = () => {
      if (!targetNode) return;

      const children = targetNode.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const rect = child.getBoundingClientRect();
        // console.log(rect.bottom);

        // Check if element is in viewport
        if (Math.abs(rect.top) <= window.innerHeight / 2) {
          setActiveIndex(i);
          break;
        }
      }
      // console.log("------");
      // console.log(window.innerHeight);
      // console.log("---");
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="Descriptions" className="container py-24 sm:py-8">

      {/* <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4">
        Simple Pricing, No Add-ons
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Cancel Anytime
      </h3> */}

      <div className="flex flex-col md:flex-row  gap-8">
        <div ref={descriptionRefs} className="md:w-2/5 flex flex-col gap-8">
          {descriptionList.map(({ id,image, tag, title, description }, index) => (
            <div
              key={title}
              className={`md:h-[90vh]  flex flex-col items-center mb-8 md:mb-0 md:gap-0 md:flex-row   ${
                index === descriptionList.length - 1 && "md:h-[100vh]"
              }`}
            >
              <Card className="flex flex-col text-center md:text-left items-center md:items-start md:w-96 gap-2">
                {tag && <Badge className="w-fit">{tag}</Badge>}
                <CardTitle className="">{title}</CardTitle>
                <CardContent className="text-muted-foreground px-0">
                  {description}
                </CardContent>
              </Card>

              <div className="relative md:hidden w-full h-[300px]">
                <Image
                  fill
                  key={id}
                  className="object-contain mx-auto leading-none flex items-center"
                  // onLoad={(image) =>
                  //   image.currentTarget.classList.remove("opacity-25")
                  // }
                  src={image}
                  alt={title}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 图片容器 */}
        <div className="hidden md:flex w-1/2 h-screen flex-1 justify-center sticky top-0 items-center">
          <div className="w-full h-[500px] relative">
            <Image
              fill
              key={descriptionList[activeIndex]["id"]}
              className="ransition-opacity opacity-25 duration-300 ease-in-out object-contain mx-auto  leading-none flex items-center"
              onLoad={(image) =>
                image.currentTarget.classList.remove("opacity-25")
              }
              src={descriptionList[activeIndex]["image"]}
              alt={descriptionList[activeIndex]["title"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
