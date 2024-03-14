import { Box, Button } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './buttons.module.scss'

export const Buttons = () => {
  return (
    <Box className={styles.buttons}>
      <Box className={styles.buttons__block}>
      <Button
        variant='outlined'
        startIcon={<DeleteIcon />}
        className={`${styles.buttons__button} ${styles['buttons__button--active']}`}
      >
        All products
      </Button>
      <Button 
        variant="outlined" 
        startIcon={<DeleteIcon />}
        className={styles.buttons__button}
      >
        Phones
      </Button>
      <Button 
        variant="outlined"
        startIcon={<DeleteIcon />}
        className={styles.buttons__button}
      >
        Accessories
      </Button>
      </Box>
      <Box>
        <Button 
          variant='outlined' 
          color="primary"
        >
          New category
        </Button>
      </Box>
    </Box>
  )
}
