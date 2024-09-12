import React from 'react'
import '../Forms/Form.css'

const Modal = ({ src, alt, onClose }) => {
    return (
        <div className="modal">
            <span className="close" onClick={onClose}>
                &times;
            </span>
            <img className="modal-content" src={src} alt={alt} />
        </div>
    )
}

export default Modal