import './Navbar.css';
import { useEffect, useRef, useState } from 'react';
import underlineImg from '../../assets/nav_underline.svg';
import menuOpen from '../../assets/menu_open.svg';
import menuClose from '../../assets/menu_close.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import themePattern from '../../assets/theme_pattern.svg';
import linkedinLogo from '../../assets/linkedin.svg';
import githubLogo from '../../assets/github.svg';
import Logo from '../Logo/Logo';
const Navbar = () => {
  const [menu, setMenu] = useState('home'); 
  const menuRef = useRef();
  useEffect(()=>{
    const handleScroll = ()=>{
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 2.5) {
          currentSection = section.getAttribute('id');
        }
      });
      setMenu(currentSection);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);
  const openMenu = ()=>{
    menuRef.current.classList.remove('-right-96');
    menuRef.current.classList.add('right-0');
  }

  const closeMenu = ()=>{
    menuRef.current.classList.remove('right-0');
    menuRef.current.classList.add('-right-96');
  }

  return (
    <div className='flex sticky top-0 lg:justify-around lg:backdrop-blur-md z-50 my-5 mx-[6%] lg:my-1 lg:mx-[7%] p-1'>
      <Logo/>
        <img src={menuOpen} onClick={openMenu} alt="Nav" className='block lg:hidden fixed cursor-pointer right-8'/>
        <ul ref={menuRef} className='list-none flex flex-col lg:flex-row fixed items-start top-0 gap-8 bg-[#1f0016] lg:bg-inherit w-96 lg:w-max h-full z-50 -right-96 transition-right duration-300 lg:static lg:items-center lg:justify-center lg:gap-16 lg:text-xl'>
          <img src={menuClose} onClick={closeMenu} alt="" className="block lg:hidden relative top-8 left-72 w-7 cursor-pointer mb-24" />
          <li className='menu-item'><AnchorLink className='anchor-link' offset={50} href='#top'><p onClick={()=>{setMenu('home')}}>Home</p></AnchorLink>{menu==='home' && <img src={underlineImg} alt="Home link" /> }</li>
          <li className='menu-item'><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>{setMenu('about')}}>About me</p></AnchorLink>{menu==='about' && <img src={underlineImg} alt="about link" /> }</li>
          <li className='menu-item'><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>{setMenu('services')}}>Services</p></AnchorLink>{menu==='services' && <img src={underlineImg} alt="services link" /> }</li>
          <li className='menu-item'><AnchorLink className='anchor-link' offset={50} href='#works'><p onClick={()=>{setMenu('works')}}>Projects</p></AnchorLink>{menu==='works' && <img src={underlineImg} alt="project links" /> }</li>
          <li className='menu-item'><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>{setMenu('contact')}}>Contact</p></AnchorLink>{menu==='contact' && <img src={underlineImg} alt="contact page link" /> }</li>
          <div className="social-container">
            <ul className='nav-socials'>
            <hr />
              <li><a href="https://www.linkedin.com/in/ramchandra-gawade/" target="_blank"><img src={linkedinLogo} alt="" /></a></li>
              <li><a href="https://github.com/ramchandragawade" target="_blank"><img src={githubLogo} alt="" /></a></li>
            </ul>
          </div>
        </ul>
        {/* <AnchorLink className='anchor-link' offset={50} href='#contact'><PatternBtn>Connect With Me</PatternBtn></AnchorLink> */}
    </div>
  )
}

export default Navbar