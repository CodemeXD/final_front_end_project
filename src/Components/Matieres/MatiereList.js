import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMatiere } from '../../Reduxs/MatiereSlice';
import BtnModifList from '../Boutons/BtnModifList';
import BtnDeleteList from '../Boutons/BtnDeleteList';

const MatiereList = () => {
    const matiere = useSelector(state => state.matiere);

    const dispatch = useDispatch();

    const filteredMatiere = matiere.slice(1);

    return (
        <div>
            <h2 className='text-center pb-5'>Liste des Matière</h2>

            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Libelle</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredMatiere && filteredMatiere.map((e, index) =>
                        <tr key={e.id}>
                            <th scope="row">{index+1}</th>
                            <td>{e.libelle}</td>
                            <td className='d-flex justify-content-around'>
                                <BtnModifList/>
                                <BtnDeleteList actionReducer={deleteMatiere(e.id)}/>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className='text-center pt-5'>
            Vous avez {filteredMatiere.length} Matiere(s)
            </div>
        </div>
    );
}

export default MatiereList;
