import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light p-4 shadow-sm">
                <Link to="/" className="navbar-brand text-uppercase text-dark">Academic System</Link>
                <div className="collapse navbar-collapse justify-content-end align-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/createstudentinfo" className="nav-link text-uppercase text-dark">Create Student Info</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/createcourseinfo" className="nav-link text-uppercase text-dark">Create Course Info</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}