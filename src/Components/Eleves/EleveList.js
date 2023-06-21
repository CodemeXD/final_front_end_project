import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent } from '../../Reduxs/StudentSlice';
import BtnDeleteList from '../Boutons/BtnDeleteList';
import BtnModifList from '../Boutons/BtnModifList';
import { Outlet, useParams } from 'react-router-dom';
// import { deleteStudent } from '../reduxs/StudentSlice';

const StudentList = () => {
    const student = useSelector(state => state.student).slice(1)
    const dispatch = useDispatch()

    const {id} = useParams()

    return (
        <div className='w-100'>
            <ul class="list-group tableEntete bg-white fw-bold ligne list-group-horizontal mb-1 shadow">
                <li class="list-group-item w-100 mb-1 fs-5 border-0">Nom</li>
                <li class="list-group-item w-100 mb-1 fs-5 border-0">Prenom</li>
                <li class="list-group-item w-100 mb-1 fs-5 border-0">Age</li>
                <li class="list-group-item w-100 mb-1 fs-5 border-0">Sexe</li>
                <li class="list-group-item w-100 mb-1 fs-5 border-0">Matricule</li>
                <li class="list-group-item w-100 mb-1 fs-5 border-0">Action</li>
            </ul>
            {student && student.map((s, index) => (index % 2 == 0) ? 
                ( <ul class="list-group list-group-horizontal ligne shadow mb-1">
                    <li class="list-group-item w-100  border-0 ">{s.nom}</li>
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

            <div className='text-center pt-5'>
            Vous avez {student.length} Etudiant(s)
            </div>
            <Outlet/>
        </div>        
    );

}

export default StudentList;
