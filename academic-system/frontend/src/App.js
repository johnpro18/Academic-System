import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Navbar from './components/admin-navbar.component';
import CreateStudentInfo from './components/create-studentinfo.component';
import CreateCourseInfo from './components/create-courseinfo.component';
import CreateLecturerInfo from './components/create-lecturerinfo.component';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/createstudentinfo" element={<CreateStudentInfo />}/>
        <Route path="/createlecturerinfo" element={<CreateLecturerInfo />}/>
        <Route path="/createcourseinfo" element={<CreateCourseInfo />}/>
      </Routes>
    </div>
  );
}

export default App;
