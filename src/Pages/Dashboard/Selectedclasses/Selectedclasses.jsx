import React from 'react';
import useSelected from '../../../hooks/useSelected';
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Headline from '../../../components/Headline';

const Selectedclasses = () => {
    const [selectedClasses]=useSelected();
    console.log(selectedClasses);
    return (
      <div className="flex flex-col items-center">
        <div>
          <Headline headline={"My Selected Classes"}></Headline>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
          {selectedClasses.map((eachclass) => (
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
                    <Heading className="italic text-orange-600 " size="lg">
                      $ {eachclass.price}
                    </Heading>
                    <Heading className="italic text-zinc-500" size="md">
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
                        
                      </div>
                    </Text>
                  </Stack>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        <div className="my-5">
          <Link to="/classes">
            <Button colorScheme="linkedin">Back to Class Selection</Button>
          </Link>
        </div>
      </div>
    );
};

export default Selectedclasses;