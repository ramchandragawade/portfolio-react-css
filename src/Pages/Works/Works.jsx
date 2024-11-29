import TitleBox from '../../components/TitleBox/TitleBox';
import './Works.css';
import yelp1 from '../../assets/yelp1.png';
import arrowIcon from '../../assets/arrow_icon.svg';
import Project from '../../components/ProjectComp/Project';
const Works = () => {
	return (
		<section
			id="works"
			className="flex flex-col justify-center mx-[5%] lg:mx-[10%] gap-5"
		>
			<TitleBox title={'Projects'} />
			<h3 className="text-base lg:text-lg mt-7 lg:mt-10">
				This page showcases a collection of hands-on projects I’ve
				undertaken to expand my skills, explore new technologies, and
				push creative boundaries beyond my professional work.
				<br />
				These projects reflects my dedication to continuous learning and
				my passion for turning ideas into tangible results.
			</h3>
			{/* <div className="works-container">
				{workData.map((work, index) => {
					return <img key={index} src={work.w_img} alt="" />;
				})}
			</div> */}
      {/* grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 */}
			<div className="flex flex-row flex-wrap gap-5 justify-center">
				<Project/>
				<Project/>
				<Project/>
        <Project className={'hidden md:flex'}/>
				<Project className={'hidden md:flex'}/>
				<Project className={'hidden md:flex'}/>


			</div>
		</section>
	);
};

export default Works;
