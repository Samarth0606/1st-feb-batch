import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import React, { lazy, Suspense } from "react"

// lazy( import Dashboard from "./components/Dashboard" )
// import Admin from "./components/Admin"
// import Dashboard from "./components/Dashboard"
const Admin = React.lazy(()=> import("./components/Admin"))
const Dashboard = lazy(()=> import("./components/Dashboard"))

// import Manager from "./components/Manager"
// import Reff from "./components/Reff"

function App() {
  return (
    <div>
      
     <Routes>
        <Route element={ <Home /> }      path="/" />
        <Route element={ <Suspense fallback="loading dash..." > <Dashboard /> </Suspense> } path="/dashboard" />
        <Route element={ <Suspense fallback="loading admin..." > <Admin /> </Suspense> }     path="/admin" />
     </Routes>

    </div> 
  )
}

export default App