import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Data-Driven Insights",
    description:
      "Gain valuable insights with powerful analytics that help you make informed investment decisions. Our platform offers easy-to-understand charts and data to guide you every step of the way.",
  },
  {
    icon: "LineChart",
    title: "Track Investment Performance",
    description:
      "Monitor the growth and performance of your investments in real-time with visual reports. Stay on top of trends with our dynamic line charts that reflect the health of your portfolio.",
  },
  {
    icon: "Wallet",
    title: "Secure and Easy Transactions",
    description:
      "Store and manage your investments securely within our platform’s digital wallet. Enjoy seamless transactions with top-tier security, ensuring your financial data stays protected.",
  },
  {
    icon: "Sparkle",
    title: "Exclusive Investment Opportunities ",
    description:
      "Unlock access to premium investment opportunities that help your wealth grow. With curated, high-potential options, your investments are set for maximum returns.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Maximize Your Investment Potential with Our Features
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
          Unlock Exclusive Features and Tools to Maximize Your Investment Potentia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
