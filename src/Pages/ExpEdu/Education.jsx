import workExpLogo from '../../assets/work-exp.svg';
import gradLogo from '../../assets/grad.svg';
import diplomaLogo from '../../assets/diploma.svg';
import schoolLogo from '../../assets/school.svg';

const Education = () => {
	return (
		<div className="p-2 mb-5 lg:mb-10">
			<h1 className="text-3xl my-3 lg:my-5 font-semibold">Education</h1>
			<ol className="relative border-s mt-5 border-site-purple ml-[1%]">
				<li className="mb-2 mx-6">
					<span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white">
						<img src={gradLogo} alt="" />
					</span>
					<h3 className="flex items-center mx-1 mb-1 text-lg font-semibold text-white">
						Vidyalankar Institute of Technology, Mumbai
					</h3>
					<div className="">
						<div className="flex flex-col lg:flex-row lg:gap-3 mb-1 text-base lg:text-lg font-semibold text-slate-300">
							<span>Bachelor of Engineering - BE (Computer Engineering)</span>
							<span className='hidden lg:block'>|</span>
							<span className='text-slate-400 font-normal'>University of Mumbai</span>	
						</div>
						<time className="block mb-2 text-sm lg:text-base font-semibold leading-none text-gray-400">
							July 2016 - Jun 2019
						</time>
					</div>
					<h4 className="flex items-center mb-1 text-base lg:text-lg font-normal text-slate-300">
						Grade: 8.7 CGPA
					</h4>
				</li>
				<li className="mb-2 mx-6">
					<span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white">
						<img src={diplomaLogo} alt="" />
					</span>
					<h3 className="flex items-center mx-1 mb-1 text-lg font-semibold text-white">
					Kala Vidya Mandir Polytechnic, Mumbai
					</h3>
					<div className="">
						<div className="flex flex-col lg:flex-row lg:gap-3 mb-1 text-base lg:text-lg font-semibold text-slate-300">
							<span>Diploma in Computer Engineering</span>
							<span className='hidden lg:block'>|</span>
							<span className='text-slate-400 font-normal'>Maharashtra State Board of Technical Education</span>	
						</div>
						<time className="block mb-2 text-sm lg:text-base font-semibold leading-none text-gray-400">
							July 2013 - Jun 2016
						</time>
						{/* <time className="block mb-2 text-base font-normal leading-none text-gray-400">
							July 2015 - Jun 2016
						</time> */}
					</div>
					<h4 className="flex items-center mb-1 text-base lg:text-lg font-normal text-slate-300">
						Grade: 85%
					</h4>
				</li>
				{/* <li className="mb-2 mx-6">
					<span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white">
						<img src={diplomaLogo} alt="" />
					</span>
					<h3 className="flex items-center mx-1 mb-1 text-lg font-semibold text-white">
					PVPP's Manohar Phalke Polytechnic
					</h3>
					<div className="">
						<h4 className="flex items-center mb-1 text-lg font-semibold text-slate-300">
						Diploma in Computer Engineering
						</h4>
						<time className="block mb-2 text-base font-normal leading-none text-gray-400">
							July 2013 - July 2015
						</time>
					</div>
					<h4 className="flex items-center mb-1 text-base lg:text-lg font-semibold text-slate-300">
						Grade: 85%
					</h4>
				</li> */}
				<li className="mb-2 mx-6">
					<span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white">
						<img src={schoolLogo} alt="" />
					</span>
					<h3 className="flex items-center mx-1 mb-1 text-lg font-semibold text-white">
					Shree N.D. Bhuta High School, Mumbai
					</h3>
					<div className="flex flex-col lg:flex-row lg:gap-3 mb-1 text-base lg:text-lg font-semibold text-slate-300">
							<span>SSC</span>
							<span className='hidden lg:block'>|</span>
							<span className='text-slate-400 font-normal'>Maharashtra State Board of Secondary
							& Higher Secondary Education</span>	
						</div>
					<h4 className="flex items-center mb-1 text-base lg:text-lg font-normal text-slate-300">
						Grade: 83%
					</h4>
				</li>
			</ol>
		</div>
	);
};

export default Education;
