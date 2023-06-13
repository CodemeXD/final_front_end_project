import React from 'react';
import { useDispatch } from 'react-redux';
import { addFiliere } from '../../Reduxs/FiliereSlice';

const FiliereForm = () => {
    const [filiereForm, setFiliereForm] = useState({
        id:"",
        libelle:"",
        description:''
    })

    const dispatch= useDispatch();
    
    const handleChange = (e) => {
        setFiliereForm({...filiereForm, [e.target.name]: e.target.value, id: Date.now()});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addFiliere(filiereForm))
        setFiliereForm({
            id:"",
            libelle:"",
            description:''
        })
    }

    return (
        <div>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col form-floating">
                    <input type="text" className="form-control" id="libelle" value={filiereForm.libelle} name='libelle' onChange={handleChange} required />
                    <label htmlFor="libelle" className="form-label">Libelle</label>
                </div>
                <div className="col form-floating">
                    <textarea type="text" className="form-control" id="description" value={filiereForm.description} name='description' onChange={handleChange} required />
                    <label htmlFor="description" className="form-label">Description</label>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    );
}

export default FiliereForm;
