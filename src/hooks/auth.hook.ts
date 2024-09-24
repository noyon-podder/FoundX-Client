import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { loginUser, registerUser } from "../services/AuthServices";

// register user
export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => toast.success("User Registration successfully"),
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// login user
export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => toast.success("User Login successfully"),
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
