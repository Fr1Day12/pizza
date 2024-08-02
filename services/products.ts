import { ApiRoutes } from "@/services/constants";
import { axiosInstance } from "@/services/instance";
import { Product } from "@prisma/client";

export const search = async (query: string): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>(
    ApiRoutes.SEARCH_PRODUCTS,
    {
      params: { query },
    }
  );
  return data;
};
