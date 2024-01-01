import { Fade } from "react-awesome-reveal";

const Headline = ({headline}) => {
    return (
      <Fade>
        <div className=" ">
          <h3 className="ml-10 text-3xl text-gray-700  border-gray-300 inline  border-b-8 px-2 italic">
            {headline}
          </h3>
        </div>
      </Fade>
    );
};

export default Headline;