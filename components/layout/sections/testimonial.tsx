"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Ted Schaefer",
    userName: "Product Manager",
    comment:
      "l love the idea; trees are very natural to me so it seems like a great way to organize knowledge - and the Al integration is very cool. upvote for that! Good luck with your launch -#1!!! Also, Paprika is indeed a fantastic anime.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Jamie L.",
    userName: "Cybersecurity Analyst",
    comment:
      "Grimo Al introduces a novel solution to make valuable knowledge widely accessible, featuring a node-based interface, community-driven content, and Al moderation. lt organizes diverse content, including videos and posts, into a streamlined notebook for efficient learning. The platform encourages content creation and sharing, promising future revenue sharing and open-source development.",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Iris",
    userName: "Chief Technology Officer",
    comment:
      "Grimo Al has completely transformed the way l learn and create. As someone who thrives on diving deep into new knowledge, l've found its simplicity, efficiency, and text-only, insight-focused approach incredibly refreshing. lt's not just another knowledge base; it's a powerhouse for those of us who are constantly curious and looking to innovate. With Grimo Al, l'm taking fewer notes but gaining so much more in terms of insights and understanding. lt's exactly what us 'crazy learners and creators' need!",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Pan Pan",
    userName: "Data Scientist",
    comment:
      "Congrats on the launch of Grimo Al! l'm really excited about your node-based structure. lt seems like such a smart way to help us all manage and connect information more effectively.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Chloe Yang",
    userName: "IT Project Manager",
    comment: "You guys know crazy learners and creators!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Isabella Reed",
    userName: "DevOps Engineer",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {/* <div className="grid grid-cols-1 gap-4"> */}
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    {/* <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar> */}

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
          {/* </div> */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
