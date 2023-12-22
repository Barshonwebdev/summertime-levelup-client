import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
const Allusers = () => {
    return (
      <div>
        <h2 className="mb-10 text-3xl text-center text-orange-600 italic">
          Manage All Users
        </h2>
        <div>
          <TableContainer>
            <Table size={{base:"sm", md:"md", lg:"lg"}}>
              <Thead>
                <Tr>
                  
                  <Th>Email</Th>
                  <Th>Name</Th>
                  <Th>Role</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
};

export default Allusers;