import heroImg from '../../assets/raaj-avatar.svg';
import PatternBtn from '../../components/Buttons/PatternBtn';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import dwnldIcon from '../../assets/download.svg';

const Hero = () => {
  return (
    <section id='home' className='flex flex-col items-center justify-center gap-7 lg:gap-5 h-dvh'>
        <img className='w-44 lg:w-60' src={heroImg} alt="Profile Image" />
        <h1 className='text-center w-2/3 text-xl md:text-4xl lg:text-5xl xl:text-6xl'>
          <span className='bg-custom-gradient text-transparent bg-clip-text'>Hi! I am Ramchandra Gawade</span>,
          <br />Senior Software Engineer
          <br />based in Mumbai, <span className='bg-india-colors text-transparent bg-clip-text'>India</span>.
        </h1>
        <p className='w-full text-center text-base lg:w-2/3 md:text-lg lg:text-2xl xl:text-3xl'>
          With over 5 years of experience,<br className='block md:hidden'/> I specialize in <span className='bg-custom-gradient-rev text-transparent bg-clip-text'>front-end development</span>.
        <br />Along the way, I’ve also explored <span className='bg-custom-gradient-rev text-transparent bg-clip-text'>full-stack development </span>
        <br className='block lg:hidden'/>with the MERN stack through various hands-on projects.
        </p>
        <div className='flex flex-col md:flex-row items-center gap-6 font-medium'>
          <AnchorLink className='w-max' offset={50} href='#contact'>
            <PatternBtn>Connect With Me</PatternBtn>
          </AnchorLink>
          <div className='flex py-3.5 px-10 rounded-full items-center border-2 cursor-pointer duration-200 transition-all hover:border-site-purple'>
            <p>My resume</p><img src={dwnldIcon} alt="" className='w-8'/>
          </div>
        </div>
    </section>
  )
}

export default Hero