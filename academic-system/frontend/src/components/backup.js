import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

import { genderOptions, programmeOptions, intakeOptions, nationalityOptions } from '../data/studentinfo';

export default class CreateStudentInfo extends Component {
    constructor(props) {
        super(props);
        
        // this.onChangeStudentID = this.onChangeStudentID.bind(this);
        // this.onChangeStudentName = this.onChangeStudentName.bind(this);
        // this.onChangeStudentGender = this.onChangeStudentGender(this);

        this.state = {
            studentID: '',
            studentName: '',
            studentGender: '',
            studentIC: '',
            studentProgramme: '',
            studentIntake: '',
            studentNationality: '',
            studentPhoneNo: ''
        }
    }

    onChangeStudentID = e => {
        this.setState({
            studentID: e.target.value
        })
    }

    onChangeStudentName = e => {
        this.setState({
            studentName: e.target.value
        })
    }

    onChangeStudentGender = e => {
        this.setState({
            studentGender: e.target.value
        })
    }

    onChangeStudentIC = e => {
        this.setState({
            studentIC: e.target.value
        })
    }

    onChangeStudentProgramme = e => {
        this.setState({
            studentProgramme: e.target.value
        }) 
    }

    onChangeStudentIntake = e => {
        this.setState({
            studentIntake: e.target.value
        })
    }

    onChangeStudentNationality = e => {
        this.setState({
            studentNationality: e.target.value
        })
    }

    onChangeStudentPhoneNo = e => {
        this.setState({
            studentPhoneNo: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const studentInfo = {
            studentID: this.state.studentID,
            studentName: this.state.studentName,
            studentGender: this.state.studentGender,
            studentIC: this.state.studentIC,
            studentProgramme: this.state.studentProgramme,
            studentIntake: this.state.studentIntake,
            studentNationality: this.state.studentNationality,
            studentPhoneNo: this.state.studentPhoneNo
        }

        console.log(studentInfo);

        axios
            .post('http://localhost:5000/studentinfos/add', studentInfo)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="card p-5 mx-auto my-5 w-75 shadow">
                <h1 className="text-center text-uppercase pb-5">Create Student Information</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group py-2">
                        <label>Student ID:</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.studentName}
                            onChange={this.onChangeStudentName}
                        />
                    </div>
                    <div className="form-group py-2">
                        <label>Student Name:</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.studentName}
                            onChange={this.onChangeStudentName}
                        />
                    </div>
                    <div className="form-group py-2">
                        <label>Student Gender:</label>
                        <Select 
                            className="basic-single" 
                            value={this.state.studentGender}
                            onChange={this.onChangeStudentGender}
                            options={genderOptions}
                        />
                    </div>
                    <div className="form-group py-2">
                        <label>Student IC:</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.studentIC}
                            onChange={this.onChangeStudentIC}
                        />
                    </div>
                    <div className="form-group py-2">
                        <label>Student Programme:</label>
                        <Select 
                            className="basic-single" 
                            value={this.state.studentProgramme}
                            onChange={this.onChangeStudentProgramme}
                            options={programmeOptions}
                            isSearchable
                        />
                    </div>
                    <div className="form-group py-2">
                        <label>Student Intake:</label>
                        <Select 
                            className="basic-single" 
                            value={this.state.studentIntake}
                            onChange={this.onChangeStudentIntake}
                            options={intakeOptions}
                            isSearchable
                        />
                    </div>
                    <div className="form-group py-2">
                        <label>Student Nationality:</label>
                        <Select 
                            className="basic-single" 
                            value={this.state.studentNationality}
                            onChange={this.onChangeStudentNationality}
                            options={nationalityOptions}
                            isSearchable
                        />
                    </div>
                    <div className="form-group py-2">
                        <label>Student Phone Number:</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.studentPhoneNo}
                            onChange={this.onChangeStudentPhoneNo}
                        />
                    </div>
                    <div className="d-grid pt-5">
                        <input 
                            type="submit"
                            className="btn btn-primary"
                            value="Create Student Info"
                        />
                    </div>
                </form>
            </div>
        )
    }
}