import React from 'react';
import { useNavigate } from 'react-router-dom';
import './modal1.css';

function Modal({ isOpen, onClose }) {
    const navigate = useNavigate();

    const handleNavigation = (route) => {
        navigate(route);
        onClose(); // Close the modal after navigation
    };

    if (!isOpen) return null;

    return (
        <div className="modal open">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <ul>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>ГЛАВНАЯ</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('/gallery'); }}>ГАЛЕРЕЯ</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Modal;
