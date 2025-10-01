"use client";

import React from 'react';
import { clsx } from 'clsx';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQProps {
  faqs: FAQItem[];
  className?: string;
}

export function FAQ({ faqs, className }: FAQProps) {
  const [openId, setOpenId] = React.useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={clsx('py-16 px-4', className)}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-display mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <span className="text-2xl text-gray-400">
                  {openId === faq.id ? '−' : '+'}
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
