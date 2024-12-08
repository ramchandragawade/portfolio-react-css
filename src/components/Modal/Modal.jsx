import ReactDOM from 'react-dom';
const Modal = ({ isOpen, onClose, projectData }) => {
    if(!isOpen || !projectData) return null;
    const {title,shortDesc,description,imgs,techStack} = projectData;
	return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-modal-bg z-50 flex flex-col justify-center items-center">
            <div className="p-2 flex flex-col justify-center items-center gap-2 font-[Outfit] bg-white text-black rounded-lg min-w-full max-w-full md:min-w-[70%] md:max-w-[70%] text-center relative">
                <button className='text-2xl self-end border-none rounded-md cursor-pointer p-1'
                    onClick={onClose}>X</button>
                <h3 className='text-2xl lg:text-3xl font-semibold'>{title}</h3>
                <div className="md:w-[90%] h-auto items-center overflow-hidden relative rounded-lg">
                    <img src={imgs[0]} alt={title} className="object-cover w-full" />
                </div>
                <p>{description}</p>
            </div>
        </div>
    ,document.getElementById('modal-root'));
};

export default Modal;
