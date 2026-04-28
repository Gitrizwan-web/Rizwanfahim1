import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

import Title from "../Components/Heromodels/Title";
import { expCards } from "../constants";
import Glowcard from "../Components/Heromodels/Glowcard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const container = useRef();
  const cards = Array.isArray(expCards) ? expCards : [];

  useGSAP(
    () => {
      const cardsEl = gsap.utils.toArray(".timeline-card");
      const textsEl = gsap.utils.toArray(".expText");

      // ✅ batch animations (performance boost)
      ScrollTrigger.batch(cardsEl, {
        start: "top 85%",
        onEnter: (batch) => {
          gsap.from(batch, {
            x: -100,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out",
          });
        },
      });

      ScrollTrigger.batch(textsEl, {
        start: "top 85%",
        onEnter: (batch) => {
          gsap.from(batch, {
            x: -30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
          });
        },
      });

      // ✅ FIXED timeline animation (no infinite loop)
      gsap.fromTo(
        ".timeline",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-wrapper",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    },
    { scope: container } // 🔥 auto cleanup
  );

  return (
    <section
      ref={container}
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
                  
                  {/* LEFT */}
                  <div className="xl:w-2/6 w-full timeline-card">
                    <Glowcard card={card}>
                      {card.imgPath && (
                        <div className="mb-4 overflow-hidden rounded-lg">
                          <img
                            src={card.imgPath}
                            loading="lazy" // ✅ FIX
                            alt={card.title || "Experience"}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      )}

                      <h2 className="mt-4 text-xl font-semibold text-white">
                        {card.title}
                      </h2>

                      <p className="text-sm text-white/60 mt-2">
                        🗓️ {card.date}
                      </p>
                    </Glowcard>
                  </div>

                  {/* RIGHT */}
                  <div className="xl:w-4/6 w-full">
                    <div className="flex items-start">

                      <div className="timeline-wrapper hidden xl:block">
                        <div className="timeline" />
                        <div className="gradient-line w-1 h-full" />
                      </div>

                      <div className="expText flex xl:gap-20 md:gap-10 gap-5 w-full">

                        {card.logoPath && (
                          <div className="timeline-logo hidden md:block">
                            <img
                              src={card.logoPath}
                              loading="lazy" // ✅ FIX
                              alt={card.title}
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                        )}

                        <div className="flex-1">
                          <h3 className="font-semibold text-2xl md:text-3xl text-white">
                            {card.title}
                          </h3>

                          <p className="my-4 text-white/70 text-sm md:text-base">
                            🗓️ {card.date}
                          </p>

                          {card.responsibilities?.length > 0 && (
                            <ul className="list-disc ms-5 flex flex-col gap-3">
                              {card.responsibilities.map((r, i) => (
                                <li key={i} className="text-white/70">
                                  {r}
                                </li>
                              ))}
                            </ul>
                          )}

                          {card.description && (
                            <p className="text-white/60 mt-5">
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
                No experience data available
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
