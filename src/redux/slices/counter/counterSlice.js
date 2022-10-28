import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from '../../../api/data.api';

const initialState = getAllProducts();

export const counterSlice = createSlice({
  name: 'counter',
  initialState, 
  reducers: {
      setEspecificValue: (state, action) => {
        const { id, number } = action.payload
        const objProduct = state.find( product => product.id === id) 
        if (objProduct && objProduct.cant > 0 || (objProduct.cant === 0 && number !== -1)){
          objProduct.cant += number;
          objProduct.total = objProduct.cant * objProduct.price;
          let totalAdd = 0;
          state.map( product => {            
            if (product.name !== 'total'){
              totalAdd += product.total
            }
          })
        const totalProducts = state.find( product => product.name === 'total'); 
          totalProducts.total = totalAdd;         
        }           
      }
    }
  })

export const { setEspecificValue } = counterSlice.actions;
