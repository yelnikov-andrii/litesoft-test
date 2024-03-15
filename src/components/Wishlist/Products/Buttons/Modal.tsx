import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import styles from './buttons.module.scss';
import { CategoryInt, CategoryObjInt, SelCategoryInt } from '@/types/category';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap'
};

interface Props {
  open: boolean;
  handleClose: () => void;
  categoryObj: CategoryObjInt;
}

export default function BasicModal({ open, handleClose, categoryObj }: Props) {
  console.log(categoryObj)
  const notCheckedCategories = React.useMemo(() => {
    const filteredCategories = categoryObj.categories.filter((cat: CategoryInt) => {
      if (!categoryObj.selectedCategories.some((selcat: SelCategoryInt) => selcat.id === cat.id)) {
        return cat;
      }
    });
    if (!categoryObj.selectedCategories.some((selCat: SelCategoryInt) => selCat.id === 0)) {
      filteredCategories.push({id: 0, name_en: 'All products', name_ukr: 'Усі продукти', photo: ''});
    }

    return filteredCategories;
  }, [categoryObj.selectedCategories, categoryObj.categories]);


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {notCheckedCategories.map((category: CategoryInt) => (
            <Button 
            variant="contained"
            key={category.name_en}
            onClick={() => {
              categoryObj.setSelectedCategories((prev: SelCategoryInt[]) => [...prev, category])
            }}
        >
          {category.name_en}
        </Button>
          ))}
        </Box>
      </Modal>
    </div>
  );
}