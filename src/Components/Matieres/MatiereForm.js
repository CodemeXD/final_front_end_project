import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMatiere } from '../../Reduxs/MatiereSlice';

const MatiereForm = () => {
    const [matForm, setMatForm] = useState({
        id: '',
        libelle: ''
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setMatForm({...matForm, [e.target.name]: e.target.value, id: Date.now()})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addMatiere(matForm))
        setMatForm({
            id: '',
            libelle: ''
        })
    }

    return (
        <div>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col form-floating">
                    <input type="text" className="form-control" id="libelle" value={matForm.libelle} name='libelle' onChange={handleChange} required />
                    <label htmlFor="libelle" className="form-label">Libelle</label>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    );
}

export default MatiereForm;
