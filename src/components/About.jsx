import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Descrição</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Olá! Sou um desenvolvedor entusiasta em busca de uma oportunidade de estágio para aplicar e expandir meus conhecimentos em várias tecnologias. Tenho sólida experiência em JavaScript, React, Express JS, Nest JS, Flask, Tailwind e Styled Components. Adoro criar aplicações interativas e eficientes, e estou especialmente familiarizado com o desenvolvimento utilizando Nest JS com TypeORM e PostgreSQL, assim como com a stack MERN.

Recentemente, comecei a explorar o mundo do desenvolvimento mobile com React Native, o que tem sido uma experiência enriquecedora e estimulante. Estou ansioso para fazer parte de uma equipe dinâmica onde possa contribuir ativamente e continuar a aprimorar minhas habilidades através de desafios reais e práticos.

Se você está à procura de alguém dedicado e apaixonado por tecnologia, que está sempre buscando aprender e evoluir, estou aqui para colaborar e crescer junto com você.


      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");