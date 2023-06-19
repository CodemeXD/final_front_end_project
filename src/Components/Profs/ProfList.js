import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProf } from '../../Reduxs/ProfSlice';
import BtnModifList from '../Boutons/BtnModifList';
import BtnDeleteList from '../Boutons/BtnDeleteList';

const ProfList = () => {
    const prof = useSelector(state => state.professeur).slice(1);

    const dispatch = useDispatch()
    return (
        <div>
            <h2 className='text-center pb-5'>Liste des Professeurs</h2>

            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {prof && prof.map((p, index) =>
                        <tr key={p.id}>
                            <th scope="row">{index+1}</th>
                            <td>{p.nom}</td>
                            <td>{p.prenom}</td>
                            <td>{p.email}</td>
                            <td className='d-flex justify-content-around'>
                                <BtnModifList/>
                                <BtnDeleteList actionReducer={deleteProf(p.id)}/>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className='text-center pt-5'>
            Vous avez {prof.length} Profs(s)
            </div>
        </div>
    );
}

export default ProfList;
