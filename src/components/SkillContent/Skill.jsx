const Skill = ({name, logo}) => {
	return (
		<div className="flex flex-col items-center justify-center text-center text-sm lg:text-base bg-inherit shadow-lg shadow-[#B415FF] rounded-md p-2 m-1 min-w-24 max-w-24 lg:min-w-32 lg:max-w-32">
			<img className="h-7 lg:h-10" src={logo} alt= {name} />
			<p className="text-slate-200">{name!=='Studio'?name: <p><span className="hidden lg:inline">Android{' '}</span>Studio</p>}</p>
		</div>
	);
};

export default Skill