import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import History from "../components/History";
import Specal from "../components/Specal";
import Chef from "../components/Chef";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Booking from "../components/Booking";

const Home = () => {
  return (
    <>
      <div className="bg-[#0c0c0c] py-4 px-2 md:px-8">
        <NavBar />
        <Hero />
        <History />
        <Specal />
        <section id="book" >
          <Booking />
        </section>
        <Chef />
        <Gallery />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Home;
