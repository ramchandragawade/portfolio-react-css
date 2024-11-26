import './TitleBox.css';
import themePattern from '../../assets/theme_pattern.svg';
const TitleBox = ({title}) => {
  return (
	<div className="flex flex-col items-start lg:items-center justify-center">
		<div className="relative">
			<h1 className='p-0 lg:mb-1 lg:px-8 text-4xl lg:text-7xl font-semibold'>{title}</h1>
			<img className='absolute w-[120px] -right-3 lg:w-max bottom-0 lg:right-0 -z-10' src={themePattern} alt="theme pattern" />
		</div>
	</div>
  );
}

export default TitleBox