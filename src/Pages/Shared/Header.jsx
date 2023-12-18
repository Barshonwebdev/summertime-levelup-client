import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
const Header = () => {
    return (
      <div>
        <div className="bg-black text-orange-500 p-5 flex items-center px-10">
          <div>
            <img className='md:w-1/2' src={logo} alt="" />
          </div>
          <div className='md:ml-52'>
            <ul className="flex space-x-4 text-xl">
              <Link>Home</Link>
              <Link>Classes</Link>
              <Link>Instructors</Link>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;