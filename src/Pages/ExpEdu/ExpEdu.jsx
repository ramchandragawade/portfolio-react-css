import TitleBox from '../../components/TitleBox/TitleBox';
import SenchaExtLogo from '../../assets/sencha-ext.svg';
import jsLogo from '../../assets/js.svg';
import senchaLogo from '../../assets/sencha-std.svg';
import htmlLogo from '../../assets/html.svg';
import cssLogo from '../../assets/css-logo.svg';
import jsonLogo from '../../assets/json.svg';
import gitLogo from '../../assets/git-logo.svg';
import githubLogo from '../../assets/github.svg';
import dockerLogo from '../../assets/docker.svg';
import jenkinsLogo from '../../assets/jenkins.svg';
import portrainerLogo from '../../assets/portainer.svg';
import postmanLogo from '../../assets/postman.svg';
import jasmineLogo from '../../assets/jasmine.svg';
import workExpLogo from '../../assets/work-exp.svg';

import './ExpEdu.css';

const ExpEdu = () => {
	return (
		<section className="flex flex-col justify-center mx-[6%] lg:mx-[10%] gap-10 lg:gap-16">
			<TitleBox title={'About me'} />
			<div className="">
				<div className="p-2">
					<h1 className="text-3xl my-5 font-semibold">Experience</h1>
					<ol className="relative border-s border-gray-200 dark:border-gray-700">
						<li className="mb-10 ms-6">
							<span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white">
                <img src={workExpLogo} alt="" />
							</span>
							<h3 className="flex items-center mx-1 mb-1 text-lg font-semibold text-gray-900 dark:text-white">
								NEC Software Solutions (India) Pvt Ltd.
								<span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
									Latest
								</span>
							</h3>
							<h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-slate-400">
								Current Role: Senior Software Engineer
							</h4>
							<time className="block mb-2 text-base font-normal leading-none text-gray-400 dark:text-gray-400">
								July 2019 - Present
							</time>
							<h4 className="flex items-center mb-1 text-base lg:text-lg font-semibold text-gray-900 dark:text-slate-300">
              With 5+ years at NEC Software Solutions, specializing in ExtJS/Sencha Framework (MVVM architecture) for the Policing & Public Safety division, I progressed from Associate to Senior Software Engineer through expertise, innovation, and dedication to project success.
							</h4>
							<h4 className="flex items-center mb-1 text-base lg:text-lg font-semibold text-gray-900 dark:text-slate-400">
								Worked with:
							</h4>
							<div className="flex flex-row items-start gap-5 flex-wrap justify-start text-sm lg:text-base">
								<div className="flex flex-col items-center justify-center">
									<img
										className="h-8 lg:h-10"
										src={jsLogo}
										alt=""
									/>
									<p>JavaScript</p>
								</div>
								<div className="flex flex-col items-center justify-center">
									<img
										className="h-8 lg:h-10"
										src={SenchaExtLogo}
										alt=""
									/>
									<p>ExtJs</p>
									<p>Sencha</p>
								</div>
								<div className="flex flex-col items-center justify-center">
									<img
										className="h-8 lg:h-10"
										src={senchaLogo}
										alt=""
									/>
									<p>Sencha Test</p>
								</div>
								<div className="flex flex-col items-center justify-center">
									<img
										className="h-8 lg:h-10"
										src={jasmineLogo}
										alt=""
									/>
									<p>Jasmine</p>
								</div>
								<div className="flex flex-col items-center justify-center">
									<img
										className="h-8 lg:h-10"
										src={htmlLogo}
										alt=""
									/>
									<p>HTML</p>
								</div>
								<div className="flex flex-col items-center justify-center">
									<img
										className="h-8 lg:h-10"
										src={cssLogo}
										alt=""
									/>
									<p>CSS</p>
									<p>SCSS</p>
								</div>
								<div className="flex flex-col items-center justify-center">
									<img
										className="h-8 lg:h-10"
										src={jsonLogo}
										alt=""
									/>
									<p>JSON</p>
								</div>
								<div className="flex flex-col items-center justify-center">
									<img
										className="h-8 lg:h-10"
										src={gitLogo}
										alt=""
									/>
									<p>GIT</p>
									<div className="flex flex-row items-center justify-center">
										<img
											src={githubLogo}
											className="h-4"
											alt=""
										/>
										<p>Github</p>
									</div>
								</div>
								<div className="flex flex-col items-center justify-center">
									<img
										className="h-8 lg:h-10"
										src={dockerLogo}
										alt=""
									/>
									<p>Docker</p>
								</div>
								<div className="flex flex-col items-center justify-center">
									<img
										className="h-8 lg:h-10"
										src={jenkinsLogo}
										alt=""
									/>
									<p>Jenkins</p>
								</div>
								<div className="flex flex-col items-center justify-center">
									<img
										className="h-8 lg:h-10"
										src={portrainerLogo}
										alt=""
									/>
									<p>Portainer</p>
								</div>
								<div className="flex flex-col items-center justify-center">
									<img
										className="h-8 lg:h-10"
										src={postmanLogo}
										alt=""
									/>
									<p>REST Api</p>
									<p>Postman</p>
								</div>
							</div>
              <h4 className="flex items-center my-1 text-base lg:text-lg font-semibold text-gray-900 dark:text-slate-400">
								Key Achievements:
							</h4>
              <ul className='flex flex-col list-disc marker:text-[#B415FF] px-4 gap-1'>
                <li>Successfully launched the NEC Connect GO application in collaboration with the UK Athena Consortium and Metropolitan Police, ensuring smooth operations in live production.</li>
                <li>Honored with several awards, including the Feather in the Cap, Self-Directed Learning Award, The Achievers, and the Rising Star Award.</li>
                <li>Consistently delivered high-quality releases, achieving a record of 3 releases in 2 quarters, while ensuring seamless integration with backend services and collaborating effectively with cross-functional teams to drive project success.</li>
                <li>Played a key role in mentoring new hires and fostering a collaborative team environment, accelerating onboarding and skill development.</li>
              </ul>
							{/* <ol className="relative border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ms-6">
                      <h4 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-slate-300'>Senior Software Engineer</h4>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2016 - Present</time>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                    </li>                  
                  </ol> */}
						</li>
					</ol>
				</div>
				<div className="">
					<h1>Education</h1>
				</div>
			</div>
		</section>
	);
};

export default ExpEdu;
