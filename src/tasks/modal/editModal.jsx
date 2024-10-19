import './editModal.css';


function EditModal({ show, onClose, children }) {
    if (!show) {
        return null;
    }

    return (
        <div className="edit-modal-overlay">
            <div className="edit-modal-card">
                <button className="edit-close-button" onClick={onClose}>x</button>
                {children}
            </div>
        </div>
    );
}

export default EditModal;