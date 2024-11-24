import TitleBox from '../../components/TitleBox/TitleBox';
import Education from './Education';
import './ExpEdu.css';
import Experience from './Experience';

const ExpEdu = () => {
	return (
		<section className="flex flex-col justify-center mx-[6%] lg:mx-[10%] gap-10 lg:gap-16">
			<TitleBox title={'About me'} />
			<div className="">
				<Experience/>
				<Education/>
			</div>
		</section>
	);
};

export default ExpEdu;
