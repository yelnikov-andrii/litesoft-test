'use client'
import React from 'react'
import styles from './count.module.scss';

export const CountOfProducts = () => {
  const [countOfProducts, setCountOfProducts] = React.useState(0);
  return (
    <div className={styles.countOfProducts}>
      {countOfProducts} products
    </div>
  )
}
