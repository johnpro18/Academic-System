import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

import { programmeOptions } from '../data/programme-options';

export default function CreateCourseInfo(props) {
    const [courseID, setCourseID] = useState('');
    const [courseName, setCourseName] = useState('');
    const [courseCredits, setCourseCredits] = useState('');
    const [courseProgramme, setCourseProgramme] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const url = '';
        axios.post(url, {
                courseID: courseID,
                courseName: courseName,
                courseCredits: courseCredits,
                courseProgramme: courseProgramme
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
            <h1 className="text-center text-uppercase pb-5">Create Course Information</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group py-2">
                    <label>Course ID:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter ID" 
                        value={courseID}
                        onChange={setCourseID}
                    />
                </div>
                <div className="form-group py-2">
                    <label>Course Name:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Name" 
                        value={courseName}
                        onChange={setCourseName}
                    />
                </div>
                <div className="form-group py-2">
                    <label>Course Credits:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Credits" 
                        value={courseCredits}
                        onChange={setCourseCredits}
                    />
                </div>
                <div className="form-group py-2">
                    <label>Course Programme:</label>
                    <Select 
                        className="basic-single"
                        placeholder="Select Programme"  
                        value={courseProgramme}
                        onChange={setCourseProgramme}
                        options={programmeOptions}
                        isSearchable
                    />
                </div>
                <div className="d-grid pt-5">
                    <input 
                        type="submit"
                        className="btn btn-primary"
                        value="Create Course Information"
                    />
                </div>
            </form>
        </div>    
    )
}