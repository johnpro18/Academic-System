import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function GetCourseInfo(props) {
    const [courseInfos, setCourseInfos] = useState([]);

    useEffect(() => {
        getCourseInfos();
    }, []);

    function getCourseInfos() {
        const url = 'http://localhost:3500/courseinfos/';
        axios
            .get(url)
            .then((res) => {
                console.log(res);
                setCourseInfos(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="card p-5 m-5 shadow">
            <h1 className="text-center text-uppercase pb-5">Course Information</h1>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr className="text-uppercase py-3">
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Course Credits</th>
                        <th>Course Programme</th>
                    </tr>
                </thead>
                <tbody>
                    {courseInfos?.map((courseInfo, _id) => {
                        return (
                            <tr className="text-caplitalize m-auto " key={_id}>
                                <td className="pt-3">{courseInfo.courseID}</td>
                                <td className="pt-3">{courseInfo.courseName}</td>
                                <td className="pt-3">{courseInfo.courseCredits}</td>
                                <td className="pt-3">{courseInfo.courseProgramme}</td>
                                <td>
                                    <Link className="btn btn-md mx-2 text-capitalize" to={'/update/{props.studentInfo._id'}>Update</Link>| 
                                    <button className="btn btn-md mx-2 text-capitalize">Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}