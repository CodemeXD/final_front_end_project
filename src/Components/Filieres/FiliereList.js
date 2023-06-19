import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFiliere } from '../../Reduxs/FiliereSlice';
import BtnDeleteList from '../Boutons/BtnDeleteList';
import BtnModifList from '../Boutons/BtnModifList';

const FiliereList = () => {
    const filiere = useSelector(state => state.filiere);

    const dispatch = useDispatch()

    const newFiliere = filiere.slice(1)


    return (
        <div>
            <h2 className='text-center pb-5'>Liste des Filieres</h2>

            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Libelle</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {newFiliere && newFiliere.map((e, index) =>
                        <tr key={e.id}>
                            <th scope="row">{index+1}</th>
                            <td>{e.libelle}</td>
                            <td>{e.description}</td>
                            <td className='d-flex justify-content-around'>
                                <BtnModifList/>
                                <BtnDeleteList actionReducer={deleteFiliere(e.id)}/>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className='text-center pt-5'>
            Vous avez {newFiliere.length} Filière(s)
            </div>
        </div>
    );
}

export default FiliereList;
