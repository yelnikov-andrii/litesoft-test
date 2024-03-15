import { Button, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react'
import { ActionsCell } from './ActionsCell';
import { baseUrl } from '@/constants/constants';
import Image from 'next/image';
import { FilteredProductInt } from '@/types/products';

export const Body: React.FC <{products: FilteredProductInt[]}> = ({ products }) => {
  return (
    <TableBody>
    {products && products?.map((product: FilteredProductInt) => {
        return (
          <TableRow 
            hover 
            role="checkbox"
            tabIndex={-1} 
            key={product.id}
          >
            <TableCell>
              <Image 
                src={`${baseUrl}/${product.photos[3]?.imageUrl}` || ''}
                alt={product.photos[3]?.imageUrl ? 'Sport product' : 'No image'}
                width={100}
                height={100}
              />
            </TableCell>
            <TableCell>
              {product.id}
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
              }}
            >
              {product.name}
            </TableCell>
            <TableCell>
              {product.material}
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
              }}
            >
              {product.price} $
            </TableCell>
            <ActionsCell />
          </TableRow>
        );
      })}
    </TableBody>
  )
}
