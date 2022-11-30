import React from 'react';

const ConfirmationModal = ({ title, message, successButtonName, closeModal, modalData, successAction }) => {
    return (
        <div>
            <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle " />
            <div className="modal">
                <div className="modal-box rounded-none">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4 font-bold">{message}</p>
                    <div className="modal-action">
                        <label 
                        onClick={() => successAction(modalData)} 
                        htmlFor="confirmation-modal" 
                        className="btn btn-sm rounded-none btn-error">{successButtonName}</label>
                        <button onClick={closeModal} className="text-slate-600 font-bold px-3 py-1 shadow bg-slate-200">cancel</button>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default ConfirmationModal;