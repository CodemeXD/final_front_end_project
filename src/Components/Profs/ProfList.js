import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProf } from '../../Reduxs/ProfSlice';
import BtnModifList from '../Boutons/BtnModifList';
import BtnDeleteList from '../Boutons/BtnDeleteList';

const ProfList = () => {
    const prof = useSelector(state => state.professeur).slice(1);

    const dispatch = useDispatch()
    return (
        <div className='w-100'>
            <h2 className='text-center pb-5'>Liste des Professeurs</h2>

            <ul class="list-group tableEntete bg-white fw-bold ligne list-group-horizontal mb-1 shadow">
                <li class="list-group-item w-100 mb-1 fs-5 border-0">Nom</li>
                <li class="list-group-item w-100 mb-1 fs-5 border-0">Prenom</li>
                <li class="list-group-item w-100 mb-1 fs-5 border-0">Email</li>
                <li class="list-group-item w-100 mb-1 fs-5 border-0">Action</li>
            </ul>

            {prof && prof.map((s, index) => (index % 2 == 0) ? 
                ( <ul class="list-group list-group-horizontal ligne shadow mb-1">
                    <li class="list-group-item w-100 border-0 ">{s.nom}</li>
                    <li class="list-group-item w-100 border-0 ">{s.prenom}</li>
                    <li class="list-group-item w-100 border-0 ">{s.age}</li>
                    <li class="list-group-item w-100 border-0 ">{s.sexe}</li>
                    <li class="list-group-item w-100 border-0 ">{s.matricule}</li>
                    <li class="list-group-item w-100 border-0 ">
                        <BtnModifList lien={`/student/${s.id}`} />
                        <BtnDeleteList actionReducer={deleteStudent(s.id)}/>
                    </li>
                </ul>) : 
                <ul class="list-group list-group-horizontal ligne shadow mb-1">
                    <li class="list-group-item w-100 border-0 ">{s.nom}</li>
                    <li class="list-group-item w-100 border-0 ">{s.prenom}</li>
                    <li class="list-group-item w-100 border-0 ">{s.age}</li>
                    <li class="list-group-item w-100 border-0 ">{s.sexe}</li>
                    <li class="list-group-item w-100 border-0 ">{s.matricule}</li>
                    <li class="list-group-item w-100 border-0 ">
                        <BtnModifList lien={`/student/${s.id}`} />
                        <BtnDeleteList actionReducer={deleteStudent(s.id)}/>
                    </li>
                </ul>)}
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

<div className='w-100'>
            
            

            <div className='text-center pt-5'>
            Vous avez {student.length} Etudiant(s)
            </div>
            <Outlet/>
        </div> 

export default ProfList;
