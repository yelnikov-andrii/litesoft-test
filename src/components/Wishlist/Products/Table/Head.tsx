'use client'
import { TableCell, TableHead, TableRow } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
import Switch from '@mui/material/Switch';

interface Props {
  withImages: boolean;
  setWithImages: Dispatch<SetStateAction<boolean>>;
}

export const Head: React.FC <Props> = ({ withImages, setWithImages }) => {
  interface Column {
    id: 'photo' |'id' | 'name' | 'material' | 'price' | 'actions';
    label: string;
    minWidth?: number;
  }
  
  const columns: readonly Column[] = [
    {id: 'photo', label: 'Photo', minWidth: 80 },
    { id: 'id', label: 'Id', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'material', label: 'Material', minWidth: 50 },
    {id: 'price', label: 'Price', minWidth: 50},
  ];

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  function switchImage() {
    setWithImages(!withImages);
  }

  return (
    <TableHead>
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.id}
          style={{ minWidth: column.minWidth }}
        >
          {column.label}
        </TableCell>
      ))}
      <TableCell
        sx={{
          textAlign: 'right'
        }}
      >
        <Switch 
          {...label}
          checked={withImages}
          onChange={switchImage}
        />
        Image
      </TableCell>
    </TableRow>
  </TableHead>
  )
}
