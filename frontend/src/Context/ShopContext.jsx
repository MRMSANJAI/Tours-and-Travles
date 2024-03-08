import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

export const Shopcontext =createContext(null);
 
const getDefaultCart =()=>{
    let cart ={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
    }
    return cart;
  } 

const ShopcontextProvider=(props)=>{
    
    const [cartItems,setCartItems]=useState(getDefaultCart());
     
     const addToCart=(itemId)=>{
       setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
       console.log(cartItems);
     }
     const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
      }

      const contextValue ={all_product,cartItems,addToCart,removeFromCart};


    return(
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopcontextProvider;