import React from 'react';
import useAllClasses from '../../hooks/useAllClasses';
import Headline from '../../components/Headline';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
const Classes = () => {
    
    const [isAdmin]=useAdmin();
    const [isInstructor]=useInstructor();
    const [allClasses]=useAllClasses();
    console.log(allClasses);
    return (
      <div>
        <div className="my-20">
          <Headline headline={"All Our Classes "}></Headline>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-3 gap-y-5 gap-x-4 my-5">
          {allClasses.map((eachclass) => (
            <div key={eachclass._id}>
              <Card className="hover:animate-pulse  " height="100%" maxW="sm">
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
                        <p className=" font-semibold">
                          Price:{" "}
                          <span className="text-green-600">
                            ${eachclass.price}
                          </span>
                        </p>

                        {isAdmin || isInstructor ? (
                          <Button isDisabled={true} colorScheme="linkedin">
                            Select
                          </Button>
                        ) : (
                          <Button isDisabled={false} colorScheme="linkedin">
                            Select
                          </Button>
                        )}
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

export default Classes;