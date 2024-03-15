import { baseUrl } from "@/constants/constants";
import axios from "axios";

export const fetchPhotos = async (productId: number) => {
  try {
    const response = await axios.get(`${baseUrl}/products-photos/${productId}`);
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};