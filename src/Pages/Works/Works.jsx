import TitleBox from '../../components/TitleBox/TitleBox';
import './Works.css';
import workData from '../../assets/mywork_data';
import arrowIcon from '../../assets/arrow_icon.svg'
const Works = () => {
  return (
    <section id='works' className='works'>
        <TitleBox title={'My latest work'}/>
        <div className="works-container">
            {workData.map((work, index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="works-showmore">
            <p>Show More</p>
            <img src={arrowIcon} alt="" />
        </div>
    </section>
  )
}

export default Works