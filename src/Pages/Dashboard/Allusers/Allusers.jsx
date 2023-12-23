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
import axios from "axios";
import Swal from "sweetalert2";
const Allusers = () => {
  
    const {data: allusers=[], refetch}=useQuery({
        queryKey: ["allusers"],
        queryFn:async ()=>{
            const res= await fetch('http://localhost:5000/users');
            return res.json();
        }
    })

    const handleMakeAdmin=(user)=>{
      axios.patch(`http://localhost:5000/users/admin/${user._id}`)
      .then(response=>{
        console.log(response.data);
        if(response.data.modifiedCount>0){
          refetch();
          Swal.fire(`${user.name} has been made Admin!`);
        }
      })
    }
    const handleMakeInstructor=(user)=>{
      axios.patch(`http://localhost:5000/users/instructor/${user._id}`)
      .then(response=>{
        console.log(response.data);
        if(response.data.modifiedCount>0){
          refetch();
          Swal.fire(`${user.name} has been made Instructor!`);
        }
      })
    }

    const handleDeleteUser=(user)=>{
      axios.delete(`http://localhost:5000/users/${user._id}`)
      .then(response=>{
        console.log(response.data);
        if(response.data.deletedCount>0){
          refetch();
          Swal.fire(`${user.name} has been deleted from the app`);
        }
      })
    }
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
                          <Button  onClick={()=>handleMakeAdmin(user)} size="sm" colorScheme="telegram">
                            Admin
                          </Button>{" "}
                          <Button onClick={()=>handleMakeInstructor(user)} size="sm" colorScheme="orange">
                            Instructor
                          </Button>
                        </div>
                        <div className="flex justify-center mt-2">
                          <Button onClick={()=>handleDeleteUser(user)} size="sm" colorScheme="red">
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