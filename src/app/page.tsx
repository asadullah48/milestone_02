
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



export default function Home() {
  return (
      <main className='flex min-h-screen flex-col bg-[#121212]'>
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <Hero />
          <About />
          <Skills />
          <Project />
          <Contact />  
        </div> 
          <Footer/> 
      </main>
    );
  };