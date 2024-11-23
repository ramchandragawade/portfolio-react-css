import themePattern from '../../assets/theme_pattern.svg';
const Logo = () => {
  const goToTop = ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="flex-col align-middle justify-center" onClick={goToTop}>
        <div className="relative">
          <p className='text-2xl font-semibold'>Ram🌙</p>
          <img className='absolute -z-10 w-20 -bottom-1 -right-2' src={themePattern} alt="Ramchandra" />
        </div>
      </div>
  )
}

export default Logo