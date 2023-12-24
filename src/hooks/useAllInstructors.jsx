import { useEffect, useState } from "react";

const useAllInstructors = () => {
  
  
  const [allInstructors, setAllInstructors] = useState([]);
 
  useEffect(() => {
    fetch(`http://localhost:5000/users/instructors`)
      .then((res) => res.json())
      .then((data) => {
        setAllInstructors(data);
        console.log(data);
      });
  }, []);

  return [allInstructors];
};

export default useAllInstructors;
