import { createSlice } from "@reduxjs/toolkit"

const initialState = [{
    id:'',
    coefficient:'',
    matiereId:'',
    filiereId: ''
}]

export const CoefSlice = createSlice({
    name:'coefficient',
    initialState,
    reducer: {
        addCoef:(state, action) => {
            state.push(action.payload)
        },
        deleteCoef:(state, action) => {
            state = state.filter(c => c.id !== action.payload)
            return state;
        },
        modifCoef:(state, action) => {
            
        }
    }
})

export const {addCoef, deleteCoef, modifCoef} = CoefSlice.actions;