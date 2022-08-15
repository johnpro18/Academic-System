import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import CreateStudentInfo from './components/create-studentinfo.component';
import CreateCourseInfo from './components/create-courseinfo.component';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/createstudentinfo" element={<CreateStudentInfo />}/>
        <Route path="/createcourseinfo" element={<CreateCourseInfo />}/>
      </Routes>
    </div>
  );
}

export default App;
