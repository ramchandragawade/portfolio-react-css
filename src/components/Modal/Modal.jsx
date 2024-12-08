import ReactDOM from 'react-dom';
const Modal = ({ isOpen, onClose, projectData }) => {
    if(!isOpen || !projectData) return null;
    const {title,shortDesc,description,imgs,techStack} = projectData;
	return ReactDOM.createPortal(
        <div className="">
            <button onClick={onClose}>Close</button>
            <img src={imgs[0]} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    ,document.getElementById('modal-root'));
};

export default Modal;
