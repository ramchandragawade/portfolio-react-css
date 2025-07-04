import './About.css';
import heroImg from '../../assets/raaj-avatar-dif.svg';
import TitleBox from '../../components/TitleBox/TitleBox';
const About = () => {
  return (
    <section>
    {/* <section id='about' className='about'> */}
        <TitleBox title={'About me'}/>
        <div className="about-sections">
            <div className="about-left">
                <img src={heroImg} alt="profile img" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>React.js</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>NextJs</p><hr style={{width:"60%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-honors">
            <div className="about-honor">
                <h1>6+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-honor">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-honor">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </section>
  )
}

export default About