import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

import { genderOptions } from '../data/gender-options';
import { programmeOptions } from '../data/programme-options';
import { intakeOptions } from '../data/intake-options';
import { nationalityOptions } from '../data/nationality-options';

export default function CreateStudentInfo(props) {
    const [studentID, setStudentID] = useState('');
    const [studentName, setStudentName] = useState('');
    const [studentGender, setStudentGender] = useState('');
    const [studentIC, setStudentIC] = useState('');
    const [studentProgramme, setStudentProgramme] = useState('');
    const [studentIntake, setStudentIntake] = useState('');
    const [studentNationality, setStudentNationality] = useState('');
    const [studentPhoneNo, setStudentPhoneNo] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const url = 'http://localhost:5000/studentinfos/add';
        axios.post(url, {
                studentID: studentID,
                studentName: studentName,
                studentGender: studentGender,
                studentIC: studentIC,
                studentProgramme: studentProgramme,
                studentIntake: studentIntake,
                studentNationality: studentNationality,
                studentPhoneNo: studentPhoneNo        
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="card p-5 mx-auto my-5 w-75 shadow">
                <h1 className="text-center text-uppercase pb-5">Create Student Information</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group py-2">
                        <label>Student ID:</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter ID" 
                            value={studentID}
                            onChange={setStudentID}
                        />
                    </div>
                    <div className="form-group py-2">
                        <label>Student Name:</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter Name" 
                            value={studentName}
                            onChange={setStudentName}
                        />
                    </div>
                    <div className="form-group py-2">
                        <label>Student Gender:</label>
                        <Select 
                            className="basic-single"
                            placeholder="Select Gender" 
                            value={studentGender}
                            onChange={setStudentGender}
                            options={genderOptions}
                        />
                    </div>
                    <div className="form-group py-2">
                        <label>Student IC:</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter IC" 
                            value={studentIC}
                            onChange={setStudentIC}
                        />
                    </div>
                    <div className="form-group py-2">
                        <label>Student Programme:</label>
                        <Select 
                            className="basic-single"
                            placeholder="Select Programme"  
                            value={studentProgramme}
                            onChange={setStudentProgramme}
                            options={programmeOptions}
                            isSearchable
                        />
                    </div>
                    <div className="form-group py-2">
                        <label>Student Intake:</label>
                        <Select 
                            className="basic-single"
                            placeholder="Select Intake"  
                            value={studentIntake}
                            onChange={setStudentIntake}
                            options={intakeOptions}
                            isSearchable
                        />
                    </div>
                    <div className="form-group py-2">
                        <label>Student Nationality:</label>
                        <Select 
                            className="basic-single"
                            placeholder="Select Nationality"  
                            value={studentNationality}
                            onChange={setStudentNationality}
                            options={nationalityOptions}
                            isSearchable
                        />
                    </div>
                    <div className="form-group py-2">
                        <label>Student Phone Number:</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter Phone Number" 
                            value={studentPhoneNo}
                            onChange={setStudentPhoneNo}
                        />
                    </div>
                    <div className="d-grid pt-5">
                        <input 
                            type="submit"
                            className="btn btn-primary"
                            value="Create Student Info"
                        />
                    </div>
                </form>
            </div>
    )
}