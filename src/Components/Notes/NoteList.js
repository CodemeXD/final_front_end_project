import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../../Reduxs/NoteSlice';
import BtnModifList from '../Boutons/BtnModifList';
import BtnDeleteList from '../Boutons/BtnDeleteList';

const NoteList = () => {

    const note = useSelector(state => state.note).slice(1)

    const dispatch = useDispatch();

    return (
        <div>
            <h2 className='text-center pb-5'>Liste des Notes</h2>

            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Note</th>
                    <th scope="col">Matière</th>
                    <th scope="col">Filière</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {note && note.map((e, index) =>
                        <tr key={e.id}>
                            <th scope="row">{index+1}</th>
                            <td>{e.note}</td>
                            <td>{e.matiereId}</td>
                            <td>{e.filiereId}</td>
                            <td className='d-flex justify-content-around'>
                                <BtnModifList />
                                <BtnDeleteList actionReducer={deleteNote(e.id)}/>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className='text-center pt-5'>
            {(note.length <=0) ? 'Aucune note au tableau' : ''}
            </div>
            
        </div>
    );
}

export default NoteList;
