import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Sidebar from './Components/Navigation/Sidebar';
import StudentsPage from './Pages/StudentsPage';
import CoefPage from './Pages/CoefPage';
import FilieresPage from './Pages/FilieresPage';
import MatieresPage from './Pages/MatieresPage';
import NotesPage from './Pages/NotesPage';
import TeachersPage from './Pages/TeachersPage';
import Header from './Components/Navigation/Header';

const App = () => {
  return (
      <div className='d-flex'>
    <div className="col-2">
      <Sidebar/>
    </div>
    <div className="col app">
      <div className='enteteApp mb-4 bg-white'>
        <Header/>
      </div>
      <div className='px-5 mt-5'>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/'element={<Home/>} />
          <Route path='/student' element={<StudentsPage/>} />
          <Route path='/coefficient' element={<CoefPage/>} />
          <Route path='/filiere' element={<FilieresPage/>} />
          <Route path='/matiere' element={<MatieresPage/>} />
          <Route path='/note' element={<NotesPage/>} />
          <Route path='/teacher' element={<TeachersPage/>} />
        </Routes>
      </div>



      {/* <Routes>
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
      </Routes> */}
    </div>
    </div>
  );
}

export default App;
