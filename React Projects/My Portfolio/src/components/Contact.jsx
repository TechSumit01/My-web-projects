import React from "react";
import email_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";
import phone_icon from "../assets/call_icon.svg";

const Contact = () => {
  return (
    <>
      <div id="contact" className=" mt-20">
        <h1 className="text-3xl md:text-5xl text-center font-medium  ">
          GET IN TOUCH
        </h1>
        <div className=" flex flex-col md:flex-row gap-14 mt-10 ">
          <section
            // data-aos="fade-right"
            className="w-full md:w-[45%] flex flex-col gap-4 "
          >
            <h1 className="text-3xl md:text-4xl bg-gradient-to-r font-bold from-purple-500 to-pink-500 bg-clip-text text-transparent  ">
              Let's Talk
            </h1>
            <p className=" ">
              I'm currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </p>
            <div className="flex flex-col gap-8 ">
              <div className="flex items-center gap-5 ">
                <img src={email_icon} alt="" />
                <span> technosumit001@gmail.com</span>
              </div>
              <div className="flex items-center gap-5 ">
                <img src={phone_icon} alt="" />
                <span> 6392301170</span>
              </div>
              <div className="flex items-center gap-5 ">
                <img src={location_icon} alt="" />
                <span> Ayodhya , India</span>
              </div>
            </div>
          </section>
          <section  className="w-full md:w-[55%]">
            <form action="#">
              <div className=" flex gap-5 flex-col mt-4 ">
                Your Name
                <input
                  className=" bg-[#32323c] py-3 rounded-md px-2 "
                  type="text"
                  placeholder="Enter your name.."
                />
              </div>
              <div className=" flex gap-5 flex-col mt-4 ">
                Your E-mail
                <input
                  className=" bg-[#32323c] py-3 rounded-md px-2 "
                  type="email"
                  placeholder="Enter your name.."
                />
              </div>
              <div className=" flex gap-5 flex-col mt-4 ">
                Write your message here
                <textarea
                  className=" p-2 bg-[#32323c] "
                  name="message"
                  placeholder="Enter your message here..."
                  rows={5}
                ></textarea>
              </div>
              <button className=" bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-5 mt-5 rounded-full">
                Submit Now
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
