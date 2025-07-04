import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()
    function handleDash(){
        navigate("/dashboard")
    }
    function handleAdmin(){
        console.log("in between tasks");
        navigate("/admin")
    }

  return (
    <div>
        <h1>Home</h1>

        {/* <a href="/dashboard"> VISIT DASHBOARD </a> */}
        <Link to="/dashboard">VISIT DASHBOARD</Link>

        <button onClick={handleDash} >Visit Dash</button>
        {/* <a href="/admin"> VISIT ADMIN </a> */}
        <Link to="/admin">VISIT ADMIN</Link>

        <button onClick={handleAdmin} >Visit adminn</button>
    </div>
  )
}

export default Home