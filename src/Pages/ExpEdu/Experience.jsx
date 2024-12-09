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
import couchbaseLogo from '../../assets/couchbase.svg';
import apiLogo from '../../assets/api-logo.svg';
import necLogo from '../../assets/nec_logo.jpg';
import ExpSkill from '../../components/SkillContent/ExpSkill';


const Experience = () => {
	return (
		<div className="p-2 mb-5 lg:mb-10">
			<h1 className="text-3xl my-3 lg:my-5 font-semibold">Experience</h1>
			<ol className="relative mt-5 border-s border-site-purple ml-[1%]">
				<li className="mx-6">
					<span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white">
						<img src={workExpLogo} alt="" />
					</span>
					<h3 className="flex items-center mx-1 mb-1 text-base md:text-lg font-semibold text-gray-900 dark:text-white">
						NEC Software Solutions (India) Pvt Ltd.
						<span className="bg-blue-100 text-blue-900 text-xs md:text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-[#a226dc] dark:text-white ms-3">
							Latest
						</span>
					</h3>
					<h4 className="flex items-center mb-1 text-base md:text-lg font-semibold text-gray-900 dark:text-slate-400">
						Current Role: Senior Software Engineer
					</h4>
					<time className="block mb-2 text-sm md:text-base font-semibold leading-none text-gray-400 dark:text-gray-400">
						July 2019 - Present
					</time>
					<h4 className="flex items-center mb-1 text-base lg:text-lg font-semibold text-gray-900 dark:text-slate-300">
						With 5+ years at NEC Software Solutions, I progressed from
						Associate to Senior Software Engineer by specializing in
						ExtJS/Sencha Framework (MVVM architecture) for Policing & Public Safety software,
						delivering high-quality releases, ensuring seamless
						backend integration, and collaborating with
						cross-functional teams to drive success.
					</h4>
					<h4 className="flex items-center mb-1 text-base lg:text-lg font-semibold text-gray-900 dark:text-slate-400">
						Worked with:
					</h4>
					<div className="flex flex-row items-start gap-5 flex-wrap text-center justify-start text-sm lg:text-base">
						<ExpSkill logo={jsLogo} name={'Javascript'}/>
						<ExpSkill logo={SenchaExtLogo} name={'ExtJs'}>
							<p>Sencha</p>
						</ExpSkill>
						<ExpSkill logo={senchaLogo} name={'Sencha Test'}/>
						<ExpSkill logo={jasmineLogo} name={'Jasmine'}/>
						<ExpSkill logo={htmlLogo} name={'HTML'}/>
						<ExpSkill logo={cssLogo} name={'CSS'}>
							<p>SCSS</p>
						</ExpSkill>
						<ExpSkill logo={jsonLogo} name={'JSON'}/>
						<ExpSkill logo={gitLogo} name={'GIT'}>
							<div className="flex flex-row items-center justify-center">
								<img src={githubLogo} className="h-4" alt="" />
								<p>Github</p>
							</div>
						</ExpSkill>
						<ExpSkill logo={dockerLogo} name={'Docker'}/>
						<ExpSkill logo={jenkinsLogo} name={'Jenkins'}/>
						<ExpSkill logo={portrainerLogo} name={'Portainer'}/>
						<ExpSkill logo={couchbaseLogo} name={'Couchbase'}/>
						<ExpSkill logo={apiLogo} name={'REST APIs'}/>
						<ExpSkill logo={postmanLogo} name={'Postman'}/>
					</div>
					<h4 className="flex items-center my-1 text-base lg:text-lg font-semibold text-gray-900 dark:text-slate-400">
						Key Achievements:
					</h4>
					<ul className="flex flex-col text-base lg:text-lg list-disc marker:text-site-purple px-4 gap-1">
						<li>
							Facilitated the successful launch of the NEC Connect
							GO application in collaboration with the
							<span className="font-semibold italic text-site-purple">
								{' '}
								UK Athena Consortium and Metropolitan Police
							</span>
							, ensuring smooth operations in live production.
						</li>
						<li>
							Received several notable honors, including the
							{/* <span className='bg-custom-gradient-rev-light text-transparent bg-clip-text'> Fea</span>ther in the Cap</span>, 
                <span className='bg-custom-gradient-rev-light text-transparent bg-clip-text'> Self-Directed Learning Award</span>,
                <span className='bg-custom-gradient-rev-light text-transparent bg-clip-text'> The Achievers</span> &
                <span className='bg-custom-gradient-rev-light text-transparent bg-clip-text'> The Rising Star Award</span> */}
							<span className="font-semibold italic text-site-purple">
								{' '}
								Feather in the Cap, Self-Directed Learning
								Award, The Achievers & The Rising Star Award
							</span>
						</li>
						{/* <li>
							Consistently delivered high-quality releases, while
							ensuring seamless integration with backend services
							and collaborating effectively with cross-functional
							teams to drive project success.
						</li> */}
						<li>
							Played a key role in
							<span className="font-semibold italic text-site-purple">
								{' '}
								mentoring{' '}
							</span>
							new hires and fostering a collaborative team
							environment, accelerating onboarding and skill
							development.
						</li>
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
	);
};

export default Experience;
