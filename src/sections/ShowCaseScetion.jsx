import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseScetion = () => {
  const container = useRef();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".project-card");

      // ✅ batch animation (smooth + fast)
      ScrollTrigger.batch(cards, {
        start: "top 85%",
        onEnter: (batch) => {
          gsap.from(batch, {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out",
          });
        },
      });

      // ✅ section fade (lightweight)
      gsap.from(container.current, {
        opacity: 0,
        duration: 1,
      });
    },
    { scope: container } // 🔥 auto cleanup
  );

  return (
    <section ref={container} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">

          {/* Project 1 */}
          <div className="first-project-wrapper project-card">
            <div className="image-wrapper">
              <img
                src="/images/insta-clone.webp"
                loading="lazy"
                alt="instagram-clone"
              />
            </div>

            <div className="text-content">
              <h2>
                The best social experience <br />
                in your hands with{" "}
                <span className="text-blue-600">Insta-Clone</span>
              </h2>

              <p className="text-white-50 md:text-xl">
                Discover the convenience of connecting with friends and sharing your moments.
              </p>

              <a
                href="https://github.com/Gitrizwan-web/Instgram-clone.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Code
              </a>
            </div>
          </div>

          {/* Project List */}
          <div className="project-list-wrapper overflow-hidden">

            {/* Project 2 */}
            <div className="project project-card">
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/Ecomerce.webp"
                  loading="lazy"
                  alt="Ecommerce"
                />
              </div>

              <h2>An Apparel – Your Daily Dose of Premium Style</h2>

              <a
                href="https://github.com/Gitrizwan-web/anapperal-ecomerce.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                View Code
              </a>
            </div>

            {/* Project 3 */}
            <div className="project project-card">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/images/Job-Portal.webp"
                  loading="lazy"
                  alt="Job Portal"
                />
              </div>

              <h2>JobPortal – Connecting Talent with Opportunities.</h2>

              <a
                href="https://github.com/Gitrizwan-web/Job_Portal.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                View Code
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseScetion;
