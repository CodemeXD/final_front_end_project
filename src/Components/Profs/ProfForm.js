import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ProfForm = () => {
    const [teacherForm, setTeacherForm] = useState({
        id:'',
        nom:'',
        prenom:'',
        email:''
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setTeacherForm({...teacherForm, [e.target.name]: e.target.value, id: Date.now()});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addStudent(teacherForm))
        setTeacherForm({
            id:"",
            nom:"",
            prenom:'',
            email:''
        })
    }

    return (
        <div>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col form-floating">
                    <input type="text" className="form-control" id="nom" value={teacherForm.nom} name='nom' onChange={handleChange} required />
                    <label htmlFor="nom" className="form-label">Nom</label>
                </div>
                <div className="col form-floating">
                    <input type="text" className="form-control" id="prenom" value={teacherForm.prenom} name='prenom' onChange={handleChange} required />
                    <label htmlFor="prenom" className="form-label">Prenom</label>
                </div>
                <div className="col form-floating">
                    <input type="email" className="form-control" id="email" value={teacherForm.email} name='email' onChange={handleChange} required />
                    <label htmlFor="email" className="form-label">Email</label>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    );
}

export default ProfForm;
