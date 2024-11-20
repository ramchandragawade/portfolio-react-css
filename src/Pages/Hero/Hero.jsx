import './Hero.css';
import profileImg from '../../assets/profile_img.svg'
import PatternBtn from '../../components/Buttons/PatternBtn';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profileImg} alt="Profile Image" />
        <h1><span>I am Alex Bennet</span>, front end developer based in USA.</h1>
        <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple. </p>
        <div className='hero-action'>
            <PatternBtn>Connect With Me</PatternBtn>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero