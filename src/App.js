import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import EleveForm from './Components/Eleves/EleveForm';
import StudentList from './Components/Eleves/EleveList';
import FiliereForm from './Components/Filieres/FiliereForm';
import FiliereList from './Components/Filieres/FiliereList';
import MatiereForm from './Components/Matieres/MatiereForm';
import MatiereList from './Components/Matieres/MatiereList';
import CoefficientForm from './Components/Coefficients/CoefficientForm';
import CoefficientList from './Components/Coefficients/CoefficientList';
import NoteForm from './Components/Notes/NoteForm';
import NoteList from './Components/Notes/NoteList';
import ProfForm from './Components/Profs/ProfForm';
import ProfList from './Components/Profs/ProfList';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/'element={<Home/>} />
      <Route path='/matiereform' element={<MatiereForm/>} />
      <Route path='/matierelist' element={<MatiereList/>} />
      <Route path='/studentform' element={<EleveForm/>} />
      <Route path='/studentlist' element={<StudentList/>} />
      <Route path='/filiereform' element={<FiliereForm/>} />
      <Route path='/filierelist' element={<FiliereList/>} />
      <Route path='/coefform' element={<CoefficientForm/>} />
      <Route path='/coeflist' element={<CoefficientList/>} />
      <Route path='/noteform' element={<NoteForm/>} />
      <Route path='/notelist' element={<NoteList/>} />
      <Route path='/profform' element={<ProfForm/>} />
      <Route path='/proflist' element={<ProfList/>} />
    </Routes>
  );
}

export default App;
