import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState:0, 
  reducers: {
      setEspecificValue: (state, action) => {
        const { id, number } = action.payload
        const objProduct = state.find( product => product.id === id) 
        if (objProduct && objProduct.cant > 0 || (objProduct.cant === 0 && number !== -1)){
          objProduct.cant = objProduct.cant + number;
        }           
      }
    }
  })

export const { setEspecificValue } = counterSlice.actions;
