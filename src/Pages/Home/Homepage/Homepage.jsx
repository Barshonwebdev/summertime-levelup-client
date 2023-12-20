import React from 'react';
import Banner from '../Banner/Banner';

const Homepage = () => {
    return (
      <div>
        <p className='text-center my-5 text-3xl px-10 md:text-5xl text-red-800 font-cursive font-bold'>Explore the hidden martial arts potential in you...</p>
        <div className='md:mx-1'>
          <Banner></Banner>
        </div>
      </div>
    );
};

export default Homepage;