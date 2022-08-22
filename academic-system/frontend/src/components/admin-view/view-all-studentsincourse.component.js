import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ViewAllStudentsInCourse(props) {
    const [studentInfos, setStudentInfos] = useState([]);
    const [searchResults, setSearchResults] = useState('');
    const [sortOrder, setSortOrder] = useState('Ascending');

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getStudentInfos();
    }, []);

    // Get Student Infos
    function getStudentInfos() {
        const url = 'http://localhost:3500/courseinfos/' + params.id;
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
}