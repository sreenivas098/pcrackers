import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
    <Link className="navbar-brand" to="/branch">
        <img src="assets/logo.jpeg" width="30" height="30" className="d-inline-block align-top" alt="" />&nbsp;&nbsp;
        PCrackers
    </Link>
    </nav>
  )
}

export default Navbar