import React from 'react';
import Header from '../Pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react';

const Dashboard = () => {
    
      const { isOpen, onOpen, onClose } = useDisclosure();
      const btnRef = React.useRef();

     
    
    return (
      <div>
        <Header></Header>

        <div className='flex justify-between my-10 '>
          {/* drawer start */}
          <div>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
              Open
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
              size={"xs"}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                  <Input placeholder="Type here..." />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>

          <div>
            content
          </div>
          {/* drawer end */}
        </div>

        <Footer></Footer>
      </div>
    );
};

export default Dashboard;