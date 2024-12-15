import { Book } from "../../types/datatypes"

interface prop {
    book: Book,
    key: number,
    onClick: (e: Book) => void
}
function BookCard({ book, key, onClick }: prop) {
    const bookData: Book = book
    const handleClick = () => {
        onClick(book)
    }
    return (
        <button key={key} className="rounded flex cursor-pointer group hover:rounded-3xl overflow-hidden hover:scale-105 hover:rotate-2 transition-all duration-200 ease-in-out relative " onClick={handleClick}>
            <img
                src={bookData.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
                alt={bookData.volumeInfo.title}
                className="mb-2 w-full h-72 group-hover:blur-sm ease-in-out transition-blur duration-500"
            />
            <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full bg-slate-800 bg-opacity-70 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h3 className="text-lg font-semibold text-center">{bookData.volumeInfo.title}</h3>
                <p className="text-gray-400 text-center">{bookData.volumeInfo.authors?.join(', ')}</p>
                <p className="text-gray-300 text-center">${bookData.saleInfo?.listPrice?.amount || '~300'}</p>
            </div>
        </button>
    )
}

export default BookCard