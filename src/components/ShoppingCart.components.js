import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../styles/shopping.style.css'

const ShoppingCartComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const productShopping = useSelector(state => state.counter)

  return (
    <div className='compProduct'>
      <div className='title'>
        <strong>Shopping Cart</strong>
        <hr />
      </div>            
      <div className='subPart-shopping'>
          {
            productShopping.map( product => 
              product.cant > 0 && 
              <>
                <div key={product.id} className='li-shopping'>
                  <p className='cant-shopping'>{product.cant}</p>
                  <img className='product-shopping' src={product.url} alt="" />
                </div> 
                <hr />

              </>                         
            )
          }  
       </div>
      
      <div className='part-shopping'>
        <div></div>
        <div className='subPart-shopping'>
          <p className='ptotal'>Total:</p><p className='pValorTotal'>{(productShopping[productShopping.length - 1].total).toFixed(2)}</p>
        </div>
      </div>
      <button onClick={openModalHandler} className='btnWompi'>
        <img className='imgWompi' src="https://i.postimg.cc/3ryj505X/Captura-de-pantalla-2022-10-26-150628-removebg-preview.png" alt="" />
        <p className='p01Wompi'>Paga con</p><p className='p02Wompi'>Wompi</p>
      </button>

      <div className="modal-container">   
        {isOpen === true ? (
          <div className="modal-backdrop" onClick={openModalHandler}>
            <div className="modal-view" onClick={(e) => e.stopPropagation()}>
              <span onClick={openModalHandler} className="close-btn">
                &times;
              </span>
              <img className='imgRunway' src="https://i.postimg.cc/qRBrY6my/modal.png" alt="" />
            </div>
          </div>
        ) : null}
      </div>

    </div>
  )
}
export default ShoppingCartComponents