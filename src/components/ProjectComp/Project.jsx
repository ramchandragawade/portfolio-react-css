import yelp1 from '../../assets/yelp1.png';
import arrowIcon from '../../assets/arrow_icon.svg';
const Project = ({ className }) => {
	return (
		<div
			className={`flex flex-col box-border items-center gap-2 justify-center min-w-full max-w-full md:min-w-[40%] md:max-w-[40%] lg:min-w-[30%] lg:max-w-[30%] p-2 shadow-md
             shadow-site-purple border-site-purple border-opacity-30 hover:border-opacity-90 cursor-default duration-300 border-[1px] rounded-md ${className}`}
		>
			<div className="md:w-[95%] h-auto items-center overflow-hidden relative rounded-lg">
				<img src={yelp1} alt="" className="object-cover w-full" />
			</div>
			<h2 className="text-xl text-center font-semibold">YelpCamp!</h2>
			<p className="px-3 text-base font-thin">
				YelpCamp is a campground review and creation platform built with
				MongoDB, Express.js, Node.js, and integrated with MapBox,
				Passport.js, and Cloudinary for enhanced functionality.
			</p>
			<div className="flex gap-3 mb-2 rounded-[50px] border-opacity-80 hover:border-opacity-100 border-[1px] border-site-purple py-2 px-5 w-fit text-lg font-medium duration-500 cursor-pointer hover:gap-10 hover:duration-500">
				<p>Show More</p>
				<img src={arrowIcon} alt="" className="" />
			</div>
		</div>
	);
};

export default Project;
