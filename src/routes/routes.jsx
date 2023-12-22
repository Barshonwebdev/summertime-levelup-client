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
import Allusers from "../Pages/Dashboard/Allusers/Allusers";
import DashboardHomepage from "../Pages/Dashboard/Homepage/DashboardHomepage";
import PrivateRoute from "./PrivateRoute";
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
    element:<PrivateRoute><Dashboard></Dashboard>,</PrivateRoute>,
    children: [
      {
        path:'homepage',
        element: <DashboardHomepage></DashboardHomepage>
      },
      {
        path:'allusers',
        element:<Allusers></Allusers>
      }
    ]
  }
]);

export default router;
