import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo/logo.png'
import font from '../../ChakraUI/Font'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";

import { Center, ChakraProvider, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import "@fontsource/cormorant/400.css";
const Header = () => {
    return (
      <div>
        {/* desktop view  */}
        <div className="bg-orange-600 hidden  text-white p-1 md:flex items-center px-10">
          <div>
            <div className="bg-white md:w-2/5 rounded px-2">
              <img className="" src={logo} alt="" />
            </div>
          </div>
          <ChakraProvider theme={font}>
            <div className="md:ml-52">
              <ul className="flex space-x-4 text-xl font-bold ">
                <Link
                  to="/"
                  className="hover:rounded-lg p-2 hover:bg-white hover:text-orange-600"
                >
                  Home
                </Link>
                <Link
                  to="/classes"
                  className="hover:rounded-lg p-2 hover:bg-white hover:text-orange-600"
                >
                  Classes
                </Link>
                <Link
                  to="/instructors"
                  className="hover:rounded-lg p-2 hover:bg-white hover:text-orange-600"
                >
                  Instructors
                </Link>
                <Link
                  to="/dashboard"
                  className="hover:rounded-lg p-2 hover:bg-white hover:text-orange-600"
                >
                  Dashboard
                </Link>
                <Link
                  to="#"
                  className="hover:rounded-lg p-2 hover:bg-white hover:text-orange-600"
                >
                  User
                </Link>
              </ul>
            </div>
          </ChakraProvider>
        </div>

        {/* mobile view  */}
        <div className="md:hidden">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="mx-4">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<GiHamburgerMenu></GiHamburgerMenu>}
                variant="outline"
              />
              <MenuList>
                <MenuItem as={Link} to="/" icon={<FaHome></FaHome>}>
                  Home
                </MenuItem>
                <MenuItem as={Link} to="/classes" icon={<SiGoogleclassroom />}>
                  Classes
                </MenuItem>
                <MenuItem as={Link} to="/instructors" icon={<GiTeacher />}>
                  Instructors
                </MenuItem>
                <MenuItem as={Link} to="/dashboard" icon={<RxDashboard />}>
                  Dashboard
                </MenuItem>
                <MenuItem icon={<FaRegUser />}>
                  User
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    );
};

export default Header;