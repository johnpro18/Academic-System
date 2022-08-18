import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function GetLecturerInfo(props) {
    const [lecturerInfos, setLecturerInfos] = useState([]);

    useEffect(() => {
        getLecturerInfos();
    }, []);

    function getLecturerInfos() {
        const url = 'http://localhost:3500/lecturerinfos/';
        axios
            .get(url)
            .then((res) => {
                console.log(res);
                setLecturerInfos(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function deleteLecturerInfo(id) {
        const url = 'http://localhost:3500/lecturerinfos/' + id;
        axios
            .delete(url)
            .then((res) => {
                console.log(res);
                const newLecturerInfos = lecturerInfos.filter((el) => el._id !== id);
                setLecturerInfos(newLecturerInfos);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="card p-5 m-5 shadow">
            <h1 className="text-center text-uppercase pb-5">Lecturer Information</h1>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr className="text-uppercase py-3">
                        <th>Lecturer ID</th>
                        <th>Lecturer Name</th>
                        <th>Lecturer Gender</th>
                        <th>Lecturer IC</th>
                        <th>Lecturer Programme</th>
                        <th>Lecturer Nationality</th>
                        <th>Lecturer Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {lecturerInfos?.map((lecturerInfo, _id) => {
                        return (
                            <tr className="text-caplitalize m-auto " key={_id}>
                                <td className="pt-3">{lecturerInfo.lecturerID}</td>
                                <td className="pt-3">{lecturerInfo.lecturerName}</td>
                                <td className="pt-3">{lecturerInfo.lecturerGender}</td>
                                <td className="pt-3">{lecturerInfo.lecturerIC}</td>
                                <td className="pt-3">{lecturerInfo.lecturerProgramme}</td>
                                <td className="pt-3">{lecturerInfo.lecturerNationality}</td>
                                <td className="pt-3">{lecturerInfo.lecturerPhoneNo}</td>
                                <td>
                                    <Link className="btn btn-md mx-2 text-capitalize" to={'/updatelecturerinfo' + lecturerInfo._id}>Update</Link>| 
                                    <button className="btn btn-md mx-2 text-capitalize" onClick={() => {deleteLecturerInfo(lecturerInfo._id)}}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}