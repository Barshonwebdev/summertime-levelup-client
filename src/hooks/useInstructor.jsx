import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useInstructor = () => {
  const { user } = useAuth();
  const [isInstructor, setIsInstructor] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/users/instructor/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsInstructor(data.instructor);
        
      });
  }, [user?.email]);

  return [isInstructor];
};

export default useInstructor;
