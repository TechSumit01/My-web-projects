import coder from "../assets/coder.jpg";

export const AboutMe = () => {
  return (
    <>
      <div id="about" className="overflow-hidden mt-20">
        <h1 className="text-4xl md:text-5xl text-center font-medium">
          ABOUT ME
        </h1>
        <div className=" flex flex-col md:flex-row justify-between gap-10 mt-10 ">
          <section
            data-aos="fade-right"
            className="h-auto py-2 text-center px-2 w-full md:w-[35%]  flex items-center justify-center "
          >
            {" "}
            <img
              src={coder}
              alt=""
              className=" rounded-lg object-cover "
            />{" "}
          </section>

          <section className="flex w-full md:w-[60%]  flex-col gap-4">
            <div className="text-lg font-normal flex flex-col gap-4 items-center justify-center ">
              <p>
                Hi, I'm a passionate frontend developer with hands-on experience
                in building responsive and user-friendly web applications. I
                specialize in HTML, CSS, JavaScript, Tailwind CSS, and React.
                I'm currently pursuing a BCA degree and constantly learning
                modern tools and technologies to stay ahead in web development.
              </p>
              <p>
                I've built several real-world projects including a multi-page
                e-commerce site, YouTube clone, restaurant website, and more. I
                love turning ideas into interactive, functional designs and
                enjoy solving problems through clean, efficient code. I'm
                excited to collaborate with creative teams and contribute to
                impactful digital products.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className=" mt-6 md:text-2xl font-normal font-serif flex flex-col gap-3"
            >
              <div className=" flex gap-4 items-center hover:scale-110 cursor-pointer transition-all">
                <span className=" text-lg ">HTML & CSS</span>
                <span className="skills"></span>
              </div>
              <div className=" flex gap-4  items-center hover:scale-110 cursor-pointer transition-all ">
                <span className=" text-lg ">Javascript</span>
                <span className="skills"></span>
              </div>
              <div className=" flex gap-4  items-center  hover:scale-110 cursor-pointer transition-all">
                <span className="text-lg  ">React Js</span>
                <span className="skills"></span>
              </div>
              <div className=" flex gap-4  items-center hover:scale-110 cursor-pointer transition-all ">
                <span className="text-lg  ">Tailwid CSS</span>
                <span className="skills"></span>
              </div>
            </div>
          </section>
        </div>
        <div
          data-aos="zoom-in"
          className="mt-8 flex justify-between items-center overflow-hidden"
        >
          <div className=" flex flex-col gap-2 justify-center border-r-2 pr-2 md:pr-24 hover:scale-110 cursor-pointer transition-all ">
            <h1 className="bg-color text-3xl ">1+</h1>
            <p className="text-sm md:text-lg font-medium ">
              YEARS OF EXPERIENCE
            </p>
          </div>
          <div className=" flex flex-col gap-2 justify-center border-r-2 px-4 md:pr-20 hover:scale-110 cursor-pointer transition-all">
            <h1 className="bg-color text-3xl  ">10+</h1>
            <p className="text-sm md:text-lg font-medium ">
              PROJECTS COMPLETED
            </p>
          </div>
          <div className=" flex flex-col gap-2 pl-4 justify-center hover:scale-110 cursor-pointer transition-all ">
            <h1 className="bg-color text-3xl ">10+</h1>
            <p className="text-sm md:text-lg font-medium ">HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </>
  );
};
