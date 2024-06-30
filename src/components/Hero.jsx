import { motion } from "framer-motion";
import img from '../assets/seta.png'
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[100vh] custom:h-[60vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Olá, sou <span className='text-[#915EFF] px-5 mb-4'>  Jefferson <span className='text-[#fff] px-5 mb-4'> Nunes</span></span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
          Desenvolvedor Web <br className='sm:block hidden' />
            
          </p>
        </div>
      </div>

      <ComputersCanvas />

    <div className=' w-full flex justify-center items-center'>
      <div className='w-[90px] h-[100px] rounded-3xl flex justify-center items-start p-2'>
        <a href='#about'>
          <motion.img
            src={img}
            alt="Imagem piscando"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ width: '60px', height: '70px', cursor: 'pointer' }}
          />
        </a>
      </div>
    </div>

   
    </section>
  );
};

export default Hero;