import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Certifique-se de importar o CSS do AOS

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  link,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {


  const maxLength = 150;


  return (
    <div>
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] md:w-[450px] xl:w-[350px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain hover:scale-150'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] hover:scale-105 hover:text-[#392647]'>
            <a  target="_blank" href={link}>{name}</a>
          </h3>
          <p className='mt-2 text-secondary text-[14px]'>{description.length > maxLength ? `${description.slice(0,maxLength)}...` : `${description}.`} </p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  useEffect(() => {
  
  },);

  return (
    <>
      <div>
        <div>
          <p className={`${styles.sectionSubText}`}>Meus Projetos</p>
          <h2 className={`${styles.sectionHeadText}`}>Veja meus projetos.</h2>
        </div>
      </div>
      <div className='w-full flex'>
        <p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Seguem meus projetos, criados com muito esforço e aprendizado na minha trajetória como Desenvolvedor. Continuo procurando me aperfeiçoar e estou sempre aberto a críticas e sugestões.
        </p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
