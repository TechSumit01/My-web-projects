import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

import Social from "./components/Social";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AboutMe } from "./components/AboutMe";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
    });
  }, []);
  return (
    <>
      <div>
        <div className=" fixed left-0 top-[20%] z-50 px-1  ">
          {" "}
          <div className="flex flex-col gap-4 text-3xl items-center px-3 py-4 bg-[#0f172a] border border-gray-700 rounded-r-2xl shadow-lg backdrop-blur-sm">
            {" "}
            <Social />{" "}
          </div>{" "}
        </div>{" "}
        <div className="bg-[#161513] z-0 px-6 sm:px-12 md:px-16 overflow-x-hidden ">
          {" "}
          <NavBar />
          <Hero />
          <AboutMe />
          <Services />
          <Work />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
