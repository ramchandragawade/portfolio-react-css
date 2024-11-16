import './Navbar.css';
import logo from "../../assets/logo.svg"
import ConnectBtn from '../Buttons/ConnectBtn';
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
      <ConnectBtn/>
    </div>
  )
}

export default Navbar