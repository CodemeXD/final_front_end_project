import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent } from '../../Reduxs/StudentSlice';
import BtnDeleteList from '../Boutons/BtnDeleteList';
import BtnModifList from '../Boutons/BtnModifList';
// import { deleteStudent } from '../reduxs/StudentSlice';

const StudentList = () => {
    const student = useSelector(state => state.student)
    const dispatch = useDispatch()
    const filteredStudent = student.slice(1);

    return (
        <div>
            <h2 className='text-center pb-5'>Liste des élèves</h2>

            <table class="table text-center table-hover table-striped">
                <thead className='testtable'>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Age</th>
                    <th scope="col">Sexe</th>
                    <th scope="col">Matricule</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudent && filteredStudent.map((e, index) =>
                        <tr key={e.id}>
                            <th scope="row">{index+1}</th>
                            <td>{e.nom}</td>
                            <td>{e.prenom}</td>
                            <td>{e.age}</td>
                            <td>{e.sexe}</td>
                            <td>{e.matricule}</td>
                            <td className='d-flex justify-content-around'>
                                <BtnModifList/>
                                <BtnDeleteList actionReducer={deleteStudent(e.id)}/>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className='text-center pt-5'>
            Vous avez {filteredStudent.length} Etudiant(s)
            </div>
        </div>
    );

}

export default StudentList;
