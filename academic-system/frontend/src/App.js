import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Navbar from './components/admin-navbar.component';
import ViewStudentInfo from './components/get-studentinfo.component';
import ViewLecturerInfo from './components/get-lecturerinfo.component';
import ViewCourseInfo from './components/get-courseinfo.component';
import CreateStudentInfo from './components/create-studentinfo.component';
import CreateLecturerInfo from './components/create-lecturerinfo.component';
import CreateCourseInfo from './components/create-courseinfo.component';
import UpdateStudentInfo from './components/update-studentinfo.component';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/viewstudentinfo" element={< ViewStudentInfo/>}/>
        <Route path="/viewlecturerinfo" element={< ViewLecturerInfo/>}/>
        <Route path="/viewcourseinfo" element={< ViewCourseInfo/>}/>
        <Route path="/createstudentinfo" element={<CreateStudentInfo />}/>
        <Route path="/createlecturerinfo" element={<CreateLecturerInfo />}/>
        <Route path="/createcourseinfo" element={<CreateCourseInfo />}/>
        <Route path="/updatestudentinfo/:id" element={<UpdateStudentInfo />}/>
      </Routes>
    </div>
  );
}

export default App;
