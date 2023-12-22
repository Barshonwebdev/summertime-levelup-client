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
import { useQuery } from "@tanstack/react-query";
const Allusers = () => {
    const {data: allusers=[], refetch}=useQuery({
        queryKey: ["allusers"],
        queryFn:async ()=>{
            const res= await fetch('http://localhost:5000/users');
            return res.json();
        }
    })
    console.log(allusers);
    return (
      <div>
        <h2 className="mb-10 text-3xl text-center text-orange-600 italic">
          Manage All Users
        </h2>
        <div>
          <Box overflowX="auto">
            <TableContainer>
              <Table overflowX="auto" size={{ base: "sm", md: "md", lg: "lg" }}>
                <Thead>
                  <Tr>
                    <Th>Email</Th>

                    <Th className="flex justify-center">Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {allusers.map((user) => (
                    <Tr key={user._id}>
                      <Td>{user.email}</Td>

                      <Td className=" flex-col items-center justify-center ">
                        <div>
                          <Button size="sm" colorScheme="telegram">
                            Admin
                          </Button>{" "}
                          <Button size="sm" colorScheme="orange">
                            Instructor
                          </Button>
                        </div>
                        <div className="flex justify-center mt-2">
                          <Button size="sm" colorScheme="red">
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
      </div>
    );
};

export default Allusers;