'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { Head } from './Table/Head';
import { Body } from './Table/Body';
import axios from 'axios';
import { baseUrl } from '@/constants/constants';
import { CountOfProducts } from './CountOfProducts/CountOfProducts';
import { Buttons } from './Buttons/Buttons';
import { fetchPhotos } from '@/helpers/fetchPhotos';
import { fetchCategories } from '@/helpers/fetchCategories';
import getProducts from '@/lib/getProducts';
import { FilteredProductInt, ProductInt } from '@/types/products';
import { CategoryInt, SelCategoryInt } from '@/types/category';

export const Products = () => {
  const [withImages, setWithImages] = React.useState(true);
  const [products, setProducts] = React.useState<ProductInt[]>([]);
  const [filteredProducts, setFilteredProducts] = React.useState<FilteredProductInt[]>([]);
  const [categories, setCategories] = React.useState<CategoryInt[]>([]);
  const [selectedCategories, setSelectedCategories] = React.useState<SelCategoryInt[]>([{ name_en: 'All products', id: 0 }]);
  const [activeCategory, setActiveCategory] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts(activeCategory);
      setProducts(products);
    };
  
    fetchData();
  }, [activeCategory]);

  React.useEffect(() => {
    const fetchData = async () => {
      const productsRemastered = await Promise.all(products.map(async (product: ProductInt) => {
          return {
            id: product.id,
            name: product.name_en,
            price: product.price,
            material: product.material_en,
            photos: await fetchPhotos(product.id)
          };
      }));
  
      let filteredProducts = productsRemastered;
      if (withImages) {
        filteredProducts = productsRemastered.filter((product: FilteredProductInt) => product.photos.length > 3);
      }
  
      setFilteredProducts(filteredProducts);
    };
  
    fetchData();
  
  }, [products, withImages]);

  React.useEffect(() => {
    const fetchData = async () => {
      const categories = await fetchCategories();
      setCategories(categories);
    }

    fetchData();
  }, []);

  React.useEffect(() => {
    setSelectedCategories(selCategories => [...selCategories, ...categories.slice(0, 3)]);
  }, [categories.length]);
  
  return (
    <>
      <CountOfProducts 
        count={filteredProducts.length}
      />
      <Buttons 
        categoryObj={
          {
            selectedCategories,
            setSelectedCategories,
            setActiveCategory,
            activeCategory,
            categories
          }
        }
      />
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <Head 
            withImages={withImages}
            setWithImages={setWithImages}
          />
          <Body 
            products={filteredProducts}
          />
        </Table>
      </TableContainer>
    </Paper>
    </>
  );
}