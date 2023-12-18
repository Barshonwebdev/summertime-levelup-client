import { createBrowserRouter } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import Main from "../Layout/Main";
import Homepage from "../Pages/Home/Homepage/Homepage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Homepage></Homepage>
      },
      
    ]
  },
]);

export default router;
