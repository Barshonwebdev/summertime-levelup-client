import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
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
} from "@chakra-ui/react";

import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Myclasses = () => {
   
    const {user}=useAuth();
    const {data:myclasses=[], refetch}=useQuery({
        queryKey:'myclasses',
        queryFn:async()=>{
            const res = await fetch(
              `http://localhost:5000/myclasses?email=${user.email}`
            );
            return res.json();
        }
    })

    console.log(myclasses);
    return (
      <div>
        <h2 className="mb-10 text-3xl text-center text-orange-600 italic">
          Manage My Classes
        </h2>
        <div className="hidden md:block">
          <Box overflowX="auto">
            <TableContainer>
              <Table overflowX="auto" size={{ base: "sm", md: "md", lg: "md" }}>
                <Thead>
                  <Tr className="mx-auto">
                    <Th>Image</Th>
                    <Th>Class Name</Th>
                    <Th>Seats</Th>
                    <Th>Enrolled</Th>
                    <Th>Price</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {myclasses.map((eachclass) => (
                    <Tr key={eachclass._id}>
                      <Td>
                        <img
                          src={eachclass.classPhoto}
                          className="w-28 rounded-2xl"
                          alt=""
                        />
                      </Td>
                      <Td className="italic">{eachclass.className}</Td>

                      <Td className="text-red-600">
                        {eachclass.seats}(remaining)
                      </Td>
                      <Td className="text-orange-600 ">{eachclass.enrolled}</Td>
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
                      <Td className="">
                        <Link to={`/dashboard/updateclass/${eachclass._id}`}>
                          <Button colorScheme="orange">
                            <FaRegEdit></FaRegEdit>
                          </Button>
                        </Link>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </div>

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
                  {myclasses.map((eachclass) => (
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
                      <Td className="">
                        <Link to={`/dashboard/updateclass/${eachclass._id}`}>
                          <Button colorScheme="orange">
                            <FaRegEdit></FaRegEdit>
                          </Button>
                        </Link>
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

export default Myclasses;