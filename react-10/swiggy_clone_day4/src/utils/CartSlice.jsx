import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart" ,
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{},
        clearCart: (state,action)=>{}
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;



