import React, { useState } from 'react';
import { useParams } from 'react-router'

import { getProduct } from '../api/data.api'
import '../styles/products.style.css'

const ProductDetailComponents = () => {
  const params = useParams();
  const product = getProduct(+params.productId);

  const [valor, setValor] = useState(0);

  const counter = (number) => {
    valor > 0 || (valor === 0 && number !== -1) ? setValor(valor + number) : setValor(0)
  }

  return (
    <div className='compProduct'> 
      <div className='title'>
        <strong>Product</strong>
        <hr />
      </div>            
      <div className='part01'>
        <p className='cant'>{valor}</p>
        <img className='productDetail' src={product.url} alt="" />
      </div>
      <div className='part02'>
        <div className='namePrice'>
          <p className='pName'>{product.name}</p>
          <p className='pPunto'>*</p>
          <p className='pPrice'>${product.price}</p>
        </div>
        <div className='divButton'>
          <button onClick={() => counter(-1)} className='buttonSub'>-</button>
          <button onClick={() => counter(+1)} className='buttonAdd'>+</button>
        </div>
      </div>
      <hr />    
      <div className='description'>
        <p>{product.description}</p>
      </div>
      <hr />  
    </div>
  )
}
export default ProductDetailComponents;