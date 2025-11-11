 "use client";

import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';

import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    const marqueeItems = [...testimonials, ...testimonials];

    return (
        <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />

            <div className="overflow-hidden py-10">
                <div className="marquee flex gap-6 pr-6">
                    {marqueeItems.map((testimonial, index) => (
                        <article
                            key={`${testimonial.name}-${index}`}
                            className="group relative flex min-w-[260px] max-w-[340px] flex-col gap-3 rounded-2xl border border-foreground/10 bg-foreground/5 p-6 shadow-md backdrop-blur-sm transition duration-300 hover:border-secondary/40 hover:shadow-lg"
                            aria-hidden={index >= testimonials.length ? true : undefined}
                        >
                            <div className="flex items-center gap-4">
                                {testimonial.avatar ? (
                                    <Image
                                        src={testimonial.avatar}
                                        alt={`${testimonial.name} avatar`}
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 rounded-full object-cover shadow-md"
                                    />
                                ) : (
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white font-semibold uppercase shadow-lg ring-2 ring-secondary/40">
                                        {getInitials(testimonial.name)}
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-base font-semibold text-foreground">{testimonial.name}</h3>
                                    <p className="text-sm text-foreground-accent">{testimonial.role}</p>
                                    <div className="mt-1 flex items-center gap-1 text-yellow-400">
                                        {Array.from({ length: testimonial.rating ?? 5 }).map((_, starIndex) => (
                                            <FaStar key={starIndex} className="h-3.5 w-3.5 drop-shadow-[0_0_2px_rgba(0,0,0,0.2)]" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-foreground-accent lg:text-base">
                                “{testimonial.message}”
                            </p>
                        </article>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .marquee {
                    width: max-content;
                    animation: marquee 45s linear infinite;
                }

                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @media (max-width: 640px) {
                    .marquee {
                        animation-duration: 55s;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .marquee {
                        animation: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default Testimonials;

function getInitials(name: string): string {
    return name
        .split(' ')
        .filter(Boolean)
        .map(part => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
}
