import React from 'react';
import notfound from '../../assets/notfound.gif'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
      <div className="flex justify-center mt-5 ">
        <div className="flex flex-col">
          <img className="rounded-full" src={notfound} alt="" />
          <button className="mt-5 bg-gray-700 w-1/3 md:w-1/4 mx-auto text-white rounded ">
            <Link to='/'>Back to Home</Link>
          </button>
        </div>
      </div>
    );
};

export default Notfound;