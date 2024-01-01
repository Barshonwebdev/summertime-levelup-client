import { useQuery } from "@tanstack/react-query";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
const Allclasses = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onSubmit = (data) => {
    console.log(data);
  };
  const { data: allclasses = [], refetch } = useQuery({
    queryKey: "allclasses",
    queryFn: async () => {
      const res = await fetch(
        "https://summertime-levelup.onrender.com/classesquery"
      );
      return res.json();
    },
  });

  console.log(allclasses);

  const handleApprove = (eachclass) => {
    axios
      .patch(
        `https://summertime-levelup.onrender.com/classses/approved/${eachclass._id}`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          refetch();
          Swal.fire(`${eachclass.className} has been approved!`);
        }
      });
  };
  const handleDeny = (eachclass) => {
    axios
      .patch(
        `https://summertime-levelup.onrender.com/classes/denied/${eachclass._id}`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          refetch();
          Swal.fire(`${eachclass.className} has been denied, sorry!`);
        }
      });
  };
  const handleDelete = (eachclass) => {
    axios
      .delete(
        `https://summertime-levelup.onrender.com/classesquery/${eachclass._id}`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.deletedCount > 0) {
          refetch();
          Swal.fire(`${eachclass.className} has been deleted!`);
        }
      });
  };
  return (
    <div>
      <h2 className="mb-10 text-3xl text-center text-orange-600 italic">
        Manage All Classes
      </h2>
      <div className="hidden md:block">
        <Box overflowX="auto">
          <TableContainer>
            <Table overflowX="auto" size={{ base: "sm", md: "md", lg: "md" }}>
              <Thead>
                <Tr className="mx-auto">
                  <Th>Image</Th>
                  <Th>Class Name</Th>
                  <Th>Instructor</Th>
                  <Th>Email</Th>
                  <Th>Seats</Th>
                  <Th>Price</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {allclasses.map((eachclass) => (
                  <Tr key={eachclass._id}>
                    <Td>
                      <img
                        src={eachclass.classPhoto}
                        className="w-28 rounded-2xl"
                        alt=""
                      />
                    </Td>
                    <Td className="italic">{eachclass.className}</Td>
                    <Td className="text-blue-600">
                      {eachclass.instructorName}
                    </Td>
                    <Td className="text-blue-600">
                      {eachclass.instructorEmail}
                    </Td>
                    <Td className="text-red-600">
                      {eachclass.seats}(remaining)
                    </Td>
                    <Td className="text-green-600">$ {eachclass.price}</Td>
                    {eachclass.status === "Pending" ? (
                      <Td className="text-orange-600 font-bold">
                        {eachclass.status}
                      </Td>
                    ) : eachclass.status === "Approved" ? (
                      <Td className="text-green-600 font-bold">
                        {eachclass.status}
                      </Td>
                    ) : (
                      <Td className="text-red-600 font-bold">
                        {eachclass.status}
                      </Td>
                    )}
                    <Td className="space-y-2 flex flex-col items-center">
                      {eachclass.status === "Pending" ? (
                        <div className="space-y-2 flex flex-col justify-center items-center">
                          <div>
                            <Button
                              onClick={() => handleApprove(eachclass)}
                              size="sm"
                              colorScheme="green"
                            >
                              Approve
                            </Button>
                          </div>
                          <div>
                            <Button
                              onClick={() => handleDeny(eachclass)}
                              size="sm"
                              colorScheme="red"
                            >
                              Deny
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div>
                            <Button
                              isDisabled={true}
                              size="sm"
                              colorScheme="green"
                            >
                              Approve
                            </Button>
                          </div>
                          <div>
                            <Button
                              isDisabled={true}
                              size="sm"
                              colorScheme="red"
                            >
                              Deny
                            </Button>
                          </div>
                        </div>
                      )}
                      {/* <div>
                          <Button onClick={onOpen} size="sm" colorScheme="blue">
                            Feedback
                          </Button>
                        </div> */}
                    </Td>
                    <Td>
                      <div>
                        <Button
                          onClick={() => handleDelete(eachclass)}
                          size="sm"
                          colorScheme="red"
                        >
                          Delete
                        </Button>
                      </div>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </div>
      {/* <div>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Feedback Form</ModalHeader>
              <ModalHeader>{}</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label> </label>
                    <textarea
                      className='w-full'
                      placeholder="Your feedback"
                      {...register("feedback",)}
                    />
                  </div>
                  <div>
                    <Button colorScheme='twitter'>
                        Submit Feedback
                    </Button>
                  </div>
                </form>
              </ModalBody>

             
            </ModalContent>
          </Modal>
        </div> */}

      {/* mobile view  */}
      <div className="md:hidden">
        <Box overflowX="auto">
          <TableContainer>
            <Table overflowX="auto" size="sm">
              <Thead>
                <Tr className="mx-auto">
                  <Th>Class Name</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {allclasses.map((eachclass) => (
                  <Tr key={eachclass._id}>
                    <Td className="italic">{eachclass.className}</Td>
                    {eachclass.status === "Pending" ? (
                      <Td className="text-orange-600 font-bold">
                        {eachclass.status}
                      </Td>
                    ) : eachclass.status === "Approved" ? (
                      <Td className="text-green-600 font-bold">
                        {eachclass.status}
                      </Td>
                    ) : (
                      <Td className="text-red-600 font-bold">
                        {eachclass.status}
                      </Td>
                    )}
                    <Td className="space-y-2 flex flex-col items-center">
                      {eachclass.status === "Pending" ? (
                        <div className="space-y-2 flex flex-col justify-center items-center ">
                          <div>
                            <Button
                              onClick={() => handleApprove(eachclass)}
                              size="sm"
                              colorScheme="green"
                            >
                              Approve
                            </Button>
                          </div>
                          <div>
                            <Button
                              onClick={() => handleDeny(eachclass)}
                              size="sm"
                              colorScheme="red"
                            >
                              Deny
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div>
                            <Button
                              isDisabled={true}
                              size="sm"
                              colorScheme="green"
                            >
                              Approve
                            </Button>
                          </div>
                          <div>
                            <Button
                              isDisabled={true}
                              size="sm"
                              colorScheme="red"
                            >
                              Deny
                            </Button>
                          </div>
                        </div>
                      )}
                      {/* <div>
                          <Button onClick={onOpen} size="sm" colorScheme="blue">
                            Feedback
                          </Button>
                        </div> */}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </div>
  );
};

export default Allclasses;
