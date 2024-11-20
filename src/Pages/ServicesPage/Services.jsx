import './Services.css';
import TitleBox from '../../components/TitleBox/TitleBox';
import servicesData from '../../assets/services_data';
import arrowIcon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='services' className='services'>
        <TitleBox title={'Services'}/>
        <div className="services-container">
          {servicesData.map((service, index)=>{
            return <div className="services-format" key={index}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrowIcon} alt="" />
              </div>
            </div>
          })}
        </div>
    </div>
  )
}

export default Services