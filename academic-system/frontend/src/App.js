import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Navbar from './components/admin-view/admin-navbar.component';
import ViewAllStudentInfos from './components/admin-view/view-all-studentinfos.component';
import ViewAllLecturerInfos from './components/admin-view/view-all-lecturerinfos.component';
import ViewAllCourseInfos from './components/admin-view/view-all-courseinfos.component';
import CreateStudentInfo from './components/admin-view/create-studentinfo.component';
import CreateLecturerInfo from './components/admin-view/create-lecturerinfo.component';
import CreateCourseInfo from './components/admin-view/create-courseinfo.component';
import UpdateStudentInfo from './components/admin-view/update-studentinfo.component';
import UpdateLecturerInfo from './components/admin-view/update-lecturerinfo.component';
import UpdateCourseInfo from './components/admin-view/update-courseinfo.component';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/viewstudentinfo" element={< ViewAllStudentInfos/>}/>
        <Route path="/viewlecturerinfo" element={< ViewAllLecturerInfos/>}/>
        <Route path="/viewcourseinfo" element={< ViewAllCourseInfos/>}/>
        <Route path="/createstudentinfo" element={<CreateStudentInfo />}/>
        <Route path="/createlecturerinfo" element={<CreateLecturerInfo />}/>
        <Route path="/createcourseinfo" element={<CreateCourseInfo />}/>
        <Route path="/updatestudentinfo/:id" element={<UpdateStudentInfo />}/>
        <Route path="/updatelecturerinfo/:id" element={<UpdateLecturerInfo />}/>
        <Route path="/updatecourseinfo/:id" element={<UpdateCourseInfo />}/>
      </Routes>
    </div>
  );
}

export default App;
