import { Typography } from '@mui/material'
import React from 'react'
import styles from './header.module.scss';

export const Header = () => {
  return (
    <Typography
      variant='h3'
      className={styles.header}
    >
      Wishlist
    </Typography>
  )
}
