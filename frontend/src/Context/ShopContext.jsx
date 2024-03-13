import React, { createContext, useEffect, useState } from "react";

export const Shopcontext =createContext(null);
 
const getDefaultCart =()=>{
    let cart ={};
    for (let index = 0; index < 300+1; index++) {
        cart[index]=0;
    }
    return cart;
  } 

const ShopcontextProvider=(props)=>{

    const [all_product,setAll_Product]=useState([]);
    const [cartItems,setCartItems]=useState(getDefaultCart());

     useEffect(()=>{
          fetch('http://localhost:4000/allproducts')
          .then((response)=>response.json())
          .then((data)=>setAll_Product(data))
     },[])

     const addToCart=(itemId)=>{
       setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
       console.log(cartItems);
     }

     const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
      }

     const getTotalCartAmount=()=>{
      let totalAmount = 0;
      for(const item in cartItems)
      {
        if(cartItems[item]>0)
        {
          let itemInfo = all_product.find((product)=>product.id===Number(item))
          totalAmount += itemInfo.new_price * cartItems[item]
        }
      }
      return totalAmount;
     }

     const getTotalCartItems=()=>{
          let totalItems =0;
          for(const item in cartItems)
          {
            if(cartItems[item]>0)
            {
              totalItems+= cartItems[item];
            }
          }
          return totalItems
     }
     

      const contextValue ={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return(
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopcontextProvider;