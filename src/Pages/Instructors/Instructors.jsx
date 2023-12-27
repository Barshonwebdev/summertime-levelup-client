import React from 'react';
import useAllInstructors from '../../hooks/useAllInstructors';
import Headline from '../../components/Headline';
import { IoMail } from "react-icons/io5";

import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from "@chakra-ui/react";
const Instructors = () => {
    const [allInstructors]=useAllInstructors();
    console.log(allInstructors);
    
    return (
      <div>
        <div className="my-20">
          <Headline headline={"Our Instructors List"}></Headline>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 px-5 md:px-3 gap-y-5 gap-x-4 my-5">
          {allInstructors.map((instructor) => (
            <div key={instructor._id}>
              <Card className="hover:animate-pulse  " height="100%" maxW="sm">
                <CardBody>
                  <Image className='' align={""} src={instructor.propic} borderRadius="lg" />
                </CardBody>
                <CardFooter>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{instructor.name}</Heading>
                    <Text color="red.600">
                      <div className="flex items-center">
                        <IoMail className="me-1"></IoMail> Mail:{" "}
                        {instructor.email}
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

export default Instructors;