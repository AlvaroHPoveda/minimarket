import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.style.css';

const HeaderComponents = () => {
  return (
    <div className='container'>
        <div className='divPart01'>
          <Link to={'index'}>
            <img className='logo' src="https://i.postimg.cc/bJ6F6dGm/kisspng-microsoft-store-computer-icons-windows-phone-store-mobile-learning-app-by-paradiso-lms-downl.png" alt="logoStore" />
          </Link>
        </div>
        <div>
          <Link to={'shopping'} className='divPart02' >
            <button className='buttonHeader'>
                <img className='carrito' src="https://i.postimg.cc/wT7wjWSb/pngegg.png" alt="carrito" />
                <p className='price'>$25.50</p>
            </button>
          </Link>
            {/* <div className='divPart02-shopping' >
              <button className='buttonHeader-shopping'>
                  <img className='carrito-shopping' src="https://i.postimg.cc/90GV43Qt/icon-shopping.png" alt="carrito" />
                  <p className='price-shopping'>$25.50</p>
              </button>
              <Link to={'index'} className='linkBtnClose'>
                  <button className='btnClose'>x</button>
              </Link>
            </div> */}
        </div>
    </div>
  )
}
export default HeaderComponents;
