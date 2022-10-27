import React from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../api/data.api';
import '../styles/store.style.css'

const StoreComponents = () => {
  const products = getAllProducts();
  return (
    <div className='store'>
      <div className='title'>
        <strong>Store</strong>
        <hr />
      </div>
      <ul className="divImg" > 
          { products.map((product)=>(
            <Link
            to={`/products/${product.id}`}
            key={product.id}
            >
              <img className='products' src={product.url} alt="" />
            </Link>
          ))}      
      </ul>
    </div>
  )
}
export default StoreComponents;