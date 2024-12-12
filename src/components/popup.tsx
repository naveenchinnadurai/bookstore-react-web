import React, { ReactNode } from 'react';
import { IoClose as Close } from "react-icons/io5";


interface PopupProps {
  children: ReactNode;
  onClose: () => void;
}
const Popup: React.FC<PopupProps> = ({ children, onClose }) => {
  return (
    <div className="py-10 px-5 fixed top-0 left-0 flex lg:items-center justify-center w-screen h-screen overflow-auto bg-black bg-opacity-70 z-50">
      <div className='relative w-full xl:w-3/4 h-fit '>
        {children}
        <button className="absolute top-5 right-5 text-2xl text-white px-2 py-1 rounded" onClick={onClose}>
          <Close />
        </button>
      </div>
    </div>
  );
};

export default Popup;
