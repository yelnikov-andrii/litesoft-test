import React from 'react'
import { Navigation } from './Navigation/Navigation'
import { Header } from './Header/Header'
import { CountOfProducts } from './CountOfProducts/CountOfProducts'
import { Buttons } from './Buttons/Buttons'

export const Wishlist = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <CountOfProducts />
      <Buttons />
      <div>products</div>
    </div>
  )
}
