import './PatternBtn.css';
const PatternBtn = ({type, className, children}) => {
  return (
    <div className={`${type==='subscribe'?'btn-suscribe':'nav-connect'} ${className}`} >{children}</div>
  )
}

export default PatternBtn