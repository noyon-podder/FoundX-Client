"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import FXInput from "@/src/components/form/FXInput";
import FXForm from "@/src/components/form/FXForm";
import { loginValidationSchema } from "@/src/schemas/login.schema";
import { useUserLogin } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/UI/Loading";
import { useUser } from "@/src/context/UserProvider";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const { setIsLoading: userLoading } = useUser();

  const { mutate: handelUserLogin, isPending, isSuccess } = useUserLogin();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handelUserLogin(data);
    userLoading(true);
  };

  // redirect to page
  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}
      <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
        <h3 className="my-2 text-xl font-bold">Login with FoundX</h3>
        <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
        <div className="w-[35%]">
          <FXForm
            resolver={zodResolver(loginValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="py-3">
              <FXInput label="Email" name="email" type="email" />
            </div>
            <div className="py-3">
              <FXInput label="Password" name="password" type="password" />
            </div>

            <div className="py-3">
              <Button size="lg" type="submit">
                Login
              </Button>
            </div>
          </FXForm>

          <div className="text-center">
            Already have an account ? <Link href={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
