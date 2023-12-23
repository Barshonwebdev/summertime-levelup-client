import React from 'react';
import Header from '../Pages/Shared/Header';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, Input, Text, useDisclosure } from '@chakra-ui/react';

const Dashboard = () => {
    
      const { isOpen, onOpen, onClose } = useDisclosure();
      const btnRef = React.useRef();

     
    
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
                    
                      <Button onClick={onClose}>
                        <Link to="/dashboard/homepage">
                          Admin Home
                        </Link>
                      </Button>

                      <Button onClick={onClose}>
                        <Link>
                          Manage Classes
                        </Link>
                      </Button>

                      <Button onClick={onClose}>
                        <Link to="/dashboard/allusers">
                          Manage All users
                        </Link>
                      </Button>

                      <Button onClick={onClose}>
                        <Link>
                          User Home
                        </Link>
                      </Button>

                      <Button onClick={onClose}>
                        <Link>
                          Selected Classes
                        </Link>
                      </Button>

                      <Button onClick={onClose}>
                        <Link>
                          Enrolled Classes
                        </Link>
                      </Button>

                      <Button onClick={onClose}>
                        <Link>
                          Payment History
                        </Link>
                      </Button>

                      <Button onClick={onClose}>
                        <Link>
                          Instructor Home
                        </Link>
                      </Button>

                      <Button onClick={onClose}>
                        <Link>
                          Create Classroom
                        </Link>
                      </Button>

                      <Button onClick={onClose}>
                        <Link>
                          My Classrooms
                        </Link>
                      </Button>
                    
                  </div>
                </DrawerBody>

                <DrawerFooter>
                  <Button mr={3} onClick={onClose}>
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