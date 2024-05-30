import React from 'react';
import BuyCard from './cards/buyCard';
import { prop } from './cards/buyCard';
interface PopupProps {
  bookInfo: prop;
  onClose: () => void;
}
const Popup: React.FC<PopupProps> = ({ bookInfo, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className='relative'>
        <BuyCard
          author={bookInfo.author}
          title={bookInfo.title}
          price={bookInfo.price}
          category={bookInfo.category}
          img={bookInfo.img}
        />
        <button className="absolute top-5 right-5 bg-blue-500 text-white px-2 py-1 rounded" onClick={onClose}>X</button>
      </div>



    </div>
  );
};

export default Popup;
