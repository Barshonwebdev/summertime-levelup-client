
import { useForm } from "react-hook-form";
import { Card,  CardBody,  Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import loginimg from '../../assets/login.png'
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
          justify='center'
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
                <h2 className="text-4xl mb-4 font-cursive">Summertime LevelUp</h2>
                <h3 className="text-3xl mb-4 "> Sign Up!</h3>
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
                    <label >Password</label>
                    <br />
                    <input
                    className="rounded p-1"
                      type="password"
                      placeholder="password"
                      {...register("password", { required: true })}
                    />
                  </div>
                  <div className="flex justify-center">
                    <input className="bg-white mt-3 py-1 px-4 rounded-lg text-blue-600  hover:bg-orange-600 hover:text-white" type="submit" value="Sign Up" />
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