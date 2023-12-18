import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
import font from '../../ChakraUI/Font'
import { ChakraProvider } from '@chakra-ui/react';
import "@fontsource/cormorant/400.css";
const Header = () => {
    return (
      <div>
        <div className="bg-black text-orange-500 p-5 flex items-center px-10">
          <div>
            <img className="md:w-1/2" src={logo} alt="" />
          </div>
          <ChakraProvider theme={font}>
            <div className="md:ml-52">
              <ul className="flex space-x-4 text-xl font-bold ">
                <Link className="hover:rounded-lg p-2 hover:bg-white">
                  Home
                </Link>
                <Link className="hover:rounded-lg p-2 hover:bg-white">
                  Classes
                </Link>
                <Link className="hover:rounded-lg p-2 hover:bg-white">
                  Instructors
                </Link>
                <Link className="hover:rounded-lg p-2 hover:bg-white">
                  Dashboard
                </Link>
                <Link className="hover:rounded-lg p-2 hover:bg-white">
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