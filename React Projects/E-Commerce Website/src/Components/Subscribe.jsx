import React from 'react'

const Subscribe = () => {

    const onSubmitHandle = (event) => {
        event.preventDefault;
    }

    return (
      <>
        <div className=" justify-center items-center pb-5 flex flex-col gap-4">
          <h2 className="text-2xl text-gray-900 font-medium">
            Subscribe now & get 20% off
          </h2>
          <p className="text-gray-400 text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <form className='border-2 w-full sm:w-1/2 flex items-center my-6 mx-auto ' onSubmit={onSubmitHandle} action="#">
            <input className="w-full py-3 px-1 outline-none " type="email" placeholder="Enter your email" required />
            <button className='text-white bg-black py-4 px-6 text-sm'  >SUBSCRIBE</button>
          </form>
        </div>
      </>
    );
}

export default Subscribe