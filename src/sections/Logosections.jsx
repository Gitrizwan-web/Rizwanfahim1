import React from "react";
import { logoIconsList } from "../constants";
const Logoicon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item ">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};
const Logosections = () => {
  return (
    <div className="md:my-20 my-10  relative ">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5 ">
          {logoIconsList.map((icon) => (
            <Logoicon key={icon.name} icon={icon} />
          ))}
          {logoIconsList.map((icon) => (
            <Logoicon key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logosections;
