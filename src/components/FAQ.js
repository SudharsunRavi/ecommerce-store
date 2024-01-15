import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 ">
      <div
        className="flex justify-between items-center cursor-pointer p-4"
        onClick={toggleOpen}
      >
        <div className="font-semibold text-2xl">{question}</div>
        <div className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}>
          &#9660;
        </div>
      </div>
      {isOpen && (
        <div className="px-4 pb-6 pt-0">
          <p className='text-lg'>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
        "question": "What size should I order for Nike shoes?",
        "answer": "Nike recommends referring to their size chart to find the most accurate fit for your feet. Keep in mind that sizing may vary between different shoe models."
    },
      
    {
        "question": "How do I clean and care for my Nike shoes?",
        "answer": "Nike provides specific care instructions for each shoe model. Generally, it is recommended to clean shoes with a soft brush, mild soap, and water. Avoid using harsh cleaning agents or machine washing, as it may damage the materials."
    },      
    {
        "question": "Can I return or exchange my Nike shoes?",
        "answer": "Yes, Nike has a return and exchange policy. You can return unworn and unwashed items within a specified period, typically 30 days after the purchase date. Be sure to check the terms and conditions on the Nike website for more details."
    }
    ,
    {
        "question": "Do Nike shoes come with a warranty?",
        "answer": "Nike offers a limited warranty on their products. This warranty covers manufacturing defects and workmanship issues. However, it does not cover normal wear and tear or damage caused by improper use. Check the warranty information provided with your shoes for details."
    }
    ,
    {
        "question": "How can I track my Nike shoe order?",
        "answer": "Once your order is shipped, Nike will provide a tracking number. You can use this number to track the delivery status of your package. Additionally, you can log in to your Nike account to view the order status and tracking information."
    },
  ];

  return (
    <div className='px-16 pt-14 pb-44 bg-neutral-800 text-neutral-300'>
      <h2 className="text-4xl font-bold pb-10">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
