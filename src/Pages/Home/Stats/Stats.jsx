import axios from "axios";
import React, { useEffect, useState } from "react";
import Headline from "../../../components/Headline";
import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const Stats = () => {
  const [stats, setStats] = useState({});
  useEffect(() => {
    axios("https://summertime-levelup.onrender.com/stats").then((data) => {
      console.log(data.data);
      setStats(data.data);
    });
  }, []);
  return (
    <div>
      <div className="mt-20 mb-5">
        <Headline headline="Stats"></Headline>
      </div>
      <div>
        <h3 className="italic md:text-center text-lg md:text-2xl ml-10 mb-10">
          So far we have successfully managed,
        </h3>
      </div>
      {
        <Fade direction="down">
          <div className="flex md:flex-row flex-col mb-10 mx-28 space-y-6 md:space-y-0 md:mx-36 border-2 border-blue-400 rounded-lg bg-blue-100 p-4">
            <Stat className="flex justify-center">
              <StatLabel fontStyle={"italic"} fontSize={"x-large"}>
                Users
              </StatLabel>
              <StatNumber className="text-center text-green-700">
                {stats.users}
              </StatNumber>
            </Stat>
            <Stat className="flex justify-center">
              <StatLabel fontStyle={"italic"} fontSize={"x-large"}>
                Instructors
              </StatLabel>
              <StatNumber className="text-center text-blue-700">
                {stats.instructors}
              </StatNumber>
            </Stat>
            <Stat className="flex justify-center">
              <StatLabel fontStyle={"italic"} fontSize={"x-large"}>
                Classes
              </StatLabel>
              <StatNumber className="text-center text-yellow-700">
                {stats.classes}
              </StatNumber>
            </Stat>
          </div>
        </Fade>
      }
    </div>
  );
};

export default Stats;
