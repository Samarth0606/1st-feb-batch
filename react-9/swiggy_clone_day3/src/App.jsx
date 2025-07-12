import { Outlet } from "react-router-dom"
import Apicalling from "./components/Apicalling"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      {/* <Apicalling /> */}
    </div>
  )
}

export default App