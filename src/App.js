import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import { LayoutComponents, ProductHomeComponents, 
          ProductDetailComponents, ShoppingCartComponents } from './components/index';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <HashRouter>
      <Routes>
          <Route path='/' element={<LayoutComponents/>}>
            <Route index element={<ProductHomeComponents/>}/>      
            <Route path='products/:productId' element={<ProductDetailComponents/>}/>      
            <Route path='shopping' element={<ShoppingCartComponents/>}/>      
          </Route>
          <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
