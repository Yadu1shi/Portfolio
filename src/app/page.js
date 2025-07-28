import Image from "next/image";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skill from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="min-w-[390px] w-full flex flex-col justify-start items-center gap-6 bg-black" >
      <Hero/>
      <About/>
      <Work/>
      <Skill></Skill>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}
