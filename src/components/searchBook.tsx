import { useEffect, useState } from 'react'

import { Book } from '../utils/datatypes';
import API_URL from '../utils/apiURL';
import fetchBooks from '../utils/fetchBooks'

import BookCard from './cards/bookCard';

interface props{
    search:boolean,
    searchItem:string
}

function SearchBook(props:props) {
    const [searchBooks, setSearchBooks] = useState<Book[]>([]);
    useEffect(() => {
        const loadBooks = async () => {
            const search=props.searchItem;
            const count=25;
            const fetchedBooks = await fetchBooks({API_URL,search,count});
            setSearchBooks(fetchedBooks);
        };
        loadBooks();
    }, [props.search]);
    return (
        <div className={`items-center grid ${props.search? "px-12 sm:p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ":""}`}>
            {
                props.search ? (
                    searchBooks.map((e,i)=> {
                        return (
                            <BookCard book={e} key={i}/>
                        )
                    })
                ) : (
                    <h2 className='text-center'>Your Search Will appear here!!</h2>
                )
            }
        </div>
    )
}

export default SearchBook