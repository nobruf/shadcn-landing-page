import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Personalized Investment Guidance",
    description:
      "Receive expert recommendations based on your risk profile and financial goals to help you make smarter investment choices.",
    pro: 0,
  },
  {
    title: "Market Insights & Analytics",
    description:
      "Stay updated with in-depth market trends, performance charts, and data-driven insights to guide your investment decisions.",
    pro: 0,
  },
  {
    title: "Interactive Learning & Resources",
    description: "Access a variety of educational materials, including videos, articles, and webinars, to enhance your knowledge of investment strategies.",
    pro: 0,
  },
  {
    title: "Investment Portfolio Tracking",
    description: "Effortlessly track and manage your investments with real-time portfolio updates and performance metrics to optimize your growth.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
      Comprehensive Investment Services
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Explore a range of tailored services designed to help you make informed investment decisions, manage your portfolio effectively, and stay ahead in the market.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
