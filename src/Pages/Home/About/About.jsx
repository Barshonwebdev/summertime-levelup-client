import {  Card, CardBody,  Heading, Image, Stack, Text } from '@chakra-ui/react';
import aboutImg from "../../../assets/about.jpg"; 
import Headline from '../../../components/Headline';
import { AttentionSeeker, Flip } from 'react-awesome-reveal';

const About = () => {
    return (
      <>
        <div className="my-20">
          <Headline headline={"About us"}></Headline>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-evenly  md:space-x-20 my-5 ">
          <div className="md:w-1/3 order-2 md:order-1">
            <AttentionSeeker effect="flash">
              <img className="" src={aboutImg} alt="" />
            </AttentionSeeker>
          </div>
          <div className="flex order-1 md:order-2 mx-4 ">
            <Flip direction='vertical'>
              <Card backgroundColor="blue.500" maxW="md">
                <CardBody>
                  <Stack mt="6" spacing="3">
                    <Text className="md:text-4xl text-2xl text-center text-white font-bold">
                      What is Summertime Levelup about?
                    </Text>
                    <Text className="text-white text-center mt-4 italic md:text-lg">
                      Immerse yourself in a transformative martial arts summer
                      camp experience! Our school offers expert instruction in
                      various disciplines, fostering discipline, fitness, and
                      camaraderie. From beginners to advanced practitioners,
                      join us for an unforgettable summer of skill development,
                      cultural exploration, and personal growth. Engage in daily
                      training led by seasoned martial arts masters, explore
                      traditional techniques, and enjoy team-building
                      activities. Our summer camp blends physical prowess with
                      mental focus, creating an enriching environment for
                      students of all levels.
                    </Text>
                    <div className="flex justify-end">
                      <p className="font-cursive text-xl md:text-3xl font-bold text-slate-900">
                        - Summertime Levelup Team
                      </p>
                    </div>
                  </Stack>
                </CardBody>
              </Card>
            </Flip>
          </div>
        </div>
      </>
    );
};

export default About;