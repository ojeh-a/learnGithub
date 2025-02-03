import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <header>
      <div>
        <a href="/">logo</a>
      </div>
      <div className="navlinks">
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="about"> About </NavLink>
        <NavLink className="link" to="services"> Services </NavLink>
        <NavLink className="link" to="contact"> Contact_Me</NavLink>
      </div>
    </header>
  );
}

export default NavBar