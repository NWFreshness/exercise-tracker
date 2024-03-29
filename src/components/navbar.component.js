import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expalnd-lg">
                <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                {/* <div className="collapse navbar-collapse"></div> */}
                <div className="">
                    <ul className="navbar-nav ar-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Excercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Exercise Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}