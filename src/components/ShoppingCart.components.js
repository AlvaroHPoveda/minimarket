import React, { useState } from 'react'
import '../styles/shopping.style.css'

const ShoppingCartComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='compProduct'>
      <div className='title'>
        <strong>Shopping Cart</strong>
        <hr />
      </div>            
      <div className='part-shopping'>
        <div className='subPart-shopping'>
          <p className='cant-shopping'>10</p>
          <img className='product-shopping' src="https://i.postimg.cc/rFPrDBnr/CEREAL-ZUCARITAS-F.png" alt="" />
        </div>
        <div></div>
      </div>
      <hr />  
      <div className='part-shopping'>
        <div></div>
        <div className='subPart-shopping'>
          <p className='ptotal'>Total:</p><p className='pValorTotal'>$10.00</p>
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