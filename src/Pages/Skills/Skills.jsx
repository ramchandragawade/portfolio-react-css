import Skill from '../../components/SkillContent/Skill';
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
import reactLogo from '../../assets/react.svg';
import mongoLogo from '../../assets/mongodb.svg';
import nodeLogo from '../../assets/nodejs.svg';
import nodeLogoSm from '../../assets/nodejssm.svg';
import javaLogo from '../../assets/java.svg';
import tailwindLogo from '../../assets/tailwind.svg';
import apiLogo from '../../assets/api-logo.svg';
import vscodeLogo from '../../assets/vscode.svg';
import firebaseLogo from '../../assets/firebase.svg';
import androidLogo from '../../assets/android.svg';
import androidStudioLogo from '../../assets/androidstudio.svg';
import bootstrapLogo from '../../assets/bootstrap.svg';
import expressLogo from '../../assets/express-js.svg';
import ejsLogo from '../../assets/ejs.svg';
import reduxLogo from '../../assets/redux.svg';
import invisionLogo from '../../assets/invision.svg';
import couchbaseLogo from '../../assets/couchbase.svg';
import mapboxLogo from '../../assets/mapbox.svg';
import cloudinaryLogo from '../../assets/cloudinary.svg';
import jiraLogo from '../../assets/jira1.svg';



const Skills = () => {
	return (
		<section
			id="skills"
			className="flex flex-col justify-center mx-[6%] lg:mx-[10%] gap-5"
		>
			<TitleBox title={'Skills'} />
			<h3 className="text-base lg:text-lg mt-10">
				I demonstrate strong proficiency in a range of technologies and
				tools vital for web development and software engineering.
				<br />
				My hands-on experience and expertise enable me to contribute
				valuable skills to any project or team. Dive in below to discover more about my capabilities.
				<br />
			</h3>
			<div className="flex flex-row flex-wrap gap-2">
                <h3 className="text-base lg:text-lg w-full">Technologies I've worked on:</h3>
				<div className="flex flex-row flex-wrap items-start gap-5 justify-start">
					<Skill logo={jsLogo} name={'JavaScript'} />
					<Skill logo={SenchaExtLogo} name={'ExtJs'} />
					<Skill logo={htmlLogo} name={'HTML'} />
					<Skill logo={jsonLogo} name={'JSON'} />
					<Skill logo={cssLogo} name={'CSS'} />
					<Skill logo={tailwindLogo} name={'Tailwind Css'} />
                    <Skill logo={bootstrapLogo} name={'Bootstrap'} />
                    <Skill logo={reactLogo} name={'React'} />
                    <Skill logo={reduxLogo} name={'Redux'} />
                    <Skill logo={mongoLogo} name={'MongoDB'} />
                    <Skill logo={nodeLogoSm} name={'NodeJs'} />
                    <Skill logo={expressLogo} name={'ExpressJs'} />
                    <Skill logo={ejsLogo} name={'EmbeddedJs'} />
					<Skill logo={senchaLogo} name={'Sencha Test'} />
					<Skill logo={jasmineLogo} name={'Jasmine'} />
					{/* <Skill logo={cssLogo} name={'SCSS'} /> */}
					<Skill logo={gitLogo} name={'GIT'} />
                    <Skill logo={apiLogo} name={'REST APIs'} />
                    <Skill logo={javaLogo} name={'Java'} />
                    <Skill logo={androidLogo} name={'Android'} />

				</div>
			</div>
            <div className="flex flex-row flex-wrap gap-2">
                <h3 className="text-base lg:text-lg w-full">Tools I've worked on:</h3>
				<div className="flex flex-row flex-wrap gap-5 items-center justify-start">
					<Skill logo={githubLogo} name={'Github'} />
					<Skill logo={dockerLogo} name={'Docker'} />
					<Skill logo={jenkinsLogo} name={'Jenkins'} />
					<Skill logo={portrainerLogo} name={'Portainer'} />
					<Skill logo={couchbaseLogo} name={'Couchbase'} />
					<Skill logo={postmanLogo} name={'Postman'} />
					<Skill logo={vscodeLogo} name={'VS Code'} />
					<Skill logo={firebaseLogo} name={'Firebase'} />
					<Skill logo={androidStudioLogo} name={'Studio'} />
					<Skill logo={jiraLogo} name={'JIRA'} />
					<Skill logo={invisionLogo} name={'InVision'} />
					<Skill logo={mapboxLogo} name={'Mapbox'} />
					<Skill logo={cloudinaryLogo} name={'Cloudinary'} />
				</div>
			</div>
		</section>
	);
};

export default Skills;
