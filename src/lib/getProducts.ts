import { baseUrl } from '@/constants/constants';
import axios from 'axios';

export default async function getProducts(categoryId: number) {
  if (categoryId !== 0) {
    const response = await axios.get(`${baseUrl}/products-by-category?category=${categoryId}`);

    return response?.data;
  } else {
    const response = await axios.get(`${baseUrl}/products`);
    return response?.data;
  }
}