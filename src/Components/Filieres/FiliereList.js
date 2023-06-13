import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FiliereList = () => {
    const filiere = useSelector(state => state.filiere);

    const dispatch = useDispatch()

    const newFiliere = filiere.slice(1)


    return (
        <div>
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
                            <button className='btn btn-danger' onClick={() => dispatch(deleteFiliere(e.id))}>Supprimer</button>
                            <button className='btn btn-warning'>Modifier</button>
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
