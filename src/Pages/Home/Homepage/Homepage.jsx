import React from 'react';
import Banner from '../Banner/Banner';
import kanji from '../../../assets/kanji.jpg'
import About from '../About/About';
import InstructorsHome from '../InstructorsHome/InstructorsHome';
import ClassesHome from '../ClassesHome/ClassesHome';
import Stats from '../Stats/Stats';
import { AttentionSeeker } from 'react-awesome-reveal';

const Homepage = () => {
    return (
      <div className="flex flex-col">
        <div className="flex md:mx-16 justify-evenly flex-col items-center md:flex-row order-1 md:order-2">
          <p className="text-center md:my-5 text-3xl px-10 md:px-36 md:text-5xl text-slate-800 font-cursive font-bold mt-2">
            Explore the hidden martial arts potential in you
          </p>
          <AttentionSeeker effect='flash'>
            <img className="w-full " src={kanji} alt="" />
          </AttentionSeeker>
        </div>
        <div className="mx-1 my-5 md:my-10 order-2 md:order-1">
          <Banner></Banner>
        </div>
        <div className="order-3">
          <About></About>
        </div>
        <div className="order-4">
          <ClassesHome></ClassesHome>
        </div>
        <div className="order-5">
          <InstructorsHome></InstructorsHome>
        </div>
        <div className="order-6">
          <Stats></Stats>
        </div>
      </div>
    );
};

export default Homepage;