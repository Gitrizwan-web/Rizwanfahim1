import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

import Title from "../Components/Heromodels/Title";
import { expCards } from "../constants";
import Glowcard from "../Components/Heromodels/Glowcard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const cards = Array.isArray(expCards) ? expCards : [];

  useGSAP(() => {
    // Animate cards coming from left with fade
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    // Timeline height animation
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Text animation
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: -20,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-0">
        <Title
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-16 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {cards.length > 0 ? (
              cards.map((card) => (
                <div key={card.id} className="exp-card-wrapper">
                  {/* Left Side - Card */}
                  <div className="xl:w-2/6 w-full timeline-card">
                    <Glowcard card={card}>
                      {/* Image */}
                      {card.imgPath && (
                        <div className="mb-4 overflow-hidden rounded-lg">
                          <img
                            src={card.imgPath}
                            alt={card.title || "Experience card"}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      )}

                      {/* Title */}
                      {card.title && (
                        <h2 className="mt-4 text-xl font-semibold text-white">
                          {card.title}
                        </h2>
                      )}

                      {/* Date */}
                      {card.date && (
                        <p className="text-sm text-white/60 mt-2">
                          🗓️ {card.date}
                        </p>
                      )}
                    </Glowcard>
                  </div>

                  {/* Right Side - Content with Timeline */}
                  <div className="xl:w-4/6 w-full">
                    <div className="flex items-start">
                      {/* Timeline */}
                      <div className="timeline-wrapper hidden xl:block">
                        <div className="timeline" />
                        <div className="gradient-line w-1 h-full" />
                      </div>

                      {/* Text Content */}
                      <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20 w-full">
                        {/* Logo */}
                        {card.logoPath && (
                          <div className="timeline-logo hidden md:block">
                            <img
                              src={card.logoPath}
                              alt={card.title}
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                        )}

                        {/* Details */}
                        <div className="flex-1">
                          <h3 className="font-semibold text-2xl md:text-3xl text-white">
                            {card.title}
                          </h3>

                          <p className="my-4 text-white/70 text-sm md:text-base flex items-center gap-2">
                            🗓️ {card.date}
                          </p>

                          {/* Responsibilities */}
                          {card.responsibilities && card.responsibilities.length > 0 && (
                            <>
                              <p className="text-[#839CB5] italic font-medium mb-4">
                                Responsibilities
                              </p>
                              <ul className="list-disc ms-5 flex flex-col gap-3">
                                {card.responsibilities.map((responsibility, index) => (
                                  <li
                                    key={index}
                                    className="text-white/70 text-sm md:text-base leading-relaxed"
                                  >
                                    {responsibility}
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}

                          {/* Description */}
                          {card.description && (
                            <p className="text-white/60 text-sm md:text-base mt-5 leading-relaxed">
                              {card.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-white/60 py-12">
                <p>No experience data available</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Timeline Styles */}
      <style>{`
        .timeline-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          margin-right: 2rem;
        }

        .timeline {
          position: absolute;
          left: 50%;
          top: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(168, 85, 247, 0.8),
            rgba(59, 130, 246, 0.4)
          );
          transform-origin: top;
        }

        .gradient-line {
          background: linear-gradient(
            to bottom,
            rgba(168, 85, 247, 0.5),
            rgba(59, 130, 246, 0.2)
          );
        }

        .timeline-logo {
          min-width: 60px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2));
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(168, 85, 247, 0.5);
          flex-shrink: 0;
        }

        .timeline-logo img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }

        .exp-card-wrapper {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        @media (max-width: 1024px) {
          .exp-card-wrapper {
            flex-direction: column;
            gap: 1.5rem;
          }

          .expText {
            margin-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;