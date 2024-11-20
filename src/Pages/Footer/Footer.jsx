import './Footer.css';
import footerLogo from '../../assets/footer_logo.svg';
import userIcon from '../../assets/user_icon.svg';
import PatternBtn from '../../components/Buttons/PatternBtn';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footerLogo} alt="" />
                <p>I am a frontend developer from, USA with 10 years of experience in companies like Microsoft, Tesla and Apple.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={userIcon} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <PatternBtn>Subscribe</PatternBtn>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">© 2023 Alex Bennett. All rights reserved.</div>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer