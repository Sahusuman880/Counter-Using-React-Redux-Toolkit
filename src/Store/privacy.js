import { createSlice } from "@reduxjs/toolkit";

const privacyToggleSlice=createSlice({
  name:"privacy",
  initialState:false,
  reducers:{
    toggle:(state)=>{
      return state=!state
    }
  }
})
export const privacyAction=privacyToggleSlice.actions;
export default privacyToggleSlice;