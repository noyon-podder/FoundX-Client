"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

import FXInput from "@/src/components/form/FXInput";
import FXForm from "@/src/components/form/FXForm";
import { useUserRegistration } from "@/src/hooks/auth.hook";

export default function RegisterPage() {
  //! default values for crate a user
  const defaultValues = {
    name: "Mir Hussain",
    email: "mir@gmail.com",
    mobileNumber: "01711223344",
    password: "123456",
  };

  const { mutate: handleUserRegistration } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    console.log("Inside from User data", userData);

    handleUserRegistration(userData);
  };

  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
      <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Help Lost Items Find Their Way Home</p>
      <div className="w-[35%]">
        <FXForm defaultValues={defaultValues} onSubmit={onSubmit}>
          <div className="py-3">
            <FXInput label="Name" name="name" type="text" />
          </div>
          <div className="py-3">
            <FXInput label="Email" name="email" type="email" />
          </div>
          <div className="py-3">
            <FXInput label="Mobile Number" name="mobileNumber" type="text" />
          </div>
          <div className="py-3">
            <FXInput label="Password" name="password" type="password" />
          </div>

          <div className="py-3">
            <Button className="w-full" size="lg" type="submit">
              Register
            </Button>
          </div>
        </FXForm>
        <div className="text-center">
          Already have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}
