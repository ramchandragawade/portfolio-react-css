import './Navbar.css';
import logo from "../../assets/logo.svg"
import PatternBtn from '../Buttons/PatternBtn';
import { useState } from 'react';
import underlineImg from '../../assets/nav_underline.svg';
const Navbar = () => {
  const [menu, setMenu] = useState('home'); 
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='nav-menu'>
            <li><p onClick={()=>{setMenu('home')}}>Home</p>{menu==='home' && <img src={underlineImg} alt="Home link" /> }</li>
            <li><p onClick={()=>{setMenu('about')}}>About me</p>{menu==='about' && <img src={underlineImg} alt="about link" /> }</li>
            <li><p onClick={()=>{setMenu('services')}}>Services</p>{menu==='services' && <img src={underlineImg} alt="services link" /> }</li>
            <li><p onClick={()=>{setMenu('works')}}>Projects</p>{menu==='works' && <img src={underlineImg} alt="project links" /> }</li>
            <li><p onClick={()=>{setMenu('contact')}}>Contact</p>{menu==='contact' && <img src={underlineImg} alt="contact page link" /> }</li>
        </ul>
      <PatternBtn>Connect With Me</PatternBtn>
    </div>
  )
}

export default Navbar