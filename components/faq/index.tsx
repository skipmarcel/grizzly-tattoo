import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const FAQ = ({ faqs }: { faqs: FAQ[] }) => {
  return (
    <Accordion
      type="single"
      defaultValue="item-0"
      className="accordian space-y-3 "
    >
      {faqs?.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-b border-dashed border-black accordion-item !m-0"
        >
          <AccordionTrigger className=" text-black group hover:no-underline">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex h-full items-center gap-2 flex-1 pr-5 text-base lg:text-xl font-normal text-left font-anton text-black">
                {item.question}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className=" text-gray-300">
            <p
              dangerouslySetInnerHTML={{ __html: item.answer }}
              className="faq-answer text-sm lg:prose-base p-4 pt-0 text-gray-text2"
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
