import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function ViewAllCourseInfos(props) {
    const [courseInfos, setCourseInfos] = useState([]);
    const [searchResults, setSearchResults] = useState('');
    const [sortOrder, setSortOrder] = useState('Ascending');

    useEffect(() => {
        getCourseInfos();
    }, []);

    // Get Course Infos
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

    // Delete Course Info
    function deleteCourseInfo(id) {
        const url = 'http://localhost:3500/courseinfos/' + id;
        axios
            .delete(url)
            .then((res) => {
                console.log(res);
                const newCourseInfos = courseInfos.filter((el) => el._id !== id);
                setCourseInfos(newCourseInfos);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Sort Course Infos
    function sortCourseInfo(column) {
        if(sortOrder === 'Ascending') {
            const sortedCourseInfos = [...courseInfos].sort((a, b) => 
                a[column].toLowerCase() > b[column].toLowerCase() 
                    ? 1
                    : -1
            )
            setCourseInfos(sortedCourseInfos);
            setSortOrder('Descending');
        }
        if(sortOrder === 'Descending') {
            const sortedCourseInfos = [...courseInfos].sort((a, b) => 
                a[column].toLowerCase() < b[column].toLowerCase() 
                    ? 1
                    : -1
            )
            setCourseInfos(sortedCourseInfos);
            setSortOrder('Ascending');
        }
    };

    return (
        <div className="card p-5 m-5 shadow">
            <h1 className="text-center text-uppercase pb-5">Course Information</h1>
            <form>
                <div className='form-group mx-auto mb-5 py-2 w-50'>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Search Course Information" 
                        onChange={(e) => setSearchResults(e.target.value)}
                    />
                </div>
            </form>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr className="text-uppercase py-3">
                        <th onClick={() => sortCourseInfo('courseID')}>Course ID</th>
                        <th onClick={() => sortCourseInfo('courseName')}>Course Name</th>
                        <th onClick={() => sortCourseInfo('courseCredits')}>Course Credits</th>
                        <th onClick={() => sortCourseInfo('courseProgramme')}>Course Programme</th>
                    </tr>
                </thead>
                <tbody>
                    {courseInfos
                        .filter((courseInfo) => {
                            return searchResults.toLowerCase() === ''
                                ? courseInfo
                                : courseInfo.courseID.toLowerCase().includes(searchResults) || courseInfo.courseName.toLowerCase().includes(searchResults);                            
                        })                  
                        .map((courseInfo, _id) => {
                            return (
                                <tr className="text-caplitalize m-auto " key={_id}>
                                    <td className="pt-3">{courseInfo.courseID}</td>
                                    <td className="pt-3">{courseInfo.courseName}</td>
                                    <td className="pt-3">{courseInfo.courseCredits}</td>
                                    <td className="pt-3">{courseInfo.courseProgramme}</td>
                                    <td>
                                        <Link className="btn btn-md mx-2 text-capitalize" to={'/updatecourseinfo/' + courseInfo._id}>View Students</Link>|
                                        <Link className="btn btn-md mx-2 text-capitalize" to={'/updatecourseinfo/' + courseInfo._id}>View Lecturers</Link>| 
                                        <Link className="btn btn-md mx-2 text-capitalize" to={'/updatecourseinfo/' + courseInfo._id}>Update</Link>|  
                                        <button className="btn btn-md mx-2 text-capitalize" onClick={() => {deleteCourseInfo(courseInfo._id)}}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    )
}