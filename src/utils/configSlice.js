import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice ({
    name:"lang",
    initialState:{
        lang:"en"
    },
    reducers :{
        changeLang:(state,action)=>{
            state.lang =action.payload
        }
    }
})
export const {changeLang}=languageSlice.actions;
export default languageSlice.reducer