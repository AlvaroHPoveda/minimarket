import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderComponents, StoreComponents } from './index';
import '../styles/layout.style.css';

const LayoutComponents = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      <HeaderComponents flag = {flag} setFlag = {setFlag} />
      <div className='containerMain'>
        <StoreComponents setFlag = {setFlag} />
        <Outlet/>
      </div>
    </div>
  )
}
export default LayoutComponents;