import React, { useContext } from 'react'
import'./Productdisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { Shopcontext } from '../../Context/ShopContext';

const Productdisplay = (props) => {

    const {product}=props;
    const {addToCart}=useContext(Shopcontext);

  return (
   <div className="productdisplay">
      <div className="productdis-left">
        <div className="display-img-list">
            <img src={product.image}alt=''/>
            <img src={product.image}alt=''/>
            <img src={product.image}alt=''/>
            <img src={product.image}alt=''/>
        </div>
        <div className="pro-display-img">
            <img className='product-main-img'src={product.image}alt=''/>
        </div>
      </div>
      <div className="Productdis-right">
        <h1>{product.name}</h1>
        <div className="product-dis-right-star">
            <img src={star_icon}alt=''/>
            <img src={star_icon}alt=''/>
            <img src={star_icon}alt=''/>
            <img src={star_icon}alt=''/>
            <img src={star_dull_icon}alt=''/>
            <p>(122)</p>
        </div>
        <div className='product-right-price'>
           <div className="product-right-price-old">${product.old_price}</div>
           <div className="product-right-price-new">${product.new_price}</div>
      </div>
      <div className="prodis-right-des">
        A lightweighted, usually knitted, pullover shirt closefitting and with a rounde neckline and short sleeves ,worn as an undershirt or outer garment.
      </div>
      <div className="right-size">
        <h1>Select Size</h1>
        <div className="right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
      </div>
      <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      <p className='pro-dis-right-cat'><span>Category:</span> Women , T-shirt, Crop-Top</p>
      <p className='pro-dis-right-cat'><span>Tags:</span> Modern, Latest</p>
    </div>
   </div>
  )
}

export default Productdisplay