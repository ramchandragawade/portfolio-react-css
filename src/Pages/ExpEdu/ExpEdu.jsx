import TitleBox from '../../components/TitleBox/TitleBox';
import Education from './Education';
import './ExpEdu.css';
import Experience from './Experience';
import expLogo from '../../assets/work-exp-tab.svg';
import eduLogo from '../../assets/grad-tab.svg';
import { useState } from 'react';

const ExpEdu = () => {
	const [tab, setTab] = useState('exp');
	return (
		<section id='about' className="flex flex-col mx-[5%] lg:mx-[15%]">
			<TitleBox title={'About me'} />
			<div className="w-full mt-16">
				<div className="relative right-0">
					<ul className="relative flex flex-wrap list-none rounded-md" data-tabs="tabs" role="list">
					<li className="z-30 flex-auto text-center">
						<a className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 hover:bg-[#8722b6] transition-all ease-in-out border-0  cursor-pointer text-slate-100 ${tab==='exp'?'bg-[#8722b6]':'bg-[#a226dc]'}`}
						data-tab-target="" role="tab" aria-selected="true"
						onClick={()=>{setTab('exp')}}
						>
						<img src={expLogo} alt="" className='h-6'/>
						<span className="ml-1">Experience</span>
						</a>
					</li>
					<li className="z-30 flex-auto text-center">
					<a className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 hover:bg-[#8722b6] transition-all ease-in-out border-0  cursor-pointer text-slate-100 ${tab==='edu'?'bg-[#8722b6]':'bg-[#a226dc]'}`}
					data-tab-target="" role="tab" aria-selected="false"
						onClick={()=>{setTab('edu')}}
						>
						<img src={eduLogo} alt="" className='h-6'/>
						<span className="ml-1">Education</span>
						</a>
					</li>
					</ul>
				</div>
			</div>
			<div className={`lg:mt-7`}>
				{tab==='exp' ? <Experience /> : <Education />}	
			</div>
		</section>
	);
};

export default ExpEdu;
