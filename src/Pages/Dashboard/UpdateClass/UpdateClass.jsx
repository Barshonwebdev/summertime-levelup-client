import { Button } from '@chakra-ui/react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData,  } from 'react-router-dom';
import Swal from 'sweetalert2';
const image_token = import.meta.env.VITE_IMGTOKEN;
const UpdateClass = () => {
     const {
       register,
       handleSubmit,
       reset,
       formState: { errors },
     } = useForm();
     const img_hosting_url = `https://api.imgbb.com/1/upload?&key=${image_token}`;
     const onSubmit=(data)=>{
        console.log(data);
        const formdata= new FormData();
        formdata.append('image', data.classPhoto[0]);
        fetch(img_hosting_url,{
            method:'POST',
            body:formdata,
        })
        .then(res=>res.json())
        .then(imgResponse=>{
            console.log(imgResponse);
            const updateClassEntry={
                className:data.className,
                classPhoto:imgResponse.data.url,
                seats:data.seats,
                price:data.price,
            };

            axios.patch(`http://localhost:5000/updateclassform/${classroomData._id}`,updateClassEntry)
            .then(data=>{
                console.log(data);

            })

            Swal.fire(`Classroom updated!`);
            reset();
        })
     }
    const classroomData=useLoaderData();
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
               <img className='w-40 rounded' src={classroomData.classPhoto} alt="" />
              </div>
              <label>Class Name: </label>
              <input
                className=" border text-violet-600 border-black rounded-lg px-2"
                type="text"
                defaultValue={classroomData.className}
                {...register("className", { required: true })}
              />
            </div>
            <div>
              <label>Class Image: </label>
              <input
                type="file"
                placeholder="Class Picture"
                {...register("classPhoto", { required: true })}
              />
            </div>
            <div>
              <label>Available Seats: </label>
              <input
                className=" border text-violet-600 border-black rounded-lg px-2 w-1/6"
                type="number"
                defaultValue= {classroomData.seats}
                {...register("seats", { required: true })}
              />
            </div>
            <div>
              <label>Price($): </label>
              <input
                className=" border text-violet-600 border-black rounded-lg px-2 w-1/5"
                type="number"
                defaultValue= {classroomData.price}
                {...register("price", { required: true })}
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