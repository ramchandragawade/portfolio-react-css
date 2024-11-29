import './Footer.css';
import themePattern from '../../assets/theme_pattern.svg';
import userIcon from '../../assets/user_icon.svg';
import PatternBtn from '../Buttons/PatternBtn';
import Logo from '../../components/Logo/Logo';

const Footer = () => {
	return (
		<div className="my-14 mx-[5%] lg:mx-[12%] xl:mx-[15%] flex flex-col gap-6">
			<div className="flex flex-col gap-7 lg:gap-0 lg:flex-row lg:justify-between">
				<div className="">
					<div className="flex flex-col items-start justify-center">
						<Logo />
					</div>
					<p className="text-base max-w-96">
						I am a frontend developer from Mumbai, India with 5
						years of experience.
					</p>
				</div>
				<div className="flex flex-row items-center gap-2 lg:gap-4">
					<div className="flex flex-row gap-5 rounded-[50px] bg-[#32323B] py-3 px-3 max-w-52 lg:max-w-full lg:py-4 lg:px-5 hover:border-2">
						<img src={userIcon} alt="" className='hidden lg:block'/>
						<input
							type="email"
							name="email-sub"
							id="email-sub"
							placeholder="Enter your email"
                            className='outline-none border-none text-base w-full lg:text-lg bg-transparent text-gray-400 font-[Outline]'
						/>
					</div>
					<PatternBtn type={'subscribe'}>Subscribe</PatternBtn>
				</div>
			</div>
			<hr className="" />
			<div className="flex flex-col-reverse mb-12 lg:mb-0 lg:flex-row justify-between text-lg">
				<div className="">
					© 2024 Ramchandra Gawade. All rights reserved.
				</div>
				<div className="flex flex-row gap-12 mb-12">
					<p>Term of Services</p>
					<p>Privacy Policy</p>
					<p>Connect with me</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
