import TitleBox from '../../components/TitleBox/TitleBox';
import './Contact.css';
import mailIcon from '../../assets/mail_icon.svg';
import callIcon from '../../assets/call_icon.svg';
import locIcon from '../../assets/location_icon.svg';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
	const formRef = useRef();
	const [error, setError] = useState({
		error: null,
		message: '',
	});
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm('service_t9rle5k', 'template_d7ejzfe', formRef.current, {
				publicKey: 'on5wRM5GZEaoF0UUE',
			})
			.then(
				() => {
					setError({
						error: false,
						message: 'Successfully Sent!',
					});
					setTimeout(() => {
						setError({
							error: null,
							message: '',
						});
					}, 3000);
					formRef.current.reset();
				},
				(error) => {
					setError({
						error: true,
						message: 'Error while sending email!',
					});
				}
			);
	};
	return (
		<section
			id="contact"
			className="flex flex-col justify-center mx-[5%] lg:mx-[12%] xl:mx-[15%] gap-5"
		>
			<TitleBox title={'Get in touch'} />
			<div className="flex flex-col lg:flex-row justify-between w-full gap-6 lg:gap-8">
				<div className="flex flex-col mb-2 lg:mb-0 gap-5 lg:gap-8 basis-2/5">
					<h1 className="text-4xl lg:text-5xl font-bold bg-custom-gradient-rev bg-clip-text text-transparent">
						Let's talk
					</h1>
					<p className="text-base w-[95%] text-slate-300">
						I’m currently open to exploring new opportunities and
						taking on exciting challenges. Feel free to reach
						out—I’d love to hear from you!
					</p>
					<div className="flex flex-col gap-6 text-slate-300 text-xl">
						<div className="flex flex-row items-center gap-4">
							<img
								src={mailIcon}
								alt="Email address"
								className="w-6"
							/>
							<a
								href="mailto:contact@ramchandragawade.in"
								className="no-underline text-inherit"
							>
								<p>contact@ramchandragawade.in</p>
							</a>
						</div>

						<div className="flex flex-row items-center gap-4">
							<img src={locIcon} alt="Location" className="w-6" />
							<p>Mumbai, India</p>
						</div>
					</div>
				</div>
				<form
					className="basis-[55%] flex flex-col items-start gap-3 lg:gap-4"
					onSubmit={sendEmail}
					ref={formRef}
					autoComplete="on"
				>
					<label
						htmlFor="name"
						className="text-slate-300 text-xl font-medium"
					>
						Your Name
					</label>
					<input
						type="text"
						placeholder="Enter your name"
						name="name"
						className="border-none w-full bg-[#32323c] text-gray-400 font-[Outfit] p-4 rounded-md"
						id="name"
						required
						autoComplete="name"
					/>

					<label
						htmlFor="email"
						className="text-slate-300 text-xl font-medium"
					>
						Your Email
					</label>
					<input
						type="email"
						placeholder="Enter your email id"
						name="email"
						className="border-none w-full bg-[#32323c] text-gray-400 font-[Outfit] p-4 rounded-md"
						id="email"
						autoComplete="email"
						required
					/>

					<label
						htmlFor="message"
						className="text-slate-300 text-xl font-medium"
					>
						Write your message here
					</label>
					<textarea
						name="message"
						id="message"
						placeholder="Enter your message"
						className="border-none w-full bg-[#32323c] text-gray-400 font-[Outfit] p-4 rounded-md"
						rows={8}
						autoComplete="off"
						required
					></textarea>
					<button
						className="py-4 px-7 lg:py-[18px] lg:px-10 rounded-[50px] text-base cursor-pointer duration-500 bg-custom-gradient hover:scale-105"
						type="submit"
						name="submit"
						id="submit"
					>
						Submit now
					</button>
					{error.error !== null && (
						<p
							className={`bg-white text-lg font-[Outfit] px-5 py-2 rounded-lg ${
								error.error ? 'text-red-600' : 'text-green-600'
							}`}
						>
							{error.message}
						</p>
					)}
				</form>
			</div>
		</section>
	);
};

export default Contact;
