import React, { useContext } from 'react'
import { Shopcontext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';


const Product = () => {
  const {all_products}=useContext(Shopcontext);
  const {productId}=useParams();
  const product = all_products.find((e)=> e.id === Number(productId));
  return (
    <div className="product">
      <Breadcrum product={product}/>
    </div>
  )
}

export default Product