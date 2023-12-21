import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";

import { Center,  IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import "@fontsource/cormorant/400.css";
import useAuth from '../../hooks/useAuth';
const Header = () => {
  const navigate=useNavigate();
  const {user,loading,logout}=useAuth();
  const handleLogout=()=>{
    logout()
    .then(result=>{
      navigate('/signin')
    })
  }
    return (
      <div>
        {/* desktop view  */}
        <div className=" hidden bg-red-900  p-1 md:flex justify-between items-center px-10 md:px-0">
          <div>
            <div className="  rounded px-2">
              <img
                className="md:w-1/2  "
                src={logo}
                alt=""
              />
            </div>
          </div>

          <div className="">
            <ul className="flex text-white space-x-4 text-xl font-semibold items-center ">
              <Link
                to="/"
                className="hover:rounded-lg p-2 hover:bg-white hover:text-red-700"
              >
                Home
              </Link>
              <Link
                to="/classes"
                className="hover:rounded-lg p-2 hover:bg-white hover:text-red-700"
              >
                Classes
              </Link>
              <Link
                to="/instructors"
                className="hover:rounded-lg p-2 hover:bg-white hover:text-red-700"
              >
                Instructors
              </Link>

              {user ? (
                <div className="flex space-x-4 items-center">
                  <Link
                    to="/dashboard"
                    className="hover:rounded-lg p-2 hover:bg-white hover:text-red-700"
                  >
                    Dashboard
                  </Link>
                  <div className="flex space-x-2 items-center">
                    <img className="w-7" src={user.photoURL} alt="" />
                    <button
                      onClick={handleLogout}
                      className="text-sm mr-10  rounded-lg p-2 bg-white text-red-800 hover:bg-black hover:text-red-600 "
                    >
                      Logout
                    </button>
                    <p></p>
                  </div>
                </div>
              ) : (
                <div className="">
                  <button className="text-sm mr-6 ">
                    <Link
                      to="/signin"
                      className="block rounded-lg p-2 bg-white text-red-800 hover:bg-black hover:text-red-600"
                    >
                      SignIn
                    </Link>
                  </button>
                </div>
              )}
            </ul>
          </div>
        </div>

        {/* mobile view  */}
        <div className="md:hidden ">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="mx-4">
            <Menu>
              <MenuButton
                className="mb-5 bg-white"
                as={IconButton}
                aria-label="Options"
                icon={<GiHamburgerMenu></GiHamburgerMenu>}
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

                {user ? (
                  <div>
                    <MenuItem as={Link} to="/dashboard" icon={<RxDashboard />}>
                      Dashboard
                    </MenuItem>
                    <MenuItem className="flex flex-col">
                      {user.photoURL == "null" ? (
                        <p>{user.displayName}</p>
                      ) : (
                        <img className="w-7 mb-4" src={user.photoURL} alt="" />
                      )}
                      {}
                      <button
                        onClick={handleLogout}
                        className="rounded-lg p-2  bg-white text-red-800 hover:bg-black hover:text-red-600 "
                      >
                        Logout
                      </button>
                    </MenuItem>
                  </div>
                ) : (
                  <MenuItem as={Link} to="/signin">
                    <button className="rounded-lg p-2  bg-white text-red-800 hover:bg-black hover:text-red-600 ">
                      Sign In
                    </button>
                  </MenuItem>
                )}
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    );
};

export default Header;