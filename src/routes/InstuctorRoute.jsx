import useAuth from "../hooks/useAuth";
import { Progress } from "@chakra-ui/react";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [ isInstructor ] = useInstructor();

  if (loading) {
    return <Progress colorScheme="red" size="xs" isIndeterminate />;
  }

  if (user && isInstructor) {
    return children;
  }
};

export default InstructorRoute;
