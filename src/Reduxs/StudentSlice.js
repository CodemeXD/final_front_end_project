import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
        id:'',
        nom:"",
        prenom:'',
        matricule:'',
        age:'',
        sexe:''
}]

export const StudentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        addStudent:(state, action) => {
            state.push(action.payload)
        },
        deleteStudent:(state, action) => {
            state = state.filter(e => e.id !== action.payload)
            return state;
        },
        modifStudent:(state, action) => {
            
        }
    }
})

export const {addStudent, deleteStudent, modifStudent} = StudentSlice.actions;