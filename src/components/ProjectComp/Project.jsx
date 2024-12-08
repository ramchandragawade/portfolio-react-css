import arrowIcon from '../../assets/arrow_icon.svg';
import githubLogo from '../../assets/github.svg';
import open_tab from '../../assets/open-tab.svg';
const Project = ({openFn, data, className }) => {
	const showMoreClick = (id)=>{
		openFn({
			isShown: true,
			data
		})
	}
	return (
		<div
			className={`flex flex-col box-border items-center gap-2 justify-center min-w-full max-w-full md:min-w-[40%] md:max-w-[40%] lg:min-w-[30%] lg:max-w-[30%] p-2 shadow-md
             shadow-site-purple border-site-purple border-opacity-30 hover:border-opacity-90 cursor-default duration-300 border-[1px] rounded-md ${className}`}
		>
			<div className="md:w-[95%] h-auto items-center overflow-hidden relative rounded-lg">
				<img src={data.imgs[0]} alt="" className="object-cover w-full" />
			</div>
			<h2 className="text-xl text-center font-semibold">{data.title}</h2>
			<p className="px-3 text-base font-thin">
				{data.shortDesc}
			</p>
			<div className="flex flex-row w-full justify-evenly">
				<div className='flex flex-row items-center text-white gap-2'>
					<div className='rounded-2xl hover:scale-110 duration-300 ease-in relative group'>
						<a href={data.gitUrl} target="_blank" className='inline-flex p-1 gap-1 cursor-pointer'>
							<img className='w-5' src={githubLogo} alt="" />
						</a>
						<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-white bg-gray-800 rounded hidden group-hover:block transition-all duration-200">
							View Code
						</div>
					</div>
					{
					data.demoUrl && 
						<div className='rounded-2xl hover:scale-110 duration-300 ease-in relative group'>
							<a href={data.demoUrl} target="_blank" className='inline-flex p-1 gap-1 cursor-pointer'>
								<img className='w-5' src={open_tab} alt="" />
							</a>
							<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-white bg-gray-800 rounded hidden group-hover:block transition-all duration-200">
								Live Demo
							</div>
						</div>
					}
				</div>
				<div onClick={()=>{showMoreClick(data.id)}} className="flex gap-1 mb-2 rounded-[50px] border-opacity-80 hover:border-opacity-100 border-[1px] border-site-purple py-2 px-3 w-fit text-base font-medium duration-500 cursor-pointer hover:gap-3 hover:duration-500">
					<p>Show More</p>
					<img src={arrowIcon} alt="" className="w-4" />
				</div>
			</div>
		</div>
	);
};

export default Project;
