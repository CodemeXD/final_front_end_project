import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../../Reduxs/NoteSlice';

const NoteForm = () => {
    const [noteForm, setNoteForm] = useState({
        id:'',
        note: '',
        matiereId:'',
        filiereId: ''
    })

    const filiere = useSelector(state => state.filiere).slice(1)

    const matiere = useSelector(state => state.matiere).slice(1)

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setNoteForm({...NoteForm, [e.target.name]: e.target.value, id: Date.now()})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addNote(noteForm));
        setNoteForm({
            id:'',
            note: '',
            matiereId:'',
            filiereId: ''
        })
    }

    return (
        <div>
            <h2 className='text-center pb-5'>Ajouter une Note</h2>

            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col form-floating">
                    <input type="number" min={0} className="form-control" id="note" value={noteForm.note} placeholder='0' name='note' onChange={handleChange} required />
                    <label htmlFor="note" className="form-label">Note</label>
                </div>
                <div className="col-md-3">
                    <label htmlFor="matiereId" className="form-label">Matiere Id</label>
                    <select className="form-select" id="matiereId" name='matiereId' onChange={handleChange} required>
                        <option selected disabled value="">Choose...</option>
                        {matiere && matiere.map((item, index) => <option key={item.id} value={item.libelle}>{item.libelle}</option> )}
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="filiereId" className="form-label">Filiere Id</label>
                    <select className="form-select" id="filiereId" name='filiereId' onChange={handleChange} required>
                        <option selected disabled value="">Choose...</option>
                        {filiere && filiere.map((item, index) => <option key={item.id} value={item.libelle}>{item.libelle}</option> )}
                    </select>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    );
}

export default NoteForm;
