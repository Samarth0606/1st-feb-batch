import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        {/* <a href="/">back</a> */}
         <Link to="/" >back</Link>
        <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard