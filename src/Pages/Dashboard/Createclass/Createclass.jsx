import React from 'react';
import { useForm } from 'react-hook-form';

const Createclass = () => {
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm();
     const onSubmit = (data) => console.log(data);
     console.log(errors);
    return (
      <div>
        <h3 className="text-2xl text-center my-5 text-orange-600">
          Create a Classroom
        </h3>
        <div>
          <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Class Name"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <input
                type="file"
                placeholder="Class Picture"
                {...register("picture", {})}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Available Seats"
                {...register("seats", { required: true })}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>

            <div>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    );
};

export default Createclass; 