import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import { useEffect } from "react";

const App = () => {
useEffect(()=> {

AOS.init({
  duration: 1000,
  once: false,
  easing:"ease",
  anchorPlacement: "top-bottom"
})

},[])

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;