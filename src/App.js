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
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png'

const App = () => {
  return (
    <>

      <BrowserRouter>
      <Navbar />
      {/* <Hero /> */}
        <Routes>
          <Route path='/' element={<ShopPage />}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />}  />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />

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