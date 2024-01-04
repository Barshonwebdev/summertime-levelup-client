import { useEffect, useState } from "react";

const useAllInstructors = () => {
  const [allInstructors, setAllInstructors] = useState([]);

  useEffect(() => {
    fetch(`https://summertime-levelup-server.vercel.app/users/instructors`)
      .then((res) => res.json())
      .then((data) => {
        setAllInstructors(data);
        console.log(data);
      });
  }, []);

  return [allInstructors];
};

export default useAllInstructors;
