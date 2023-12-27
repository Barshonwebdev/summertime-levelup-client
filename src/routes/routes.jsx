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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AdminHome from "../Pages/Dashboard/Homepage/AdminHome";
import Allclasses from "../Pages/Dashboard/Allclasses/Allclasses";
import InstructorRoute from "./InstuctorRoute";
import InstructorHome from "../Pages/Dashboard/Homepage/InstructorHome";
import Createclass from "../Pages/Dashboard/Createclass/Createclass";
import Myclasses from "../Pages/Dashboard/Myclasses/Myclasses";
import Userhome from "../Pages/Dashboard/Homepage/Userhome";
import Paymenthistory from "../Pages/Dashboard/Paymenthistory/Paymenthistory";
import Selectedclasses from "../Pages/Dashboard/Selectedclasses/Selectedclasses";
import Enrolledclasses from "../Pages/Dashboard/Enrolledclasses/Enrolledclasses";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound></Notfound>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>,
      </PrivateRoute>
    ),
    children: [
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <Allusers></Allusers>
          </AdminRoute>
        ),
      },
      
      {
        path: "allclasses",
        element: (
          <AdminRoute>
            <Allclasses></Allclasses>
          </AdminRoute>
        ),
      },
     
      {
        path: "createclass",
        element: (
          <InstructorRoute>
            <Createclass></Createclass>
          </InstructorRoute>
        ),
      },
      {
        path: "myclasses",
        element: (
          <InstructorRoute>
            <Myclasses></Myclasses>
          </InstructorRoute>
        ),
      },
     
      {
        path: "paymenthistory",
        element: (
          <Paymenthistory></Paymenthistory>
        ),
      },
      {
        path: "selected",
        element: (
          <Selectedclasses></Selectedclasses>
        ),
      },
      {
        path: "enrolled",
        element: (
          <Enrolledclasses></Enrolledclasses>
        ),
      },
    ],
  },
]);

export default router;
