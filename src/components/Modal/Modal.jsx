import ReactDOM from 'react-dom';
import githubLogo from '../../assets/github.svg';
import open_tab from '../../assets/open-tab.svg';

const Modal = ({ isOpen, onClose, projectData }) => {
    if(!isOpen || !projectData) return null;
    const {title,shortDesc,description,imgs,techStack, gitUrl, demoUrl} = projectData;
	return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-modal-bg z-50 flex flex-col justify-center items-center">
            <div className="p-2 flex flex-col justify-center items-center gap-2 font-[Outfit] text-white bg-[#161513] rounded-lg min-w-full max-w-full md:min-w-[90%] md:max-w-[90%] text-center relative">
                <button className='text-2xl self-end border-none rounded-md cursor-pointer p-1'
                    onClick={onClose}>X</button>
                <h3 className='text-2xl lg:text-3xl font-medium -mt-9'>{title}</h3>
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="md:w-[70%] items-center overflow-hidden relative rounded-lg p-3 mb-2 md:mb-6">
                        <img src={imgs[0]} alt={title} className="object-cover" />
                    </div>
                    <div className="md:w-[30%] flex flex-col gap-2 justify-evenly">
                        <p className='font-thin'>{description}</p>
                        <div className='flex flex-row text-white w-full justify-evenly mb-2'>
                            <div className='bg-custom-gradient rounded-2xl transition-all hover:scale-105 duration-300'>
                                <a href={gitUrl} target="_blank" className='inline-flex p-2 gap-1 mx-2 cursor-pointer'>
                                    View Code
                                    <img className='md:w-5' src={githubLogo} alt="" />
                                </a>
                            </div>
                            <div className='bg-custom-gradient rounded-2xl transition-all hover:scale-105 duration-300'>
                                <a href={demoUrl} target="_blank" className='inline-flex p-2 gap-1 mx-2 cursor-pointer'>
                                    Live Demo
                                    <img className='w-5' src={open_tab} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ,document.getElementById('modal-root'));
};

export default Modal;
