import './TitleBox.css';
import themePattern from '../../assets/theme_pattern.svg';
const TitleBox = ({title}) => {
  return (
	<div className="title-container">
		<div className="title-box">
			<h1>{title}</h1>
			<img src={themePattern} alt="theme pattern" />
		</div>
	</div>
  );
}

export default TitleBox