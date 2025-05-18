import profile from "../assets/profile_img.png";

const Hero = () => {
  return (
    <>
      <main
        data-aos="fade-up"
        data-aos-duration="2000"
        className="z-0 mt-16  flex flex-col gap-4 items-center justify-center "
      >
        <img
          src={profile}
          alt=""
          className="w-60 object-cover  transition-transform duration-300 md:hover:scale-105"
        />
        <h1
          // data-aos="fade-up"
          className="text-3xl md:text-6xl bg-gradient-to-r font-bold from-purple-500 to-pink-500 bg-clip-text text-transparent flex flex-col items-center justify-center gap-3 md:gap-2"
        >
          I'm Sumit Chauhan,{" "}
          <span className="text-white md:text-5xl text-center font-serif leading-[50px] md:leading-normal">
            a passionate Frontend Developer, INDIA.
          </span>
        </h1>
        <p className="w-[90%] md:w-[60%] text-base md:text-lg text-center my-2">
          I’m a BCA student and aspiring full-stack developer passionate about
          building real-world web applications.
        </p>
        <div className="flex gap-5 items-center ">
          <button className="md:text-lg text-[14px] font-medium  bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-5 rounded-full ">
            Connect With Me
          </button>
          <button className="md:text-lg text-[14px] font-medium bg-transparent border-2 border-white rounded-full py-3 px-12">
            <a href="/public/Resume.pdf" download>
              Resume
            </a>
          </button>
        </div>
      </main>
    </>
  );
};

export default Hero;
