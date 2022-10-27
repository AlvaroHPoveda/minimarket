import React from 'react';
import '../styles/products.style.css'

const ProductHomeComponents = () => {
  return (
    <div className='compProduct'>
      <div className='title'>
        <strong style={{color:"#fff"}}>Product</strong>
        <hr />
      </div>   
      <div className='description'>
        <p>Please choose a product on the left</p>
      </div> 
    </div>
  )
}
export default ProductHomeComponents;