import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile Friendly",
    description:
      "Enjoy a consistent experience on both tablet and smartphone. Our app is fully optimized for mobile and tablet use, ensuring you can manage your investments anytime, anywhere.",
  },
  {
    icon: "BadgeCheck",
    title: "Verified & Trusted Investments",
    description:
      "All investment options are verified for security and reliability. We partner with trusted institutions and thoroughly vet opportunities to give you peace of mind.",
  },
  {
    icon: "Goal",
    title: "Targeted Content",
    description:
      "Set your investment goals, track progress, and align your strategy to meet your financial milestones. Our goal-based approach helps you stay focused and motivated.",
  },
  {
    icon: "PictureInPicture",
    title: "Interactive Investment Videos",
    description:
      "Watch educational videos while you explore the app. The picture-in-picture feature lets you learn on-the-go without interrupting your investment research.",
  },
  {
    icon: "MousePointerClick",
    title: "Effortless Investment Navigation",
    description:
      "Navigate the app with ease. Our intuitive design and smooth interactions make finding and managing investments simple and efficient.",
  },
  {
    icon: "Newspaper",
    title: "Up-to-Date Investment News",
    description:
      "Stay informed with real-time news and updates on the latest investment trends, market shifts, and financial insights—all within the app.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Our app stands out by providing a unique combination of personalized investment guidance, real-time tracking, and educational resources—all in one place. Unlike other platforms, we focus on simplifying complex investment concepts through videos and interactive features, allowing users to make informed decisions with confidence. With access to exclusive opportunities, secure transactions, and community-driven support, we empower users to invest smarter and more effectively.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
