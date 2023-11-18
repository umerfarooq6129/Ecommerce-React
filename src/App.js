import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import ShopPage from './Pages/ShopPage';
import Footer from './Components/Footer/Footer';
// import Hero from './Components/Hero/HeroSection';

const App = () => {
  return (
    <>

      <BrowserRouter>
      <Navbar />
      {/* <Hero /> */}
        <Routes>
          <Route path='/' element={<ShopPage />}/>
          <Route path='/mens' element={<ShopCategory category="men" />}  />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kids" />} />

          <Route path='product' element={<Product /> }>
            <Route path=':productId' element={<Product />} />
          </Route>

          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App