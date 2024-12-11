import TitleBox from '../../components/TitleBox/TitleBox';
import yelp1 from '../../assets/yelp1.png';
import Project from '../../components/ProjectComp/Project';
import { useState } from 'react';
import Project_Data from '../../assets/projects_data';
import Modal from '../../components/Modal/Modal';
const Works = () => { 
	const [openModal, setOpenModal] = useState({
		isShown: false,
		data: null
	});
	const onClose = ()=>{
		setOpenModal({
			isShown: false,
			data: null
		});
		document.body.style.overflow = '';
	}
	return (
		<section
			id="works"
			className="flex flex-col justify-center mx-[5%] lg:mx-[12%] xl:mx-[15%] gap-5 mb-20 lg:mb-36"
		>
			<TitleBox title={'Projects'} />
			<h3 className="text-base lg:text-lg mt-7 lg:mt-10">
				This page showcases a collection of hands-on projects I’ve
				undertaken to expand my skills, explore new technologies, and
				push creative boundaries beyond my professional work. These
				projects reflects my dedication to continuous learning and my
				passion for turning ideas into tangible results.
			</h3>
			{/* <div className="works-container">
				{workData.map((work, index) => {
					return <img key={index} src={work.w_img} alt="" />;
				})}
			</div> */}
			{/* grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 */}
			<div className="flex flex-row flex-wrap gap-5 2xl:gap-10 justify-center md:justify-around lg:justify-center">
				{
					Project_Data.map((itm,i)=>{
						return <Project openFn={setOpenModal} data={itm} key={itm.id}/>
					})
				}
			</div>
			<Modal isOpen={openModal.isShown} onClose={onClose} projectData={openModal.data}/>
		</section>
	);
};

export default Works;
