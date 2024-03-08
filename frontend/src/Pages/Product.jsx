import React, { useContext } from 'react'
import { Shopcontext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import Productdisplay from '../Components/Productdisplay/Productdisplay';
import Description from '../Components/DexcriptionBox/Description';
import Relatedproducts from '../Components/RelatedProducts/Relatedproducts';


const Product = () => {
  const {all_product}=useContext(Shopcontext);
  const {productId}=useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div className="product">
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <Description/>
      <Relatedproducts/>
    </div>
  )
}

export default Product