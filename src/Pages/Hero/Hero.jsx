import './Hero.css';
import profileImg from '../../assets/profile_img.svg';
import heroImg from '../../assets/mf-avatar.svg';
import PatternBtn from '../../components/Buttons/PatternBtn';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={heroImg} alt="Profile Image" />
        <h1><span>I am Alex Bennet</span>, frontend developer based in USA.</h1>
        <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple. </p>
        <div className='hero-action'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'><PatternBtn>Connect With Me</PatternBtn></AnchorLink>            
        <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero