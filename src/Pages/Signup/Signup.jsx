import { useForm } from "react-hook-form";
import { Card, CardBody, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import registerimg from "../../assets/register.png";
import { Link } from "react-router-dom";
const Signup = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
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
              <form className="space-y-5 flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label>Name</label>
                  <br />
                  <input
                    className="rounded p-1"
                    type="text"
                    placeholder="Full Name"
                    {...register("name", { required: true })}
                  />
                </div>
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

                <div className="w-2/3 ml-3">
                  <label>Photo</label>
                  <br />
                  <input
                    className="rounded p-1 "
                    type="file"
                    
                    {...register("photo", { required: true })}
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
                    <p className="text-white text-sm">Already registered? Please <Link className="text-yellow-600 font-bold p-1 rounded" to='/signin'>SignIn</Link></p>
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
