const ExpSkill = ({name, logo, children}) => {
	return (
		<div className="flex flex-col text-center text-sm lg:text-base items-center justify-start min-h-20 max-h-20 min-w-16 max-w-16 lg:min-w-20 lg:max-w-20">
			<img className="h-7 lg:h-10" src={logo} alt={name} />
			<p>{name}</p>
            {children}
		</div>
	);
};

export default ExpSkill;
