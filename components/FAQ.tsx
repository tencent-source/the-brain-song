import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from './Button';
import CountdownTimer from './CountdownTimer';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-700 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        {isOpen ? <ChevronUp className="text-indigo-400" /> : <ChevronDown className="text-slate-500" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-300 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="bg-slate-900 rounded-2xl p-6 md:p-10 shadow-xl border border-slate-700 mb-12">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
        <div className="text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Life?</h3>
            <CountdownTimer size="md" className="mb-6" />
            <Button text="Get The Brain Song Now" variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;