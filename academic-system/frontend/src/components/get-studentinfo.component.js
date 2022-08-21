import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function GetStudentInfo(props) {
    const [studentInfos, setStudentInfos] = useState([]);
    const [searchResults, setSearchResults] = useState('');
    const [sortOrder, setSortOrder] = useState('Ascending');

    useEffect(() => {
        getStudentInfos();
    }, []);

    function getStudentInfos() {
        const url = 'http://localhost:3500/studentinfos/';
        axios
            .get(url)
            .then((res) => {
                console.log(res);
                setStudentInfos(res.data);
            })
            .catch((err) => {
                console.log(err);
            });    
    }

    function deleteStudentInfo(id) {
        const url = 'http://localhost:3500/studentinfos/' + id;
        axios
            .delete(url)
            .then((res) => {
                console.log(res);
                const newStudentInfos = studentInfos.filter((el) => el._id !== id);
                setStudentInfos(newStudentInfos);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    function sortStudentInfos(column) {
        if(sortOrder === 'Ascending') {
            const sortedStudentInfos = [...studentInfos].sort((a, b) => 
                a[column].toLowerCase() > b[column].toLowerCase() 
                    ? 1
                    : -1
            )
            setStudentInfos(sortedStudentInfos);
            setSortOrder('Descending');
        }
        if(sortOrder === 'Descending') {
            const sortedStudentInfos = [...studentInfos].sort((a, b) => 
                a[column].toLowerCase() < b[column].toLowerCase() 
                    ? 1
                    : -1
            )
            setStudentInfos(sortedStudentInfos);
            setSortOrder('Ascending');
        }
    };

    return (
        <div className="card p-5 m-5 shadow">
            <h1 className="text-center text-uppercase pb-5">Student Information</h1>
            <form>
                <div className='form-group mx-auto mb-5 py-2 w-50'>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Search Student Information" 
                        onChange={(e) => setSearchResults(e.target.value)}
                    />
                </div>
            </form>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr className="text-uppercase py-3">
                        <th onClick={() => sortStudentInfos('studentID')}>Student ID</th>
                        <th onClick={() => sortStudentInfos('studentName')}>Student Name</th>
                        <th onClick={() => sortStudentInfos('studentGender')}>Student Gender</th>
                        <th onClick={() => sortStudentInfos('studentIC')}>Student IC</th>
                        <th onClick={() => sortStudentInfos('studentProgramme')}>Student Programme</th>
                        <th onClick={() => sortStudentInfos('studentIntake')}>Student Intake</th>
                        <th onClick={() => sortStudentInfos('studentNationality')}>Student Nationality</th>
                        <th onClick={() => sortStudentInfos('studentPhoneNo')}>Student Phone No</th>
                    </tr>
                </thead>
                <tbody>
                    {studentInfos
                        .filter((studentInfo) => {
                            return searchResults.toLowerCase() === ''
                                ? studentInfo
                                : studentInfo.studentID.toLowerCase().includes(searchResults) || studentInfo.studentName.toLowerCase().includes(searchResults);                            
                        })
                        .map((studentInfo, _id) => {
                            return (
                                <tr className="text-caplitalize m-auto " key={_id}>
                                    <td className="pt-3">{studentInfo.studentID}</td>
                                    <td className="pt-3">{studentInfo.studentName}</td>
                                    <td className="pt-3">{studentInfo.studentGender}</td>
                                    <td className="pt-3">{studentInfo.studentIC}</td>
                                    <td className="pt-3">{studentInfo.studentProgramme}</td>
                                    <td className="pt-3">{studentInfo.studentIntake}</td>
                                    <td className="pt-3">{studentInfo.studentNationality}</td>
                                    <td className="pt-3">{studentInfo.studentPhoneNo}</td>
                                    <td>
                                        <Link className="btn btn-md mx-2 text-capitalize" to={'/updatestudentinfo/' + studentInfo._id}>Update</Link>| 
                                        <button className="btn btn-md mx-2 text-capitalize" onClick={() => {deleteStudentInfo(studentInfo._id)}}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    )
}