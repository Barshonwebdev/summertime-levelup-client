import axios from "axios";
import { useEffect, useState } from "react";

const useAllClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  const [homepageClasses, setHomepageClasses] = useState([]);
  useEffect(() => {
    axios(`https://summertime-levelup.onrender.com/classes`).then((data) => {
      console.log(data.data);
      setAllClasses(data.data.allresult);
      setHomepageClasses(data.data.homepageResult);
    });
  }, []);

  return [allClasses, homepageClasses];
};

export default useAllClasses;
