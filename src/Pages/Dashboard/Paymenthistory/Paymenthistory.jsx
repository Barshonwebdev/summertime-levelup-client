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
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
const Paymenthistory = () => {
  const { user } = useAuth();
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetch(
      `https://summertime-levelup-server.vercel.app/paymenthistory?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setHistory(data);
        console.log(data);
      });
  }, [user?.email]);
  return (
    <div>
      <p className="text-orange-600 text-4xl text-center my-10 italic">
        {" "}
        Payment History
      </p>
      <div className="hidden md:block">
        <Box overflowX="auto">
          <TableContainer>
            <Table overflowX="auto" size={{ base: "sm", md: "md", lg: "md" }}>
              <Thead>
                <Tr className="mx-auto">
                  <Th>Transaction ID</Th>
                  <Th>Date</Th>
                  <Th>Total($)</Th>
                  <Th>Item Quantity</Th>
                  <Th>Items</Th>
                </Tr>
              </Thead>
              <Tbody>
                {history.map((eachPayment) => (
                  <Tr key={eachPayment._id}>
                    <Td className="text-red-900">
                      {eachPayment.transactionId}
                    </Td>
                    <Td className="italic">{eachPayment.date}</Td>
                    <Td className="text-amber-700">{eachPayment.totalPrice}</Td>
                    <Td className="text-zinc-700-600">
                      {eachPayment.quantity}
                    </Td>
                    <Td className="text-green-600">
                      {eachPayment.itemsName.map((item) => (
                        <div>{item}</div>
                      ))}
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
                  <Th>TransactionID</Th>
                  <Th>Total($)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {history.map((eachPayment) => (
                  <Tr key={eachPayment._id}>
                    <Td className="italic">{eachPayment.transactionId}</Td>
                    <Td className="italic">{eachPayment.totalPrice}</Td>
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

export default Paymenthistory;
