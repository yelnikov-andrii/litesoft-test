import { baseUrl } from "@/constants/constants";
import axios from "axios";

export const fetchCategories = async () => {
  try {
    const response: any = await axios.get(`${baseUrl}/categories`);
    return response.data;
  } 
  catch(e: any) {
  }
}