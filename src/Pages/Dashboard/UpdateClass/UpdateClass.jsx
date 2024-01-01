import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateClass = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    const updateClassEntry = {
      className: data?.className,
      seats: data?.seats,
      price: data?.price,
    };

    axios
      .patch(
        `https://summertime-levelup.onrender.com/updateclassform/${classroomData._id}`,
        updateClassEntry
      )
      .then((data) => {
        console.log(data);
      });

    Swal.fire(`Classroom updated!`);
    reset();
    navigate("/dashboard/myclasses");
  };
  const classroomData = useLoaderData();
  console.log(classroomData);
  return (
    <div>
      <div>
        <h2 className="text-orange-600 text-center text-2xl">
          Classroom Update Form
        </h2>
      </div>
      <div className="my-5 ">
        <form
          className="space-y-5 bg-gray-100 p-8 rounded-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-5 ">
            <div className="flex justify-center ">
              <img
                className="w-40 rounded"
                src={classroomData.classPhoto}
                alt=""
              />
            </div>
            <label>Class Name: </label>
            <input
              className=" border text-violet-600 border-black rounded-lg px-2"
              type="text"
              defaultValue={classroomData.className}
              {...register("className", {})}
            />
          </div>

          <div>
            <label>Available Seats: </label>
            <input
              className=" border text-violet-600 border-black rounded-lg px-2 w-1/6"
              type="number"
              defaultValue={classroomData.seats}
              {...register("seats", {})}
            />
          </div>
          <div>
            <label>Price($): </label>
            <input
              className=" border text-violet-600 border-black rounded-lg px-2 w-1/5"
              type="number"
              defaultValue={classroomData.price}
              {...register("price", {})}
            />
          </div>

          <div className="flex justify-center">
            <button
              className="button hover:bg-orange-900 bg-orange-600 text-white p-3 rounded"
              type="submit"
            >
              Update Classroom
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center ">
        <Link to="/dashboard/myclasses">
          <Button colorScheme="linkedin">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateClass;
