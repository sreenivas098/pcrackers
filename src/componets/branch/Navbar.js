import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-light">
    <Link class="navbar-brand" to="/branch">
        <img src="" width="30" height="30" class="d-inline-block align-top" alt="" />
        PCrackers
    </Link>
    </nav>
  )
}

export default Navbar