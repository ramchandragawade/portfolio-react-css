import TitleBox from '../../components/TitleBox/TitleBox'
import './Contact.css'
import mailIcon from '../../assets/mail_icon.svg';
import callIcon from '../../assets/call_icon.svg';
import locIcon from '../../assets/location_icon.svg';

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <TitleBox title={'Get in touch'}/>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-det">
                        <img src={mailIcon} alt="Email address" />
                        <p>contact@ramchandragawade.in</p>
                    </div>
                    <div className="contact-det">
                        <img src={callIcon} alt="Phone number" />
                        <p>+91-8082779679</p>
                    </div>
                    <div className="contact-det">
                        <img src={locIcon} alt="Location" />
                        <p>Mumbai, India</p>
                    </div>
                </div>
            </div>
            <form className='contact-right'>
                <label htmlFor="name">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' id='name'/>

                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email id' name='email' id='email'/>

                <label htmlFor="message">Write your message here</label>
                <textarea name="message" id="message" placeholder='Enter your message' rows={8}></textarea>
                <button className='contact-submit' type='submit'>Submit now</button>

            </form>
        </div>
    </div>
  )
}

export default Contact