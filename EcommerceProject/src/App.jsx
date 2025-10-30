import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductDetail from './Components/Products/Pure/ProductDetail'
import  CartProvider  from './Context/cartProvider'
import Cart from './Components/Cart/Cart'

function App() {


  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<HomePage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>


    </>
  )
}

export default App
