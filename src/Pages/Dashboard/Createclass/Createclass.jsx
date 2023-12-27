import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
const image_token = import.meta.env.VITE_IMGTOKEN;
const Createclass = () => {
     const {
       register,
       handleSubmit,
       reset,
       formState: { errors },
     } = useForm();
     const img_hosting_url = `https://api.imgbb.com/1/upload?&key=${image_token}`;
     const {user}=useAuth();
     const onSubmit = (data) => {
      console.log(data);
      const formdata= new FormData();
      formdata.append('image',data.photo[0]);
      fetch(img_hosting_url,{
        method:'POST',
        body:formdata,
      })
      .then(res=>res.json())
      .then(imgResponse=>{
        console.log(imgResponse);
        const createClassEntry={
          instructorName:user.displayName,
          instructorEmail:user.email,
          className:data.name,
          classPhoto:imgResponse.data.url,
          seats:data.seats,
          price:data.price,
          status:'Pending',
        };

        axios.post("http://localhost:5000/createclass",createClassEntry)
        .then(result=>{
          console.log(result);
        })
        
       Swal.fire(`New class created!`);
        reset();
      
      })
     };
     console.log(errors);
    return (
      <div>
        <h3 className="text-2xl text-center my-5 text-orange-600">
          Create a Classroom
        </h3>
        <div>
          <form
            className="space-y-5 bg-gray-100 p-8 rounded-2xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="space-y-5 mb-4 ">
                <h3>
                  Instructor name:{" "}
                  <span className="text-violet-600">{user.displayName}</span>
                </h3>
                <h3>
                  Instructor email:{" "}
                  <span className="text-violet-600">{user.email}</span>
                </h3>
              </div>
              <label>Class Name: </label>
              <input
                className=" border text-violet-600 border-black rounded-lg px-2"
                type="text"
                placeholder="Name of classroom"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <label>Class Image: </label>
              <input
                type="file"
                placeholder="Class Picture"
                {...register("photo", { required: true })}
              />
            </div>
            <div>
              <label>Available Seats: </label>
              <input
                className=" border text-violet-600 border-black rounded-lg px-2 w-1/6"
                type="number"
                placeholder="seats"
                {...register("seats", { required: true })}
              />
            </div>
            <div>
              <label>Price($): </label>
              <input
                className=" border text-violet-600 border-black rounded-lg px-2 w-1/5"
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>

            <div className="flex justify-center">
              <button
                className="button hover:bg-orange-900 bg-orange-600 text-white p-3 rounded"
                type="submit"
              >
                Create Classroom
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Createclass; 