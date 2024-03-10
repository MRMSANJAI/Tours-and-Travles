import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { IoIosArrowDropdown } from "react-icons/io";
import logo from '../Assets/logo.png'
import cart_icon from'../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../Context/ShopContext'

const Navbar = () => {
   const [menu,setMenu] = useState("shop");
   const{getTotalCartItems}=useContext(Shopcontext);
   const menuRef = useRef();
   const dropdown_toggle=(e)=>{
       menuRef.current.classList.toggle('nav-menu-visible')
       e.target.classList.toggle('open');
   }

  return (
    <div className='navbar'>
         <div className="nav-logo">
            <img src={logo} alt=''/>
            <p>SHOPPER</p>
         </div>
         <IoIosArrowDropdown onClick={dropdown_toggle} className='nav-dropdown'/>
         <ul ref={menuRef}className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration :'none'}} to='/'>Shop</Link>{ menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration :'none'}}to='/mens'>Men</Link>{ menu==="Mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration :'none'}} to='/womens'>Women</Link>{ menu==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration :'none'}}to='/kids'>Kids</Link>{ menu==="Kids"?<hr/>:<></>}</li>  
         </ul>
         <div className="nav-login-cart">
           <Link to='/login'> <button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon}alt=''/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
         </div>
    </div>
  )
}

export default Navbar