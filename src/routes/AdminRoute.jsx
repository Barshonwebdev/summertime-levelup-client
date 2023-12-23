import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import { Progress } from '@chakra-ui/react';

const AdminRoute = ({children}) => {
    const {user,loading}=useAuth();
    const[isAdmin]=useAdmin();

    if(loading){
         return <Progress colorScheme="red" size="xs" isIndeterminate />;
    }

    if(user && isAdmin){
        return children;
    }
   
};

export default AdminRoute;