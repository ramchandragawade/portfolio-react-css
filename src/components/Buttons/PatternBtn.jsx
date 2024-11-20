import './PatternBtn.css';
const PatternBtn = ({type, children}) => {
  return (
    <div className={`${type==='subscribe'?'btn-suscribe':'nav-connect'}`} >{children}</div>
  )
}

export default PatternBtn