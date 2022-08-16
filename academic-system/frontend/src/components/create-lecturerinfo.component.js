import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

import { genderOptions } from '../data/gender-options';
import { programmeOptions } from '../data/programme-options';
import { nationalityOptions } from '../data/nationality-options';

export default function CreateLecturerInfo(props) {
    const [lecturerID, setLecturerID] = useState('');
    const [lecturerName, setLecturerName] = useState('');
    const [lecturerGender, setLecturerGender] = useState('');
    const [lecturerIC, setLecturerIC] = useState('');
    const [lecturerProgramme, setLecturerProgramme] = useState('');
    const [lecturerNationality, setLecturerNationality] = useState('');
    const [lecturerPhoneNo, setLecturerPhoneNo] = useState('');

    function handleSubmit(e) {
        const url ='http://localhost:3500/lecturerinfos/add';
        axios.post(url, {
                lecturerID: lecturerID,
                lecturerName: lecturerName,
                lecturerGender: lecturerGender.value,
                lecturerIC: lecturerIC,
                lecturerProgramme: lecturerProgramme.value,
                lecturerNationality: lecturerNationality.value,
                lecturerPhoneNo: lecturerPhoneNo
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="card p-5 mx-auto my-5 w-50 shadow">
            <h1 className="text-center text-uppercase pb-5">Create Lecturer Information</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group py-2">
                    <label>Lecturer ID:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter ID" 
                        value={lecturerID}
                        onChange={(e) => setLecturerID(e.target.value)}
                    />
                </div>
                <div className="form-group py-2">
                    <label>Lecturer Name:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Name" 
                        value={lecturerName}
                        onChange={(e) => setLecturerName(e.target.value)}
                    />
                </div>
                <div className="form-group py-2">
                    <label>Lecturer Gender:</label>
                    <Select 
                        className="basic-single"
                        placeholder="Select Gender" 
                        value={lecturerGender}
                        onChange={setLecturerGender}
                        options={genderOptions}
                    />
                </div>
                <div className="form-group py-2">
                    <label>Lecturer IC:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter IC" 
                        value={lecturerIC}
                        onChange={(e) => setLecturerIC(e.target.value)}
                    />
                </div>
                <div className="form-group py-2">
                    <label>Lecturer Programme:</label>
                    <Select 
                        className="basic-single"
                        placeholder="Select Programme"  
                        value={lecturerProgramme}
                        onChange={setLecturerProgramme}
                        options={programmeOptions}
                        isSearchable
                    />
                </div>
                <div className="form-group py-2">
                    <label>Lecturer Nationality:</label>
                    <Select 
                        className="basic-single"
                        placeholder="Select Nationality"  
                        value={lecturerNationality}
                        onChange={setLecturerNationality}
                        options={nationalityOptions}
                        isSearchable
                    />
                </div>
                <div className="form-group py-2">
                    <label>Lecturer Phone Number:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone Number" 
                        value={lecturerPhoneNo}
                        onChange={(e) => setLecturerPhoneNo(e.target.value)}
                    />
                </div>
                <div className="d-grid pt-5">
                    <input 
                        type="submit"
                        className="btn btn-primary"
                        value="Create Lecturer Information"
                    />
                </div>
            </form>
        </div>
    )
}