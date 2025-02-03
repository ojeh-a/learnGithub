import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"


const HomeLayout = () => {
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomeLayout