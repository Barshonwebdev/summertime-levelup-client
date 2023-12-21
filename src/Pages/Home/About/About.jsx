import {  Card, CardBody,  Heading, Image, Stack, Text } from '@chakra-ui/react';
import aboutImg from "../../../assets/about.jpg"; 

const About = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-evenly  md:space-x-20 my-5 ">
        <div className="md:w-1/3 order-2 md:order-1">
          <img className="" src={aboutImg} alt="" />
        </div>
        <div className="flex order-1 md:order-2 mx-4 ">
          <Card  backgroundColor="red.400" maxW="md">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Text className="md:text-4xl text-xl text-white font-bold">
                  What is Summertime Levelup about?
                </Text>
                <Text className='text-white mt-4 italic md:text-lg'>
                  Immerse yourself in a transformative martial arts summer camp
                  experience! Our school offers expert instruction in various
                  disciplines, fostering discipline, fitness, and camaraderie.
                  From beginners to advanced practitioners, join us for an
                  unforgettable summer of skill development, cultural
                  exploration, and personal growth. Engage in daily training led
                  by seasoned martial arts masters, explore traditional
                  techniques, and enjoy team-building activities. Our summer
                  camp blends physical prowess with mental focus, creating an
                  enriching environment for students of all levels.
                </Text>
                <div className='flex justify-end'>
                    <p className='font-cursive text-xl md:text-3xl font-bold text-black'>- Summertime Levelup Team</p>
                </div>
              </Stack>
            </CardBody>
          </Card>
        </div>
      </div>
    );
};

export default About;