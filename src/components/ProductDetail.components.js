import React from 'react';
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux';
import { setEspecificValue } from '../redux/slices/counter';

import { getProduct } from '../api/data.api'
import '../styles/products.style.css'

const ProductDetailComponents = () => {
  const params = useParams();
  const product = getProduct(+params.productId); 
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <div className='compProduct'> 
      <div className='title'>
        <strong>Product</strong>
        <hr />
      </div>            
      <div className='part01'>
        <p className='cant'>{counter[+params.productId - 1].cant}</p>
        <img className='productDetail' src={product.url} alt="" />
      </div>
      <div className='part02'>
        <div className='namePrice'>
          <p className='pName'>{product.name}</p>
          <p className='pPunto'>*</p>
          <p className='pPrice'>${(product.price).toFixed(2)}</p>
        </div>
        <div className='divButton'>
          <button onClick={() => dispatch(setEspecificValue({id : +params.productId, number : -1}))} className='buttonSub'>-</button>
          <button onClick={() => dispatch(setEspecificValue({id : +params.productId, number : +1}))} className='buttonAdd'>+</button>
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