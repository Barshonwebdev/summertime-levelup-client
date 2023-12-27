import { useQuery } from '@tanstack/react-query';
import React from 'react';
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
const Allclasses = () => {
    const {data:allclasses=[],refetch}=useQuery({
        queryKey:'allclasses',
        queryFn: async()=>{
            const res=await fetch('http://localhost:5000/classes');
            return res.json();
        }
    });

    console.log(allclasses);
    return (
      <div>
        <h2 className="mb-10 text-3xl text-center text-orange-600 italic">
          Manage All Classes
        </h2>
        <div>
          <Box overflowX="auto">
            <TableContainer>
              <Table overflowX="auto" size={{ base: "sm", md: "md", lg: "md" }}>
                <Thead>
                  <Tr className='mx-auto'>
                    <Th>Image</Th>
                    <Th>Class Name</Th>
                    <Th>Instructor</Th>
                    <Th>Email</Th>
                    <Th>Seats</Th>
                    <Th>Price</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
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
                      <Td className='italic'>{eachclass.className}</Td>
                      <Td className='text-blue-600'>{eachclass.instructorName}</Td>
                      <Td className='text-blue-600'>{eachclass.instructorEmail}</Td>
                      <Td className='text-red-600'>{eachclass.seats}(remaining)</Td>
                      <Td className='text-green-600'>$ {eachclass.price}</Td>
                      <Td className='text-orange-600'>{eachclass.status}</Td>
                      <Td className='space-y-2 flex flex-col items-center'>
                        <div>
                          <Button size="sm" colorScheme="green">
                            Approve
                          </Button>
                        </div>
                        <div>
                          <Button size="sm" colorScheme="red">
                            Deny
                          </Button>
                        </div>
                        <div>
                          <Button  size="sm" colorScheme="blue">
                            Feedback
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
      </div>
    );
};

export default Allclasses;