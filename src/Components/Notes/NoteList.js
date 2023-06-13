import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../../Reduxs/NoteSlice';

const NoteList = () => {

    const note = useSelector(state => state.note).slice(1)

    const dispatch = useDispatch();

    return (
        <div>
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
                            <button className='btn btn-danger' onClick={() => dispatch(deleteNote(e.id))}>Supprimer</button>
                            <button className='btn btn-warning'>Modifier</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* <div className='text-center pt-5'>
            Vous avez {filteredStudent.length} Etudiant(s)
            </div> */}
        </div>
    );
}

export default NoteList;
