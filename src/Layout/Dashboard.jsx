import React from 'react';
import Header from '../Pages/Shared/Header';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, Input, Text, useDisclosure } from '@chakra-ui/react';
import { FaHome } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { FaUsersCog } from "react-icons/fa";
import { BiSolidWallet } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
    
      const { isOpen, onOpen, onClose } = useDisclosure();
      const btnRef = React.useRef();

      const [isAdmin]=useAdmin();
      const [isInstructor]=useInstructor();
    
    return (
      <div>
        <Header></Header>

        <div className="flex justify-center flex-col items-center my-24 ">
          {/* drawer start */}
          <div className="mb-5 flex flex-col items-center ">
            <Heading
              size="lg"
              fontStyle="italic"
              color="gray.600"
              marginBottom="5"
            >
              Welcome to the Dashboard
            </Heading>
            <Button ref={btnRef} colorScheme="red" onClick={onOpen}>
              Open Dashboard
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
              size={"xs"}
              colorScheme="blue"
            >
              <DrawerOverlay />
              <DrawerContent backgroundColor="red.800" color="white">
                <DrawerCloseButton />
                <DrawerHeader>Dashboard</DrawerHeader>

                <DrawerBody>
                  <div className="mt-5 flex flex-col space-y-5">
                    {isAdmin ? (
                      <>
                        <Button onClick={onClose}>
                          <Link className="flex items-center">
                            <FaHome className="mr-1 text-xl text-blue-700"></FaHome>
                            Admin Home
                          </Link>
                        </Button>

                        <Button onClick={onClose}>
                          <Link className="flex items-center">
                            <FaUsersBetweenLines className="mr-1 text-xl text-yellow-700"></FaUsersBetweenLines>
                            Manage Classes
                          </Link>
                        </Button>

                        <Button onClick={onClose}>
                          <Link
                            className="flex items-center"
                            to="/dashboard/allusers"
                          >
                            <LuUsers2 className="mr-1 text-xl text-green-700"></LuUsers2>{" "}
                            Manage All users
                          </Link>
                        </Button>
                      </>
                    ) : isInstructor ? (
                      <>
                        <Button onClick={onClose}>
                          <Link className="flex items-center">
                            {" "}
                            <FaHome className="mr-1 text-xl text-blue-700"></FaHome>
                            Instructor Home
                          </Link>
                        </Button>

                        <Button onClick={onClose}>
                          <Link className="flex items-center">
                            <FaUsersCog className="mr-1 text-xl text-green-700"></FaUsersCog>{" "}
                            Create Classroom
                          </Link>
                        </Button>

                        <Button onClick={onClose}>
                          <Link className="flex items-center">
                            <FaUsersBetweenLines className="mr-1 text-xl text-yellow-700"></FaUsersBetweenLines>
                            My Classrooms
                          </Link>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button onClick={onClose}>
                          <Link className="flex items-center">
                            <FaHome className="mr-1 text-xl text-blue-700"></FaHome>{" "}
                            User Home
                          </Link>
                        </Button>

                        <Button onClick={onClose}>
                          <Link className="flex items-center">
                            <SiGoogleclassroom className="mr-1 text-xl text-yellow-700"></SiGoogleclassroom>{" "}
                            Selected Classes
                          </Link>
                        </Button>

                        <Button onClick={onClose}>
                          <Link className="flex items-center">
                            <TiTick className="mr-1 text-xl text-violet-700"></TiTick>{" "}
                            Enrolled Classes
                          </Link>
                        </Button>

                        <Button onClick={onClose}>
                          <Link className="flex items-center">
                            <BiSolidWallet className="mr-1 text-xl text-green-700"></BiSolidWallet>
                            Payment History
                          </Link>
                        </Button>
                      </>
                    )}
                  </div>
                </DrawerBody>

                <DrawerFooter>
                  <Button colorScheme="red" mr={3} onClick={onClose}>
                    Close Dashboard
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>

          <div>
            <Outlet></Outlet>
          </div>
          {/* drawer end */}
        </div>

        <Footer></Footer>
      </div>
    );
};

export default Dashboard;