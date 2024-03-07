import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product'

export const Shopcontext =createContext(null);

const ShopcontextProvider=(props)=>{
    
    const contextValue ={all_product};
    return(
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopcontextProvider;