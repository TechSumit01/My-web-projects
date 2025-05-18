import arrow from "../assets/arrow_icon.svg";
import data from "../assets/services_data";

const Services = () => {
  return (
    <>
      <div id="services" className="overflow-hidden z-10 mt-16 px-2 md:px-5 pb-3 md:pb-5 ">
        <h1 className="text-4xl md:text-5xl text-center font-medium  ">
          MY SERVICES
        </h1>
        <div className=" mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8  ">
          {data.map((v, i) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
                className="service"
                key={i}
              >
                <p className="text-2xl font-medium ">{v.s_no}</p>
                <h1 className="text-xl md:text-3xl bg-color  ">{v.s_name}</h1>
                <p className=" text-lg font-medium text-gray-500 ">
                  {v.s_desc}
                </p>
                <p className="text-lg font-medium text-gray-300 flex items-center gap-4 mt-6">
                  Read More <img src={arrow} alt="" className="w-6" />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
