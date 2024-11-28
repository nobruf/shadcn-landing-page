import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What types of investments can I learn about on this app?",
    answer: "Our app offers a wide range of investment options, including stocks, bonds, mutual funds, real estate, and more. Explore various opportunities to diversify and grow your savings.",
    value: "item-1",
  },
  {
    question: "How do I view investment videos?",
    answer:
      "Simply navigate to the 'Videos' section of the app where you can find expert-led tutorials and insightful content about different investment strategies. Watch anytime, anywhere!",
    value: "item-2",
  },
  {
    question:
      "Can I ask questions about specific investment opportunities?",
    answer:
      "Yes! You can share your doubts and questions in the 'Q&A' section. Our community of experts and investors will help provide answers and guidance.",
    value: "item-3",
  },
  {
    question: "What’s the difference between the Free, Premium, and Enterprise plans?",
    answer: "The Free plan gives you basic access to educational content. The Premium plan includes exclusive videos and advanced features like personalized recommendations. The Enterprise plan is designed for teams and businesses, offering comprehensive analytics and expert support.",
    value: "item-4",
  },
  {
    question:
      "Is my personal information secure on this app?",
    answer: "Absolutely! We prioritize your privacy and security by using advanced encryption and secure authentication methods. Your data is protected at all times.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
