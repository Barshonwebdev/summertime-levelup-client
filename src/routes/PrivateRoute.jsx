import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Progress } from "@chakra-ui/react";



const PrivateRoute = ({children}) => {
    const { user,loading } = useAuth();
    const location = useLocation();
    console.log(location);
    if(loading){
       return <Progress colorScheme="red" size="xs" isIndeterminate />;
    }
    if(user){
        return children
    }
    else return <Navigate to='/signin' state={ {from:location} } replace></Navigate>
    
};

export default PrivateRoute;