import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useInstructor = () => {
  const { user } = useAuth();
  const [isInstructor, setIsInstructor] = useState(false);
  const [allInstructors, setAllInstructors] = useState([]);
  useEffect(() => {
    fetch(
      `https://summertime-levelup-server.vercel.app/users/instructor/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsInstructor(data.instructor);
      });
  }, [user?.email]);

  useEffect(() => {
    fetch(`https://summertime-levelup-server.vercel.app/users/instructors`)
      .then((res) => res.json())
      .then((data) => {
        setAllInstructors(data);
        console.log(data);
      });
  }, []);

  return [isInstructor, allInstructors];
};

export default useInstructor;
