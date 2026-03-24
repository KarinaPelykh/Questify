import {
  CurrentUserSchema,
  RefreshResponseSchema,
  SignupData,
  SignupResponseSchema,
} from "@/components/signup/model/contract";
import { axiosInstance } from "./axiosInstance";
import { parse } from "valibot";
import { SigninData } from "@/components/signin/model/contract";
import {
  QuestSchema,
  Quest,
  QuestResArr,
} from "@/components/form/model/contract";

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

export const currentUser = async () => {
  const res = await axiosInstance.get("auth/current");
  const parsedData = parse(CurrentUserSchema, res.data);

  return parsedData;
};

export const refresh = async () => {
  const res = await axiosInstance.post("auth/refresh");
  const parsedData = parse(RefreshResponseSchema, res.data);

  return parsedData;
};

export const signout = async () => {
  const res = await axiosInstance.post("auth/signout");
  // const parsedData = parse(RefreshResponseSchema, res.data);

  return res.data;
};

export const getQuests = async () => {
  const res = await axiosInstance.get("card");

  const parseData = parse(QuestResArr, res.data);

  return parseData;
};

export const addQuest = async (data: Quest) => {
  const res = await axiosInstance.post("card", data);
  const parseData = parse(QuestSchema, res.data);
  return parseData;
};

export const deleteQuest = async (idQuest: string) => {
  const res = await axiosInstance.delete(`card/${idQuest}`);
  return res.data;
};
