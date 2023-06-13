import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../Reduxs/StudentSlice';

const EleveForm = () => {
    const [studentForm, setStudentForm] = useState({
        id:"",
        nom:"",
        prenom:'',
        matricule:'',
        age:'',
        sexe:''
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setStudentForm({...studentForm, [e.target.name]: e.target.value, id: Date.now()});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(studentForm.sexe !== "masculin" && studentForm.sexe !== "feminin"){
            e.stopPropagation();
        } else{
        dispatch(addStudent(studentForm))
        setStudentForm({
            id:"",
            nom:"",
            prenom:'',
            matricule:'',
            age:'',
            sexe:''
        })}
    }
    return (
        <div>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col form-floating">
                    <input type="text" className="form-control" id="nom" value={studentForm.nom} name='nom' onChange={handleChange} required />
                    <label htmlFor="nom" className="form-label">Nom</label>
                </div>
                <div className="col form-floating">
                    <input type="text" className="form-control" id="prenom" value={studentForm.prenom} name='prenom' onChange={handleChange} required />
                    <label htmlFor="prenom" className="form-label">Prenom</label>
                </div>
                <div className="col form-floating">
                    <input type="number" min='1' className="form-control" id="matricule" value={studentForm.matricule} name='matricule' onChange={handleChange} required />
                    <label htmlFor="matricule" className="form-label">Matricule</label>
                </div>
                <div className="col form-floating">
                    <input type="number" min='1' className="form-control" id="age" value={studentForm.age} name='age' onChange={handleChange} required />
                    <label htmlFor="age" className="form-label">Age</label>
                </div>
                <div className="input-group">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="masculin" value='Masculin' onChange={handleChange} id="masculin" />
                        <label className="form-check-label" htmlFor="masculin">
                            Masculin
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="feminin" value='Feminin' onChange={handleChange} id="feminin" checked />
                        <label className="form-check-label" htmlFor="feminin">
                            Feminin
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    );
}

export default EleveForm;
