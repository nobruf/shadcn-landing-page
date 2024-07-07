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
    question: "Do you store my transactions data?",
    answer: "No. We do not store any transaction data of any sort in our systems.",
    value: "item-1",
  },
  {
    question: "How do you access my financial transactions?",
    answer:
      "We use Mono, to securely retrieve your transactions. We get read only access and cannot perform any other action on your account",
    value: "item-2",
  },
  {
    question:
      "Is this free?",
    answer:
      "Yep",
    value: "item-3",
  },
  {
    question: "How many accounts can i add?",
    answer: "Up to 5 accounts",
    value: "item-4",
  },
  {
    question:
      "What does TewoTewo mean?",
    answer: "A Yoruba word for someone who sends other people a lot of money. So the charts tell you how much of a tewo tewo you were on a certain day",
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
