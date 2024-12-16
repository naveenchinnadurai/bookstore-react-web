import { useEffect, useState } from 'react'
import { Book } from '../utils/types';
import fetchBooks from '../utils/fetchBooks'
import { MdExpandMore as More } from "react-icons/md";
import BookCard from './cards/bookCard';
import Popup from './popup';
import BuyCard from './cards/buyCard';

interface props {
    search: boolean,
    searchItem: string
}

function SearchBook(props: props) {
    const [searchBooks, setSearchBooks] = useState<Book[]>([]);
    const [count, setCount] = useState(20);
    const [popup, setPopup] = useState(false);
    const [popupData, setPopupData] = useState<Book | null>(null)

    const invokePopup = (e: Book) => {
        setPopup(true);
        setPopupData(e);
    };

    const closePopup = () => {
        setPopup(false);
    };

    useEffect(() => {
        const loadBooks = async () => {
            const searchBook = {
                search: props.searchItem,
                count: 40,
                startIndex: 0
            }
            const fetchedBooks = await fetchBooks(searchBook);
            setSearchBooks(fetchedBooks);
        };
        loadBooks();
    }, [props.search]);

    return (
        <div className="">
            <>
                {
                    popup ? (
                        <Popup onClose={closePopup}>
                            <BuyCard
                                key={popupData?.id || 0}
                                book={popupData}
                            />
                        </Popup>
                    ) : <></>
                }
            </>
            {
                props.search ? (<h1 className="text-xl text-slate-300 my-3">Your Search result for "{props.searchItem}" ,</h1>) : null
            }
            <div className={`items-center grid ${props.search ? "px-8 sm:px-5 md:px-10 lg:px-2 sm:py-5 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-6 " : ""}`}>
                {
                    props.search ? (
                        searchBooks.map((e, i) => {
                            if (i < count) {
                                return (
                                    <>
                                        <BookCard book={e} key={i} onClick={invokePopup} />
                                    </>
                                )
                            }
                        })
                    ) : (
                        <h2 className='text-center my-5'>Your Search Will appear here!!</h2>
                    )
                }
            </div>
            {count != 40 && props.search ? <button onClick={() => setCount(40)} className=' mx-auto flex items-center justify-center text-xl'>Load More <More className='text-2xl' /></button> : <></>}

        </div>
    )
}

export default SearchBook