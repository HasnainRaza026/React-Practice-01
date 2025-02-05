import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export function Accordion() {
  const [accordionNum, setAccordionNum] = useState(null);

  // Fixed: Use proper key and numbering
  return (
    <div className="accordion">
      {faqs.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          num={index + 1}
          isOpen={accordionNum === index + 1}
          onToggle={() =>
            setAccordionNum(accordionNum === index + 1 ? null : index + 1)
          }
        />
      ))}
    </div>
  );
}

function AccordionItem({ item, num, isOpen, onToggle }) {
  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      <p className="number">{num}</p>
      <p className="text">{item.title}</p>
      <p className="icon" onClick={onToggle}>
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && <div className="content-box">{item.text}</div>}
    </div>
  );
}
