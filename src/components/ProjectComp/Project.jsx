import yelp1 from '../../assets/yelp1.png';
import arrowIcon from '../../assets/arrow_icon.svg';
const Project = () => {
	return (
		<div className="flex flex-col box-border items-center gap-2 justify-center w-full md:min-w-[320px] md:max-w-[320px] p-2 shadow-md shadow-site-purple border-site-purple border-[0.1rem] rounded-md">
			<div className="md:w-[300px] h-auto items-center overflow-hidden relative rounded-lg">
				<img src={yelp1} alt="" className="object-cover w-full" />
			</div>
			<h2 className="text-2xl text-center font-semibold">YelpCamp!</h2>
			<p className="px-3 text-base font-thin">
				YelpCamp is a campground review and creation platform built with
				MongoDB, Express.js, Node.js, and integrated with MapBox,
				Passport.js, and Cloudinary for enhanced functionality.
			</p>
			<div className="flex gap-3 mb-2 rounded-[50px] border-[0.5px] border-site-purple py-2 px-5 w-fit text-lg font-medium duration-500 cursor-pointer hover:gap-10 hover:duration-500">
				<p>Show More</p>
				<img src={arrowIcon} alt="" className=''/>
			</div>
		</div>
	);
};

export default Project;
