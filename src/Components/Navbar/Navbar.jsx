import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

import Logo from '../Assets/logo.png'
import CartIcon from '../Assets/cart_icon.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop")

  return (
    <>
        <div className="navbar">
            <div className="nav-logo">
                <img src={Logo} alt="" />
                <p>MOSTRO</p>
            </div>
            <ul className="nav-menu" >
                <li onClick={()=> {setMenu("shop")}}> <Link to='/' style={{textDecoration : 'none'}} >Shop</Link>  {menu==="shop" ?  <hr /> : <></> }</li>
                <li onClick={()=> { setMenu("mens")}}>  <Link to='/mens' style={{textDecoration : 'none'}}>Men</Link> {menu==="mens" ? <hr /> : <></>} </li>
                <li onClick={()=> { setMenu("womens")}}> <Link to='/womens' style={{textDecoration : 'none'}}>Women</Link> {menu==="womens" ? <hr /> : <></> } </li>
                <li onClick={()=> {setMenu("kids")}}> <Link to='/kids' style={{textDecoration : 'none'}}>Kids</Link> {menu==="kids" ? <hr /> : <></> } </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>login</button></Link>
                <Link to='/cart'><img src={CartIcon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    </>
  )
}

export default Navbar