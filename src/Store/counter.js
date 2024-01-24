import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
  name:"counter",
  initialState:{counterVal:0},
  reducers:{
    incrementByOne:(state)=>{
      state.counterVal++
    
    },
    decrementByOne:(state)=>{
      state.counterVal--;
    },
    increment:(state,action)=>{
      
      state.counterVal+=Number(action.payload);
    },
    decrement:(state,action)=>{
      state.counterVal-=Number(action.payload);
    }
    
  }
});
export const counterAction=counterSlice.actions;
export default counterSlice;