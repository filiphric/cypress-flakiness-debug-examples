// Modal.tsx
import React from 'react';
import { CloseButton } from './CloseButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg w-1/2 z-10 relative">
        <button onClick={onClose} className="absolute top-2 right-2"><CloseButton className='fill-slate-500'/></button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
