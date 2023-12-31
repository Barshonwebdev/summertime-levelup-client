import React from 'react';
import useSelected from '../../../hooks/useSelected';
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Headline from '../../../components/Headline';
import { TiDelete } from "react-icons/ti";
import axios from 'axios';
import Swal from 'sweetalert2';



const Selectedclasses = () => {
    const [selectedClasses,refetch]=useSelected();
    
    const totalPrice=selectedClasses.reduce((sum,item)=>item.price+sum,0);
    console.log(totalPrice);
    console.log(selectedClasses);
    const handleDeleteClass=(eachclass)=>{
      axios.delete(`http://localhost:5000/selectedclassesDelete/${eachclass._id}`)
      .then(res=>{
        console.log(res.data);
        if(res.data.deletedCount>0){
          refetch();
           Swal.fire({
             position: "top-end",
             icon: "success",
             title: "Deleted Class!",
             showConfirmButton: false,
             timer: 1500,
           });
        }
      })
    }
    return (
      <div className="flex flex-col items-center">
        <div>
          <Headline headline={"My Selected Classes"}></Headline>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
          {selectedClasses.map((eachclass) => (
            <div key={eachclass._id}>
              <Card className="  " height="100%" maxW="sm">
                <CardBody>
                  <div className="flex justify-end ">
                    <button
                      onClick={() => handleDeleteClass(eachclass)}
                      className="text-4xl"
                    >
                      <TiDelete></TiDelete>
                    </button>
                  </div>
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
        <div className="text-center  text-xl">
          <h3>
            Total Classes selected:{" "}
            <span className="text-2xl text-violet-600">
              {selectedClasses.length}
            </span>{" "}
          </h3>
          <h3>
            Total Price:{" "}
            <span className="text-green-700 text-2xl">
              ${parseFloat(totalPrice.toFixed(2))}
            </span>{" "}
          </h3>
        </div>
        <div className="my-5">
          <Link to="/dashboard/payment">
            <Button colorScheme="green">Proceed to Pay</Button>
          </Link>
        </div>
        <div>
          <Link to="/classes">
            <Button colorScheme="linkedin">Back to Class Selection</Button>
          </Link>
        </div>
      </div>
    );
};

export default Selectedclasses;