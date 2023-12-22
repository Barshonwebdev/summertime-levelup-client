
import { useForm } from "react-hook-form";
import { Card,  CardBody,  Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import loginimg from '../../assets/login.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const Signin = () => {
    const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const {signinUser,googleSignin,githubSignin}=useAuth();
    const navigate=useNavigate();
    const location= useLocation();
    const from=location.state?.from?.pathname || "/";
    const onSubmit = (data) => {
        signinUser(data.email,data.password)
        .then(result=>{
          if(result){
            reset();
            const loggedinUser=result.user;
            console.log(loggedinUser);
            Swal.fire(`User logged in successfully!(email:${loggedinUser.email})`)
            navigate(from, {replace:true});
          }
        })
    };

    const handleGoogleSignin=()=>{
      googleSignin()
      .then(result=>{

          reset();
          const loggedinUser = result.user;
          console.log(loggedinUser);
          const savedUser={
            name:loggedinUser.displayName,
            email:loggedinUser.email,
          }
          axios.post('http://localhost:5000/users', savedUser)
          .then(response=>{
            console.log(response.data);
             console.log(location);
            navigate(from, { replace: true });
             Swal.fire(
               `User logged in successfully!(email:${loggedinUser.email})`
             );
             
          })
         
         
        }
      )
    }
    const handleGithubSignin=()=>{
      githubSignin()
      .then(result=>{
        
          reset();
          const loggedinUser = result.user;
          console.log(loggedinUser);
          const savedUser={
            name:loggedinUser.displayName,
            email:loggedinUser.email,
          }
          axios.post('http://localhost:5000/users',savedUser)
          .then(response=>{
            console.log(response.data);
              Swal.fire(
                `User logged in successfully!(email:${loggedinUser.email})`
              );
              navigate(from,{replace:true});
          })
          
        }
      )
    }
    console.log(errors);
    return (
      <div>
        {/*  */}
        <Card
          direction={{ base: "column-reverse", sm: "row" }}
          overflow="hidden"
          justify="center"
          align="center"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "400px" }}
            src={loginimg}
            alt="martial art image"
          />

          <Stack>
            <CardBody>
              <div className="flex flex-col justify-center items-center rounded-xl bg-red-900 text-yellow-500 p-5">
                <h2 className="text-4xl mb-4 font-cursive">
                  Summertime LevelUp
                </h2>
                <h3 className="text-3xl mb-4 "> Sign In!</h3>
                <form
                  className="space-y-5 flex flex-col justify-center items-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
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

                  <div className="flex justify-center">
                    <input
                      className="bg-white font-semibold mt-3 py-1 px-4 rounded-lg text-red-600  hover:bg-blue-900 hover:text-white"
                      type="submit"
                      value="Sign In"
                    />
                  </div>
                </form>
                <div className="flex flex-col justify-center items-center space-y-4 mt-4">
                  <p>Or,</p>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-700 text-white rounded-lg">
                      <button onClick={handleGoogleSignin} className="flex p-2 items-center">
                        <FaGoogle className="mr-2"></FaGoogle>SignIn
                      </button>
                    </div>
                    <div className="bg-slate-600 text-white rounded-lg">
                      <button onClick={handleGithubSignin} className="flex p-2 items-center">
                        <FaGithub className="mr-2"></FaGithub>Login
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-white text-sm">
                      Don`t have an account? Please{" "}
                      <Link
                        className="text-yellow-600 font-bold p-1 rounded"
                        to="/signup"
                      >
                        Signup!
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Stack>
        </Card>
      </div>
    );
};

export default Signin;