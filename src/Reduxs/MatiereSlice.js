import { createSlice } from "@reduxjs/toolkit"

const initialState = [{
    id: '',
    libelle: ''
}]

export const MatiereSlice = createSlice({
    name: 'matiere',
    initialState,
    reducers: {
        addMatiere : (state, action) => {
            state.push(action.payload)
        },
        deleteMatiere : (state, action) => {
            state = state.filter(m => m.id !== action.payload)
            return state
        },
        modifMatiere : (state, action) => {

        }
    }
})

export const {addMatiere, deleteMatiere, modifMatiere} = MatiereSlice.actions;