import './Hero.css';
import heroImg from '../../assets/raaj-avatar.svg';
import PatternBtn from '../../components/Buttons/PatternBtn';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <section id='home' className='hero'>
        <img src={heroImg} alt="Profile Image" />
        <h1><span>Hi! I am Ramchandra Gawade</span>,<br />Senior Software Engineer based in Mumbai, India.</h1>
        <p>With over 5 years of experience, I specialize in front-end development.<br />
        Along the way, I’ve also explored full-stack development with the MERN stack through various hands-on projects
        </p>
        <div className='hero-action'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'><PatternBtn>Connect With Me</PatternBtn></AnchorLink>            
        <div className="hero-resume">My resume</div>
        </div>
    </section>
  )
}

export default Hero