import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function GetStudentInfo(props) {
    const [studentInfos, setStudentInfos] = useState([]);

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

    return (
        <div className="card p-5 m-5 shadow">
            <h1 className="text-center text-uppercase pb-5">Student Information</h1>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr className="text-uppercase py-3">
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Student Gender</th>
                        <th>Student IC</th>
                        <th>Student Programme</th>
                        <th>Student Intake</th>
                        <th>Student Nationality</th>
                        <th>Student Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {studentInfos?.map((studentInfo, _id) => {
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