
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
              <div className=" rounded-xl bg-black text-orange-600 p-5">
                <h3 className="text-3xl mb-4">Please Sign Up!</h3>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <input
                      type="text"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="password"
                      {...register("password", { required: true })}
                    />
                  </div>
                  <div>
                    <input type="submit" />
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