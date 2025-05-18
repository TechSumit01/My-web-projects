import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mt-20 ">
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-4  ">
          <div className="w-full md:w-[55%] ">
            <img src={logo} alt="" className="w-24" />
            <p className="w-full md:w-3/4 ">
              I'm a frontend developer, currently pursuing my BCA degree and
              building real-world projects to sharpen my skills.
            </p>
          </div>
          <form
            // data-aos="fade-left"
            action="#"
            className="w-full md:w-[45%]   flex items-center justify-evenly gap-2"
          >
            <input
              className="bg-[#32323c] py-3 rounded-full pr-20 pl-2 w-3/4"
              type="email"
              name="email"
              placeholder="Enter your email here"
            />
            <input
              type="button"
              value=" Subscribe"
              className=" bg-gradient-to-r from-purple-500 to-pink-500  py-3 px-5 text-white rounded-full"
            />
          </form>
        </div>
        <hr />
        <div className="flex flex-col-reverse md:flex-row gap-2 items-center justify-between py-3">
          <p className="md:text-lg text-base font-medium ">
            © 2025 Sumit Chauhan. All rights reserved.
          </p>
          <ul className="flex gap-4 md:text-lg text-base font-medium">
            <li>Term of Services</li>
            <li>Privacy Policy</li>
            <li>Connect with me</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
