import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How much can I save with solar energy?",
      answer:
        "Most customers save between 30% and 80% on electricity bills depending on system size and energy usage.",
    },
    {
      question: "Is government subsidy available?",
      answer:
        "Yes, solar projects may qualify for applicable government subsidies and incentives.",
    },
    {
      question: "How much rooftop space is required?",
      answer:
        "Typically, around 100 sq. ft. is required for every 1 kW solar installation.",
    },
    {
      question: "How long do solar panels last?",
      answer:
        "Most solar panels have a lifespan of 25 years or more with proper maintenance.",
    },
    {
      question: "Do solar panels require maintenance?",
      answer:
        "Minimal maintenance is required. Regular cleaning and periodic inspections are generally sufficient.",
    },
    {
      question: "Can solar work during power outages?",
      answer:
        "With battery storage solutions, solar systems can provide backup power during outages.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl border border-slate-800"
            >
              <button
                className="w-full text-left p-5 flex justify-between items-center"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-semibold">
                  {faq.question}
                </span>

                <span className="text-green-400 text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}