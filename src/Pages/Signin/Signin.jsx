
import { useForm } from "react-hook-form";
import { Card,  CardBody,  Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import loginimg from '../../assets/login.png'
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Signin = () => {
    const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        
    };
    console.log(errors);
    return (
      <div>
        {/*  */}
        <Card
          direction={{ base: "column-reverse", sm: "row" }}
          overflow="hidden"
          variant="outline"
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
                      className="rounded p-1"
                      type="text"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div>
                    <label>Password</label>
                    <br />
                    <input
                      className="rounded p-1"
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
                  <p>Or,</p>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-700 text-white rounded-lg">
                        <button className="flex p-1 items-center"><FaGoogle className="mr-2"></FaGoogle>SignIn</button>
                    </div>
                    <div className="bg-slate-600 text-white rounded-lg">
                        <button className="flex p-1 items-center"><FaGithub className="mr-2"></FaGithub>Login</button>
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
                </form>
              </div>
            </CardBody>
          </Stack>
        </Card>
      </div>
    );
};

export default Signin;