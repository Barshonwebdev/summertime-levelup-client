import React from 'react';
import useEnrolled from '../../../hooks/useEnrolled';
import Headline from '../../../components/Headline';
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';

const Enrolledclasses = () => {
    const [enrolledClasses]=useEnrolled();
    console.log(enrolledClasses);
    return (
      <div className="flex flex-col md:flex-row ">
        <div className='mr-10 mt-10 '>
          <Headline headline={"You have enrolled: "}></Headline>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
          {enrolledClasses.map((eachclass) => (
            <div key={eachclass._id}>
              <Card className="  " height="100%" maxW="sm">
                <CardBody>
                 
                  <Image
                    className=""
                    align={""}
                    src={eachclass.classPhoto}
                    borderRadius="lg"
                  />
                </CardBody>
                <CardFooter>
                  <Stack mt="6" spacing="3">
                   
                    <Heading className="italic text-orange-500" size="lg">
                      {eachclass.className}
                    </Heading>
                    <Text color="">
                      <div className="space-y-2">
                        <p className="text-violet-900 font-bold text-lg">
                          Instructor: {eachclass.instructorName}
                        </p>
                        <p className=" font-semibold">
                          Available Seats:{" "}
                          <span className="text-red-600">
                            {eachclass.seats}
                          </span>
                        </p>
                        <p className=" font-semibold text-2xl">
                          Enrolled:{" "}
                          <span className="text-green-600">
                            {eachclass.enrolled}
                          </span>
                        </p>
                      </div>
                    </Text>
                  </Stack>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        
      </div>
    );
};

export default Enrolledclasses;