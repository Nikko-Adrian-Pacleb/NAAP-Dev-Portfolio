import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoNAAP from '../../assets/images/Logo.png'

const Topbar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoNAAP} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <h2>HOME</h2>
      </NavLink>
      <NavLink
        style={{ textDecoration: 'none' }}
        exact="true"
        activeclassname="active"
        to="/about"
        className="about-link"
      >
        <h2>ABOUT</h2>
      </NavLink>
      {/* <NavLink
        style={{ textDecoration: 'none' }}
        exact="true"
        activeclassname="active"
        to="/project"
        className="project-link"
      >
        <h2>PROJECTS</h2>
      </NavLink> */}
      <NavLink
        exact="true"
        activeclassname="active"
        to="/contact"
        className="contact"
      >
        <h2>CONTACT</h2>
      </NavLink>
    </nav>
  </div>
)

export default Topbar
