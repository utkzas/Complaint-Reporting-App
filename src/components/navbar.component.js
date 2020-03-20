import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
// this is navbar ke liye code
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg"> 
        <Link to="/" className="navbar-brand">wildcon online portal</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Incident Reports</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Incident Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}