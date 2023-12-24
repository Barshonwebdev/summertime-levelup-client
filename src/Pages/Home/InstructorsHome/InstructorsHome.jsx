import React from 'react';
import Headline from '../../../components/Headline';
import useAllInstructors from '../../../hooks/useAllInstructors';
import { IoMail } from "react-icons/io5";

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
const InstructorsHome = () => {
    const [allInstructors]=useAllInstructors();

    return (
      <div>
        <div className="my-20">
          <Headline headline="Our Instructors"></Headline>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-3 gap-y-5 my-5">
          {allInstructors.slice(0, 6).map((instructor) => (
            <div key={instructor._id}>
              <Card className="hover:animate-pulse" height="100%" maxW="sm">
                <CardBody>
                  <Image align={""} src={instructor.propic} borderRadius="lg" />
                </CardBody>
                <CardFooter>
                  {" "}
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

export default InstructorsHome;