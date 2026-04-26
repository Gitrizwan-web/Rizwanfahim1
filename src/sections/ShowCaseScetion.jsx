import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseScetion = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * index,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">

          {/* Project 1 */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/insta-clone.png" alt="instagram-clone" />
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

              {/* Button */}
              <a
                href="https://github.com/Gitrizwan-web/Instgram-clone.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:scale-105 transition"
              >
                View Code
              </a>
            </div>
          </div>

          {/* Project List */}
          <div className="project-list-wrapper overflow-hidden">

            {/* Project 2 */}
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/Ecomerce.png" alt="Ecommerce" />
              </div>

              <h2>An Apparel – Your Daily Dose of Premium Style</h2>

              <a
                href="https://github.com/Gitrizwan-web/anapperal-ecomerce.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 hover:scale-105 transition"
              >
                View Code
              </a>
            </div>

            {/* Project 3 */}
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/Job Portal.png" alt="Job Portal" />
              </div>

              <h2>JobPortal – Connecting Talent with Opportunities.</h2>

              <a
                href="https://github.com/Gitrizwan-web/Job_Portal.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 hover:scale-105 transition"
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