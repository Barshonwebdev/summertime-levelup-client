import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
import font from '../../ChakraUI/Font'
import { ChakraProvider } from '@chakra-ui/react';
import "@fontsource/cormorant/400.css";
const Header = () => {
    return (
      <div>
        <div className="bg-blue-900  text-white p-5 flex items-center px-10">
          <div>
            <div className='bg-white md:w-1/2 rounded-full px-2'>
              <img className="" src={logo} alt="" />
            </div>
          </div>
          <ChakraProvider theme={font}>
            <div className="md:ml-52">
              <ul className="flex space-x-4 text-xl font-bold ">
                <Link className="hover:rounded-lg p-2 hover:bg-white hover:text-blue-600">
                  Home
                </Link>
                <Link className="hover:rounded-lg p-2 hover:bg-white hover:text-blue-600">
                  Classes
                </Link>
                <Link className="hover:rounded-lg p-2 hover:bg-white hover:text-blue-600">
                  Instructors
                </Link>
                <Link className="hover:rounded-lg p-2 hover:bg-white hover:text-blue-600">
                  Dashboard
                </Link>
                <Link className="hover:rounded-lg p-2 hover:bg-white hover:text-blue-600">
                  User
                </Link>
              </ul>
            </div>
          </ChakraProvider>
        </div>
      </div>
    );
};

export default Header;