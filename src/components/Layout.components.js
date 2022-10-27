import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderComponents, StoreComponents } from './index';
import '../styles/layout.style.css';

const LayoutComponents = () => {
  return (
    <div>
      <HeaderComponents/>
      <div className='containerMain'>
        <StoreComponents/>
        <Outlet/>
      </div>
    </div>
  )
}
export default LayoutComponents;