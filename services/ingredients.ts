import { ApiRoutes } from "@/services/constants";
import { axiosInstance } from "@/services/instance";
import { Ingredient } from "@prisma/client";

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS);
  return data;
};
