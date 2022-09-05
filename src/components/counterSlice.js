import { createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    basket: [],
    total:0,
    user:null
  },
  reducers: {
    addItem:(state, action)=>{
        state.basket.push(action.payload);
        state.total+=action.payload.price;
    },
    removeItem:(state, action)=>{
       state.basket.splice(state.basket.findIndex((arrow) => arrow.id === action.payload.id), 1);
    },
    removeItemPrice:(state, action)=>{
        state.total-=action.payload.price;
    },
    updateUser:(state,action)=>{
      state.user=action.payload.user;
    },
    emptyBasket:(state)=>{
        state.basket=[];
        state.total=0;
    }
  },
})


export const {addItem,removeItem ,removeItemPrice,updateUser,emptyBasket} = counterSlice.actions

export default counterSlice.reducer;