import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { genderOptions } from '../data/gender-options';
import { programmeOptions } from '../data/programme-options';
import { intakeOptions } from '../data/intake-options';
import { nationalityOptions } from '../data/nationality-options';

export default function UpdateStudentInfo(props) {
    const [studentID, setStudentID] = useState('');
    const [studentName, setStudentName] = useState('');
    const [studentGender, setStudentGender] = useState('');
    const [studentIC, setStudentIC] = useState('');
    const [studentProgramme, setStudentProgramme] = useState('');
    const [studentIntake, setStudentIntake] = useState('');
    const [studentNationality, setStudentNationality] = useState('');
    const [studentPhoneNo, setStudentPhoneNo] = useState('');

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        function fetchData() {
            const id = params.id;
            const url = 'http://localhost:3500/studentinfos/62fb7686c9451c7f8623c29b';
            axios
                .get(url)
                .then((res) => {
                    studentID = res.data.studentID;
                    studentName = res.data.studentName;
                    studentGender = res.data.studentGender;
                    studentIC = res.data.studentIC;
                    studentProgramme = res.data.studentProgramme;
                    studentIntake = res.data.studentIntake;
                    studentNationality = res.data.studentNationality;
                    studentPhoneNo = res.data.studentPhoneNo;
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        fetchData();

        return;
    }, [params.id]);
    

    function handleSubmit() {
        const url = 'http://localhost:3500/studentinfos/update/' + params.id;
        axios
            .post(url, {
                studentID: studentID,
                studentName: studentName,
                studentGender: studentGender.value,
                studentIC: studentIC,
                studentProgramme: studentProgramme.value,
                studentIntake: studentIntake.value,
                studentNationality: studentNationality.value,
                studentPhoneNo: studentPhoneNo        
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="card p-5 mx-auto my-5 w-50 shadow">
            <h1 className="text-center text-uppercase pb-5">Update Student Information</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group py-2">
                    <label>Student ID:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter ID" 
                        value={studentID}
                        onChange={(e) => setStudentID(e.target.value)}
                    />
                </div>
                <div className="form-group py-2">
                    <label>Student Name:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Name" 
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
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
                        onChange={(e) => setStudentIC(e.target.value)}
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
                        onChange={(e) => setStudentPhoneNo(e.target.value)}
                    />
                </div>
                <div className="d-grid pt-5">
                    <input 
                        type="submit"
                        className="btn btn-primary"
                        value="Update Student Information"
                    />
                </div>
            </form>
        </div>
    )
}