import './modal.css';


function Modal({ show, onClose, children }) {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-card">
                <button className="close-button" onClick={onClose}>x</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;