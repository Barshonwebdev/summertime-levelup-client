import React from 'react';
import useAllClasses from '../../hooks/useAllClasses';
import Headline from '../../components/Headline';
import { FaBasketShopping } from "react-icons/fa6";

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
import useSelected from '../../hooks/useSelected';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
const Classes = () => {
    const {user}=useAuth();
    const [isAdmin]=useAdmin();
    const [isInstructor]=useInstructor();
    const [allClasses]=useAllClasses();
    console.log(allClasses);
    const [selectedClasses,refetch]=useSelected();
    const navigate=useNavigate();
    const location=useLocation();
    const handleSelectclass=(eachclass)=>{
        if (user && user.email){
            const {_id,className,classPhoto,price,seats,instructorName}=eachclass;
            const selectedclass={classId:_id, email:user.email,className,classPhoto,price,seats,instructorName};
            fetch(`http://localhost:5000/selectedclasses`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(selectedclass),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  refetch();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Selected Class!",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
                else {
                  Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "Class already selected once!",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });

        }
        else {
          Swal.fire({
            title: "Please Log in first",

            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Login",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/signin", { state: { from: location } });
            }
          });
        }
    }
    return (
      <div>
        <div className="my-20">
          <Headline headline={"All Our Classes "}></Headline>
        </div>

        {!isAdmin && !isInstructor && (
          <Link to="/dashboard/selected">
            <div className="rounded-lg fixed bg-black p-3 top-36 right-0 z-10 ">
              <p className='text-white text-sm'>Selected:</p>
              <div className="flex items-center space-x-2">
                <FaBasketShopping className="text-white text-xl"></FaBasketShopping>
                <span className="text-white">+{selectedClasses.length}</span>
              </div>
            </div>
          </Link>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-3 gap-y-5 gap-x-4 my-5">
          {allClasses.map((eachclass) => (
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
                          <Button
                            onClick={() => handleSelectclass(eachclass)}
                            isDisabled={false}
                            color={"white"}
                            bg={"cyan.500"}
                            _hover={{ bg: "orange.300", color: "black" }}
                          >
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