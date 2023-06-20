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
            const {id, nom, prenom, age, sexe, matricule} = action.payload;
            const newStudent = state.find(item => item.id == id);
            if(newStudent) {
                newStudent.nom = nom;
                newStudent.prenom = prenom;
                newStudent.age = age;
                newStudent.matricule = matricule;
                newStudent.sexe = sexe;
            }
        }
    }
})

export const {addStudent, deleteStudent, modifStudent} = StudentSlice.actions;