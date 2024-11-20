import './Navbar.css';
import logo from "../../assets/logo.svg"
import PatternBtn from '../Buttons/PatternBtn';
import { useState } from 'react';
import underlineImg from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {
  const [menu, setMenu] = useState('home'); 
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='nav-menu'>
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>{setMenu('home')}}>Home</p></AnchorLink>{menu==='home' && <img src={underlineImg} alt="Home link" /> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>{setMenu('about')}}>About me</p></AnchorLink>{menu==='about' && <img src={underlineImg} alt="about link" /> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>{setMenu('services')}}>Services</p></AnchorLink>{menu==='services' && <img src={underlineImg} alt="services link" /> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#works'><p onClick={()=>{setMenu('works')}}>Projects</p></AnchorLink>{menu==='works' && <img src={underlineImg} alt="project links" /> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>{setMenu('contact')}}>Contact</p></AnchorLink>{menu==='contact' && <img src={underlineImg} alt="contact page link" /> }</li>
        </ul>
      <PatternBtn>Connect With Me</PatternBtn>
    </div>
  )
}

export default Navbar