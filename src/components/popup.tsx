import React from 'react';
import BuyCard from './cards/buyCard';
import { Book } from '../utils/datatypes';
interface PopupProps {
  bookInfo: Book ;
  onClose: () => void;
}
const Popup: React.FC<PopupProps> = ({ bookInfo, onClose }) => {
  return (
    <div className="py-10 px-5 fixed top-0 left-0 flex lg:items-center justify-center w-screen h-screen overflow-auto bg-black bg-opacity-70 z-50">
      <div className='relative w-full md:w-3/4 h-fit '>
        <BuyCard
          key={bookInfo?.id}
          book={bookInfo}
          isPopup={true}
        />
        <button className="absolute top-5 right-5 bg-blue-500 text-white px-2 py-1 rounded" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Popup;
