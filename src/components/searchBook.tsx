import { useEffect, useState } from 'react'

import { Book } from '../utils/datatypes';
import API_URL from '../utils/apiURL';
import fetchBooks from '../utils/fetchBooks'
import { MdExpandMore as More } from "react-icons/md";
import BookCard from './cards/bookCard';
import Popup from './popup';

interface props {
    search: boolean,
    searchItem: string
}

function SearchBook(props: props) {
    const [searchBooks, setSearchBooks] = useState<Book[]>([]);
    const [popup, setPopup] = useState(false);
    const [count, setCount] = useState(18)
    const [popupData, setPopupData] = useState<Book>({
        id: '12has234-498jhj-dff',
        volumeInfo: {
            title: "Th Random Book",
            pageCount: 40,
            infoLink: "unknow",
            description: "A detailed information about the book",
            publishedDate: "07/09/2004",
            averageRating: 5,
            authors: ["someone"],
            imageLinks: {
                thumbnail: 'jkhdv'
            },
            categories: ['akg', 'asjkfh']
        },
        saleInfo: {
            listPrice: {
                amount: '200',
            },
        }
    })

    const invokePopup = (e: Book) => {
        setPopup(true);
        setPopupData(e)
    };

    const closePopup = () => {
        setPopup(false);
    };

    useEffect(() => {
        const loadBooks = async () => {
            const search = props.searchItem;
            const count = 30;
            const fetchedBooks = await fetchBooks({ API_URL, search, count });
            setSearchBooks(fetchedBooks);
        };
        loadBooks();
    }, [props.search]);

    return (
        <div className="">
            <>
                {
                    popup ? (
                        <Popup bookInfo={popupData} onClose={closePopup} />
                    ) : <></>
                }
            </>
            <div className={`items-center grid ${props.search ? "px-12 sm:p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 " : ""}`}>
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
                        <h2 className='text-center'>Your Search Will appear here!!</h2>
                    )
                }
            </div>
            {count != 30 && props.search ? <button onClick={() => setCount(30)} className=' mx-auto flex items-center justify-center text-xl'>Load More <More className='text-2xl' /></button> : <></>}

        </div>
    )
}

export default SearchBook