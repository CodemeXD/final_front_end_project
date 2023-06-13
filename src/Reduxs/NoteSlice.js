import { createSlice } from "@reduxjs/toolkit"

const initialState = [{
    id:'',
    note: '',
    matiereId:'',
    filiereId: ''
}]

export const NoteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload)
        },
        deleteNote: (state, action) => {
            state = state.filter(n => n.id !== action.payload)
        },
        modifNote: (state, action) => {}
    }
})

export const {addNote, deleteNote, modifNote} = NoteSlice.actions