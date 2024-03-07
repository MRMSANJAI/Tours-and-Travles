import React, { useContext } from 'react'; 
import './CSS/Shopcategory.css'
import { Shopcontext } from '../Context/ShopContext';
import dropdowm_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';

const Shopcategory = (props) => {
  const {all_product} =useContext(Shopcontext)
  return (
    <div className="Shopcategory">
       <img className='shopcategory-banner' src={props.banner} alt=''/>
       <div className='shopcategory-indexSort'>
         <p>
          <span>Showing 1-12</span>  Out of 36 Products
         </p>
         <div className='shopcategory-sort'>
           Sort by <img src={dropdowm_icon}alt=''/>
         </div>
       </div>
       <div className="shopcategoryproducts">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
              return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
       </div>
       <div className='shopcategory-loadmore'>
         Explore More
       </div>
    </div>
  )
}

export default Shopcategory