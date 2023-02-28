import { createSlice } from "@reduxjs/toolkit";


const initialState={
    stoke:false,
    brands:[],
    keyword:"",
};

export const filterSlice=createSlice({
    name:'filter',
    initialState,
    reducers:{

        toggle:(state)=>{
            state.stoke=!state.stoke;
        },
        toggleBrands:(state,action)=>{
            if(!state.brands.includes(action.payload)){
                state.brands.push(action.payload);
            }else{
                state.brands=state.brands.filter(brand=>brand!==action.payload);
            }
        }
    },
});

export const {toggle,toggleBrands}=filterSlice.actions;

export default filterSlice.reducer;