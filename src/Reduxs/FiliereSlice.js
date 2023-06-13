import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id:"",
    libelle:"",
    description:''
}]

export const FiliereSlice = createSlice({
    name: 'filiere',
    initialState,
    reducers : {
        addFiliere : (state, action) =>{
            state.push(action.payload)
        },
        deleteFiliere : (state, action) =>{
            state = state.filter(fil => fil.id !== action.payload)
            return state
        },
        modifFiliere : (state, action) =>{}
    }
})

export const {addFiliere, deleteFiliere, modifFiliere} = FiliereSlice.actions;