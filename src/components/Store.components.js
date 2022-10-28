import React from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../api/data.api';
import { useSelector } from 'react-redux';
import '../styles/store.style.css'

const StoreComponents = ({ setFlag }) => {
  const products = getAllProducts();
  const counter = useSelector(state => state.counter)
  return (
    <div className='store'>
      <div className='title'>
        <strong>Store</strong>
        <hr />
      </div>
      <ul className="divImg" > 
          { products.map((product)=>
            product.id !== products.length && counter[product.id - 1].cant > 0 ?
            (<div className='div-store'>
              <p className='cant-store'>{counter[product.id - 1].cant}</p>
              <Link
              to={`/products/${product.id}`}
              key={product.id}
              onClick={() => setFlag(true)}
              >
                <img className='products' src={product.url} alt="" />
              </Link>
            </div>
            )                   
            :(
            product.id !== products.length &&
            <Link
            to={`/products/${product.id}`}
            key={product.id}
            onClick={() => setFlag(true)}
            >
              <img className='products' src={product.url} alt="" />
            </Link>
            )
          )}      
      </ul>
    </div>
  )
}
export default StoreComponents;