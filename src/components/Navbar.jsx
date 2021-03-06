import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/products/not">Product</Link> 
    </div>
  )
}

export default Navbar;