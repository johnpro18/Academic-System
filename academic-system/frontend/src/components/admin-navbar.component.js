import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light p-4 shadow-sm">
            <Link to="/viewstudentinfo" className="navbar-brand text-uppercase text-dark">Academic System</Link>
            <div className="collapse navbar-collapse justify-content-end align-center px-5">
                <ul className="navbar-nav px-5">
                    <li className="nav-item mx-3">
                        <div className="dropdown">
                            <button className="btn btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown">View</button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/viewstudentinfo" className="dropdown-item text-uppercase text-dark">View Student Info</Link>
                                </li>
                                <li>
                                    <Link to="/viewlecturerinfo" className="dropdown-item text-uppercase text-dark">View Lecturer Info</Link>
                                </li>
                                <li>
                                    <Link to="/viewcourseinfo" className="dropdown-item text-uppercase text-dark">View Course Info</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item mx-3">
                        <div className="dropdown">
                            <button className="btn btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown">Create</button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/createstudentinfo" className="dropdown-item text-uppercase text-dark">Create Student Info</Link>
                                </li>
                                <li>
                                    <Link to="/createlecturerinfo" className="dropdown-item text-uppercase text-dark">Create Lecturer Info</Link>
                                </li>
                                <li>
                                    <Link to="/createcourseinfo" className="dropdown-item text-uppercase text-dark">Create Course Info</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item mx-3">
                        <button className="btn btn-lg" type="button">Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


