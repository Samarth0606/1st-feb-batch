import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <div>
        {/* <a href="/">back</a> */}
        <Link to="/" >back</Link>
        <h1>Admin</h1>
    </div>
  )
}

export default Admin