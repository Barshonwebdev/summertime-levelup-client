import { createBrowserRouter } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import Main from "../Layout/Main";
import Homepage from "../Pages/Home/Homepage/Homepage";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Notfound from "../Pages/Notfound/Notfound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Homepage></Homepage>
      },
      {
        path:'/classes',
        element:<Classes></Classes>
      },
      {
        path:'/instructors',
        element:<Instructors></Instructors>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
  {
    path:"*",
    element:<Notfound></Notfound>
  }
]);

export default router;
