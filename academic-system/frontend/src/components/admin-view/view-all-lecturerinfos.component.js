import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function ViewAllLecturerInfos(props) {
    const [lecturerInfos, setLecturerInfos] = useState([]);
    const [searchResults, setSearchResults] = useState('');
    const [sortOrder, setSortOrder] = useState('Ascending');

    useEffect(() => {
        getLecturerInfos();
    }, []);

    // Get Lecturer Infos
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

    // Delete Lecturer Info
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

    // Sort Lecturer Infos
    function sortLecturerInfos(column) {
        if(sortOrder === 'Ascending') {
            const sortedLecturerInfos = [...lecturerInfos].sort((a, b) => 
                a[column].toLowerCase() > b[column].toLowerCase() 
                    ? 1
                    : -1
            )
            setLecturerInfos(sortedLecturerInfos);
            setSortOrder('Descending');
        }
        if(sortOrder === 'Descending') {
            const sortedLecturerInfos = [...lecturerInfos].sort((a, b) => 
                a[column].toLowerCase() < b[column].toLowerCase() 
                    ? 1
                    : -1
            )
            setLecturerInfos(sortedLecturerInfos);
            setSortOrder('Ascending');
        }
    };

    return (
        <div className="card p-5 m-5 shadow">
            <h1 className="text-center text-uppercase pb-5">Lecturer Information</h1>
            <form>
                <div className='form-group mx-auto mb-5 py-2 w-50'>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Search Lecturer Information" 
                        onChange={(e) => setSearchResults(e.target.value)}
                    />
                </div>
            </form>
            <table className='table table-hover table-striped'>
                <thead>
                <tr className="text-uppercase py-3">
                        <th onClick={() => sortLecturerInfos('lecturerID')}>Lecturer ID</th>
                        <th onClick={() => sortLecturerInfos('lecturerName')}>Lecturer Name</th>
                        <th onClick={() => sortLecturerInfos('lecturerGender')}>Lecturer Gender</th>
                        <th onClick={() => sortLecturerInfos('lecturerIC')}>Lecturer IC</th>
                        <th onClick={() => sortLecturerInfos('lecturerProgramme')}>Lecturer Programme</th>
                        <th onClick={() => sortLecturerInfos('lecturerNationality')}>Lecturer Nationality</th>
                        <th onClick={() => sortLecturerInfos('lecturerPhoneNo')}>Lecturer Phone No</th>
                    </tr>
                </thead>
                <tbody>
                    {lecturerInfos
                        .filter((lecturerInfo) => {
                            return searchResults.toLowerCase() === ''
                                ? lecturerInfo
                                : lecturerInfo.lecturerID.toLowerCase().includes(searchResults) || lecturerInfo.lecturerName.toLowerCase().includes(searchResults);                            
                        })
                        .map((lecturerInfo, _id) => {
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
                                        <Link className="btn btn-md mx-2 text-capitalize" to={'/updatelecturerinfo/' + lecturerInfo._id}>Update</Link>| 
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