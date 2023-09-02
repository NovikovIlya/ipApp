import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: '',
    anim: false,
};

export const sliceId = createSlice({
    name: 'sliceId',
    initialState,
    reducers: {
        addItem:(state,action)=>{
            state.value = action.payload
        },
        addAnim:(state)=>{
            state.anim = !state.anim
        }
    }
})

export const {addItem,addAnim} = sliceId.actions
export default sliceId.reducer