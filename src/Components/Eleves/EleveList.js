import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent } from '../reduxs/StudentSlice';

const StudentList = () => {
    const student = useSelector(state => state.student)

    const dispatch = useDispatch()
    const filteredStudent = student.slice(1);

    return (
        <div>
            <table class="table table-hover table-striped">
                <thead>
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
                            <button className='btn btn-danger' onClick={() => dispatch(deleteStudent(e.id))}>Supprimer</button>
                            <button className='btn btn-warning'>Modifier</button>
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
