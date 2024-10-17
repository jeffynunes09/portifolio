import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className=' flex flex-wrap justify-center gap-10' data-aos="fade-up">
      <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Tecnologias que utilizo</h2>
     <div className="flex flex-row flex-wrap justify-center gap-10">
     {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
     </div>
    </div>
  );
};

export default SectionWrapper(Tech, "techs");
