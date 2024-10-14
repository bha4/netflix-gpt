import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:"gpt",
    initialState:{
        showGPTSearch :false
    },
    reducers:{
        toggeleGPT:(state,action)=>{
            state.showGPTSearch=!state.showGPTSearch
        }    
    }
})

export const {toggeleGPT} = GPTSlice.actions;

export default GPTSlice.reducer;