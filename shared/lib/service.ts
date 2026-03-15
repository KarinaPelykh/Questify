import {
  SignupData,
  SignupResponseSchema,
} from "@/components/signup/model/contract";
import { axiosInstance } from "./axiosInstance";
import { parse } from "valibot";
import { SigninData } from "@/components/signin/model/contract";

export const signup = async (data: SignupData) => {
  const res = await axiosInstance.post("auth/signup", data);
  const parsedData = parse(SignupResponseSchema, res.data);
  return parsedData;
};

export const signin = async (data: SigninData) => {
  const res = await axiosInstance.post("auth/signin", data);
  const parserData = parse(SignupResponseSchema, res.data);
  return parserData;
};
