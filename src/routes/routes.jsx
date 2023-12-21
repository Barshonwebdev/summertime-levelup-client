import { createBrowserRouter } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import Main from "../Layout/Main";
import Homepage from "../Pages/Home/Homepage/Homepage";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import Notfound from "../Pages/Notfound/Notfound";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
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
        path:'/signin',
        element:<Signin></Signin>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      
    ]
  },
  {
    path:"*",
    element:<Notfound></Notfound>
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children: [
      {

      }
    ]
  }
]);

export default router;
