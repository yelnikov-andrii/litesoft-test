import { Box, Button, TableCell } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const ActionsCell = () => {
  return (
    <TableCell>
      <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: '30px'
    }}>
        <Button variant='outlined'>
          Add to cart
        </Button>
        <FavoriteIcon 
          color='primary'
        />
        <CloseIcon
        />
      </Box>
    </TableCell>
  )
}
