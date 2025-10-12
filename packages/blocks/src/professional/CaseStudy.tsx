import React from 'react';
import { Badge } from '@weblynk/ui';
import { clsx } from 'clsx';

export interface CaseStudyProps {
  title: string;
  client: string;
  category: string;
  challenge: string;
  solution: string;
  results: string[];
  images?: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  className?: string;
}

export function CaseStudy({
  title,
  client,
  category,
  challenge,
  solution,
  results,
  images,
  testimonial,
  className,
}: CaseStudyProps) {
  return (
    <article className={clsx('py-16 px-4', className)}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Badge variant="default" className="mb-4">
            {category}
          </Badge>
          <h1 className="text-4xl font-display mb-2">{title}</h1>
          <p className="text-xl text-gray-600">Client: {client}</p>
        </div>

        {/* Images */}
        {images && images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="rounded-lg w-full h-64 object-cover"
              />
            ))}
          </div>
        )}

        {/* Content Sections */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-display mb-3">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed">{challenge}</p>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">Our Solution</h2>
            <p className="text-gray-700 leading-relaxed">{solution}</p>
          </section>

          <section>
            <h2 className="text-2xl font-display mb-3">Results</h2>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700">{result}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Testimonial */}
          {testimonial && (
            <section className="bg-gray-50 rounded-lg p-8 mt-12">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "{testimonial.text}"
              </blockquote>
              <cite className="not-italic">
                <div className="font-medium text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </cite>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}
