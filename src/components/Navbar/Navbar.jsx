import './Navbar.css';
import logo from "../../assets/logo.svg"
import PatternBtn from '../Buttons/PatternBtn';
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About me</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      <PatternBtn>Connect With Me</PatternBtn>
    </div>
  )
}

export default Navbar