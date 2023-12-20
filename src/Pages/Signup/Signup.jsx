import { useForm } from "react-hook-form";
import { Card, CardBody, Flex, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import registerimg from "../../assets/register.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
const Signup = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error,setError]=useState('');
  const navigate=useNavigate();
  const {createUser,updateUser}=useAuth();
  const onSubmit = (data) => {
    console.log(data.name,data.password);
    if(data.password===data.confirm){
      if(data.password.length>=6){
    createUser(data.email,data.password)
    .then(result=>{
      if(result){
      const loggedinUser=result.user;
      console.log(loggedinUser);
      updateUser(data.name,data.photo)
      .then(result=>{

      });
      reset();
      Swal.fire(`User Account (email: ${loggedinUser.email}) Created`);
      navigate('/');

    }
    })
  }
  else {
    setError('Password must be atleast 6 characters')
  }
  }
  else {
    setError('Password didn`t match');
  }
    
  };
  console.log(errors);
  return (
    <div>
      {/*  */}
      <Card
        direction={{ base: "column-reverse", sm: "row-reverse" }}
        overflow="hidden"
        variant="outline"
        justify="center"
        align="center"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "400px" }}
          src={registerimg}
          alt="martial art image"
        />

        <Stack>
          <CardBody>
            <div className="flex flex-col justify-center items-center rounded-xl bg-red-900 text-yellow-500 p-5">
              <h2 className="text-4xl mb-4 font-cursive">Summertime LevelUp</h2>
              <h3 className="text-3xl mb-4 "> Sign Up!</h3>
              <form
                className="space-y-5 flex flex-col justify-center items-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label>Name</label>
                  <br />
                  <input
                    className="rounded p-1 text-black"
                    type="text"
                    placeholder="Full Name"
                    {...register("name", {  })}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <br />
                  <input
                    className="rounded p-1 text-black"
                    type="text"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div>
                  <label>Password</label>
                  <br />
                  <input
                    className="rounded p-1 text-black"
                    type="password"
                    placeholder="password"
                    {...register("password", { required: true })}
                  />
                </div>
                <div>
                  <label>Confirm Password</label>
                  <br />
                  <input
                    className="rounded p-1 text-black"
                    type="password"
                    placeholder="confirm password"
                    {...register("confirm", { required:true })}
                  />
                </div>

                
                  <div className="w-2/3 ml-3 ">
                    <label>Photo</label>
                    <br />
                    <input
                      className="rounded p-1 w-full "
                      type="file"
                      {...register("photo", {  })}
                    />
                  </div>
                
                <div className="flex justify-center">
                  <input
                    className="bg-white font-semibold mt-3 py-1 px-4 rounded-lg text-red-600  hover:bg-blue-800 hover:text-white"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
                <div>
                  <p className="my-2 text-center text-yellow-600">{error}</p>
                  <p className="text-white text-sm">
                    Already registered? Please{" "}
                    <Link
                      className="text-yellow-600 font-bold p-1 rounded"
                      to="/signin"
                    >
                      SignIn
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
};

export default Signup;
