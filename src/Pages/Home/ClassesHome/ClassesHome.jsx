import Headline from "../../../components/Headline";

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
import useAllClasses from "../../../hooks/useAllClasses";
const ClassesHome = () => {
  const [,homepageClasses] = useAllClasses();
console.log(homepageClasses);
  return (
    <div>
      <div className="my-20">
        <Headline headline="Popular Classes"></Headline>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 px-5 md:px-3 gap-y-8 gap-x-7 my-5">
        {homepageClasses.slice(0, 6).map((eachclass) => (
          <div key={eachclass._id}>
            <Card className="hover:animate-pulse" height="100%" maxW="sm">
              <CardBody>
                <Image align={""} src={eachclass.classPhoto} borderRadius="lg" />
              </CardBody>
              <CardFooter>
                {" "}
                <Stack mt="6" spacing="3">
                  <Heading size="md">{eachclass.className}</Heading>
                  <Text color="red.600">
                    <div className="">
                      <p className="text-violet-900 font-semibold text-lg">Instructor: {eachclass.instructorName}</p>
                      <p className="text-red-600 font-semibold">Seats Remaining: {eachclass.seats}</p>
                     
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

export default ClassesHome;
