import React from 'react';
import Banner from '../Banner/Banner';
import kanji from '../../../assets/kanji.jpg'
const Homepage = () => {
    return (
      <div>
        <div className="md:mx-1 my-10">
          <Banner></Banner>
        </div>
        <div className='flex justify-evenly flex-col items-center md:flex-row'>
          <p className="text-center my-5 text-3xl px-10 md:px-36 md:text-5xl text-slate-800 font-cursive font-bold">
            Explore the hidden martial arts potential in you
          </p>
          <img className='md:w-1/2' src={kanji} alt="" />
        </div>
      </div>
    );
};

export default Homepage;