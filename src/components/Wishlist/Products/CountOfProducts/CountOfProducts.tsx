'use client'
import React from 'react'
import styles from './count.module.scss';

export const CountOfProducts: React.FC <{count: number}> = ({ count }) => {
  return (
    <div className={styles.countOfProducts}>
      {count} products
    </div>
  )
}
