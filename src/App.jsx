import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductDetail from './Components/Products/Pure/ProductDetail'
import CartProvider from './Context/CartProvider.jsx'
import Cart from './Components/Cart/Cart'

import Footer from './Components/Footer/Footer'
import ProductFormContainer from './Components/adminComponents/ProductFormContainer/ProductFormContainer'
import MainLayout from './layouts/MainLayout'
import AdminLayout from './layouts/AdminLayout'
import RutaProtegida from './Components/RutaProtegida/RutaProtegida'
import Login from './Components/Login/Login'

function App() {


  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>


              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/products" element={<HomePage />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<HomePage />} />
              <Route path="/about" element={<HomePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Login />} />
              <Route path="alta-productos" element={
                <RutaProtegida>
                  <ProductFormContainer />
                </RutaProtegida>
              }/>
              
            </Route>

          </Routes>
          <Footer />
        </Router>
      </CartProvider>


    </>
  )
}

export default App
