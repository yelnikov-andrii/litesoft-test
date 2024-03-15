'use client';
import { Box, Button } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './buttons.module.scss'
import BasicModal from './Modal';
import { CategoryObjInt, SelCategoryInt } from '@/types/category';

export const Buttons: React.FC <{ categoryObj: CategoryObjInt }> = ({ categoryObj }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (!categoryObj?.selectedCategories?.find((selcat: SelCategoryInt) => selcat.id === categoryObj.activeCategory)) {
      categoryObj.setActiveCategory(categoryObj.selectedCategories[0].id);
    }
  }, [categoryObj.selectedCategories]);

  return (
    <>
    <Box className={styles.buttons}>
      <Box className={styles.buttons__block}>
      {categoryObj.selectedCategories?.map((category: SelCategoryInt)=> (
        <Button 
          variant="outlined"
          key={category.name_en}
          onClick={() => {
            categoryObj.setActiveCategory(category.id)
          }}
          startIcon={
          <DeleteIcon 
            onClick={(e) => {
              e.stopPropagation();
              categoryObj.setSelectedCategories((selCategories: SelCategoryInt[]) => [...selCategories].filter(selCategory => selCategory.id !== category.id))
            }}
          />
      }
        className={categoryObj.activeCategory === category.id ? `${styles.buttons__button} ${styles['buttons__button--active']}` : styles.buttons__button}
      >
        {category.name_en}
      </Button>
      ))}
      </Box>
      <Box>
        <Button 
          variant='outlined' 
          color="primary"
          onClick={() => {
            handleOpen()
          }}
        >
          New category
        </Button>
      </Box>
    </Box>
      <BasicModal
        open={open}
        handleClose={handleClose}
        categoryObj={categoryObj}
      />
    </>
  )
}
