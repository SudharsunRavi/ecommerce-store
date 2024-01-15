import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <div
        className="flex justify-between items-center cursor-pointer p-4"
        onClick={toggleOpen}
      >
        <div className="font-semibold">{question}</div>
        <div className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}>
          &#9660;
        </div>
      </div>
      {isOpen && (
        <div className="p-4">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
      question: 'What is Tailwind CSS?',
      answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
    },
    {
      question: 'How do I install Tailwind CSS in a React project?',
      answer: 'You can install Tailwind CSS using npm or yarn and then configure your styles in the tailwind.config.js file.',
    },
    {
        question: 'How do I install Tailwind CSS in a React project?',
        answer: 'You can install Tailwind CSS using npm or yarn and then configure your styles in the tailwind.config.js file.',
    },
    {
        question: 'How do I install Tailwind CSS in a React project?',
        answer: 'You can install Tailwind CSS using npm or yarn and then configure your styles in the tailwind.config.js file.',
    },
    {
        question: 'How do I install Tailwind CSS in a React project?',
        answer: 'You can install Tailwind CSS using npm or yarn and then configure your styles in the tailwind.config.js file.',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
