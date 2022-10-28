import React from 'react';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/header.style.css';

const HeaderComponents = ({ flag, setFlag }) => {
  const params = useParams();
  const total = useSelector(state => state.counter)

  const functionsStore = () => {
    let arrayStore = [];
    total.map( product => 
      product.cant > 0 && 
      arrayStore.push( JSON.stringify(product,null,2) )    
    )
    window.localStorage.setItem('infoCart', arrayStore)
  }

  return (
    <div className='container'>
        <div className='divPart01'>
          <Link to={'index'}>
            <img className='logo' src="https://i.postimg.cc/bJ6F6dGm/kisspng-microsoft-store-computer-icons-windows-phone-store-mobile-learning-app-by-paradiso-lms-downl.png" alt="logoStore" />
          </Link>
        </div>
        <div>
          { flag ?
          (<Link to={'shopping'} className='divPart02' >
            <button className='buttonHeader'
               onClick={() => {
                 setFlag(false)
                 functionsStore()
                 } }>
                <img className='carrito' src="https://i.postimg.cc/wT7wjWSb/pngegg.png" alt="carrito" />
                <p className='price'>${ params.productId ? (total[total.length - 1].total).toFixed(2) : (0.00).toFixed(2) }</p>
            </button>
          </Link>)
            :
          (<div className='divPart02-shopping' >
            <button className='buttonHeader-shopping'>
                <img className='carrito-shopping' src="https://i.postimg.cc/90GV43Qt/icon-shopping.png" alt="carrito" />
                <p className='price-shopping'>${(total[total.length - 1].total).toFixed(2)}</p>
            </button>
            <Link to={'index'} className='linkBtnClose'>
                <button className='btnClose' onClick={() => setFlag(true)}>x</button>
            </Link>
          </div>)
          }
        </div>
    </div>
  )
}
export default HeaderComponents;
