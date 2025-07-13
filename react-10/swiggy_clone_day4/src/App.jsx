import { Outlet } from "react-router-dom"
import Apicalling from "./components/Apicalling"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import appStore from "./utils/appStore"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={appStore} >
      <div>
        <Header />
        <Outlet />
        <Footer />
        {/* <Apicalling /> */}
      </div>
    </Provider>
  )
}

export default App