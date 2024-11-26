import TitleBox from '../../components/TitleBox/TitleBox'
import './Contact.css'
import mailIcon from '../../assets/mail_icon.svg';
import callIcon from '../../assets/call_icon.svg';
import locIcon from '../../assets/location_icon.svg';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState({
        error: null,
        message: ''
    });
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_t9rle5k', 'template_d7ejzfe', formRef.current, {
            publicKey: 'on5wRM5GZEaoF0UUE',
        }).then(
            () => {
                setError({
                    error: false,
                    message: 'Successfully Sent!'
                });
                setTimeout(()=>{
                    setError({
                        error: null,
                        message: ''
                    })
                },3000);
                formRef.current.reset();
            },
            (error) => {
                setError({
                    error: true,
                    message: 'Error while sending email!'
                });
            },
        );
    }
    return (
    <section id='contact' className='contact'>
        <TitleBox title={'Get in touch'}/>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I’m currently open to exploring new opportunities and taking on exciting challenges. Feel free to reach out—I’d love to hear from you!</p>
                <div className="contact-details">
                    <div className="contact-det">
                        <img src={mailIcon} alt="Email address" />
                        <a href="mailto:contact@ramchandragawade.in" className='email-link'>
                            <p>contact@ramchandragawade.in</p>
                        </a>
                    </div>
                    
                    <div className="contact-det">
                        <img src={locIcon} alt="Location" />
                        <p>Mumbai, India</p>
                    </div>
                </div>
            </div>
            <form className='contact-right' onSubmit={sendEmail} ref={formRef} autoComplete='on'>
                <label htmlFor="name">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' id='name' required autoComplete='name'/>

                <label htmlFor="email">Your Email</label>
                <input type="email" placeholder='Enter your email id' name='email' id='email' autoComplete='email' required/>

                <label htmlFor="message">Write your message here</label>
                <textarea name="message" id="message" placeholder='Enter your message' rows={8} autoComplete='off' required></textarea>
                <button className='contact-submit' type='submit' name='submit' id='submit'>Submit now</button>
                {error.error !== null && <p className='error-cls' style={{ color: error.error ?'red':'green'}} >{error.message}</p> }
            </form>
        </div>
    </section>
  )
}

export default Contact