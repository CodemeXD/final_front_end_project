import { createSlice } from "@reduxjs/toolkit"

const initialState = [{
    id:'',
    nom:'',
    prenom:'',
    email:''
}]

export const ProfSlice = createSlice({
    name:'professeur',
    initialState,
    reducers: {
        addProf:(state, action) => {
            state.push(action.payload)
        },
        deleteProf:(state, action) => {
            state = state.filter(e => e.id !== action.payload)
            return state;
        },
        modifProf:(state, action) => {
            
        }
    }
})

export const {addProf, deleteProf, modifProf} = ProfSlice.actions;