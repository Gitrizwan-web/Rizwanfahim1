import React from "react";
import { abilities } from "../constants";

const Featurecard = () => {
  return (
<div className="w-full padding-g-lg">
  <div className="max-w-6xl mx-auto grid grid-3-cols place-items-center items-stretch">
    {abilities.map(({ imgPath, desc, title }, index) => (
      <div
        key={index}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          e.currentTarget.style.setProperty("--start", x);

          const rotateX = ((y / rect.height) - 0.5) * 10;
          const rotateY = ((x / rect.width) - 0.5) * -10;

          e.currentTarget.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        }}
        className="card card-border rounded-xl p-8 flex flex-col gap-4 w-full max-w-sm h-full relative transition-all duration-300"
      >
        <div className="glow"></div>

        <div className="size-14 flex items-center justify-center rounded-full">
          <img src={imgPath} alt={title} />
        </div>

        <h3 className="text-white text-2xl font-semibold mt-2">
          {title}
        </h3>

        <p className="text-white-50 text-lg flex-grow">
          {desc}
        </p>
      </div>
    ))}
  </div>
</div>
  );
};

export default Featurecard;