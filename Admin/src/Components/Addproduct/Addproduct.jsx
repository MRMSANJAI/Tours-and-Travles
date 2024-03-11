import React from 'react';
import'./Addproduct.css';

const Addproduct = () => {
  return (
   <div className="addproduct">
     <div className="addproducts-itemfield">
        <p>Product title</p>
        <input type='text' name='name'placeholder='Type here'/>
      </div>
      <div className="addproduct-pric">
        <div className="addproduct-itemfields">
            <p>Price</p>
            <input type="text" name="old_price" placeholder="Type here"className="" />
        </div>
        <div className="addproduct-itemfields">
            <p>Offer Price</p>
            <input type="text" name="new_price" placeholder="Type here"className="" />
        </div>
      </div>
     </div>
    )
}

export default Addproduct