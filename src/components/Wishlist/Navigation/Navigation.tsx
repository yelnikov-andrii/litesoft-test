import { Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import styles from './navigation.module.scss';

export const Navigation = () => {
  return (
    <Toolbar className={styles.navigation}>
      <IconButton 
        color="inherit" aria-label="home"
        className={styles.navigation__iconbutton}
      >
        <HomeOutlinedIcon 
          color='action'
        />
      </IconButton>
      <Box 
        className={styles.navigation__iconbutton}
      >
        <PlayArrowOutlinedIcon 
          color='primary'
        />
      </Box>
      <Typography 
        variant="h6" 
        component="div" 
        sx={{ flexGrow: 1 }}
        className={styles.navigation__txt}
        >
        Wishlist
      </Typography>
    </Toolbar>
  )
}
