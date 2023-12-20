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
        <div className=" hidden   p-1 md:flex items-center px-10 md:px-0">
          <div>
            <div className=" md:w-2/5 rounded px-2">
              <img className="" src={logo} alt="" />
            </div>
          </div>

          <div className="md:ml-52">
            <ul className="flex space-x-4 text-xl font-semibold items-center ">
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
              <Link
                to="/dashboard"
                className="hover:rounded-lg p-2 hover:bg-white hover:text-red-700"
              >
                Dashboard
              </Link>
              {user ? (
              
                <div className="flex">
                  <p className="text-xs">{user.displayName}</p>
                  <button onClick={handleLogout} className="text-sm mr-10  rounded-lg p-2 bg-red-800 text-white hover:bg-cyan-700 hover:text-white ">
                    Logout
                  </button>
                  <p></p>
                </div>
              ) : (
                 <div>
                  <button className="text-sm ">
                    <Link
                      to="/signin"
                      className="block rounded-lg p-2 bg-red-800 text-white hover:bg-cyan-700 hover:text-white"
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
                {user? (
                   <MenuItem className='flex flex-col'>
                  <p className='text-sm'>{user.email}</p>
                  <button onClick={handleLogout} className="rounded-lg p-2  bg-red-800 text-white hover:bg-cyan-700 hover:text-white ">
                    Logout
                  </button>
                </MenuItem>
                ) : (
                <MenuItem as={Link} to="/signin">
                  <button className="rounded-lg p-2  bg-red-800 text-white hover:bg-cyan-700 hover:text-white ">
                    Sign In
                  </button>
                </MenuItem> )
                }
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    );
};

export default Header;