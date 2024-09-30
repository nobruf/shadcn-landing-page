import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";

import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";

import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Grimo - Reimagine Word Processor",
  description: "Your All-in-one Writing Interface for Better Writing",
  openGraph: {
    type: "website",
    url: "https://www.grimo.ai/",
    title: "Grimo - Reimagine Word Processor",
    description: "Your All-in-one Writing Interface for Better Writing",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Grimo - Reimagine Word Processor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.grimo.ai/",
    title: "Grimo - Reimagine Word Processor",
    description: "Your All-in-one Writing Interface for Better Writing",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      {/* <BenefitsSection /> */}
      <FeaturesSection />
      {/* <ServicesSection /> */}
      {/* <TestimonialSection /> */}
      {/* <TeamSection /> */}
      {/* <CommunitySection /> */}
      <PricingSection />
      {/* <ContactSection /> */}
      {/* <FAQSection /> */}
    </>
  );
}
