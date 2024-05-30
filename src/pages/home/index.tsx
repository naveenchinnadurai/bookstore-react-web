import { useState, useEffect } from 'react';

import BookCard from '../../components/cards/bookCard';
import banner from '../../assets/banner.png'

import { FaSearch as Search } from "react-icons/fa";
import {
    FaQuoteLeft as QuoteStart,
    FaQuoteRight as QuoteEnd
} from "react-icons/fa";

import { benefits } from '../../utils/data'
import fetchBooks from '../../utils/fetchBooks';
import { Book } from '../../utils/datatypes';
import API_URL from '../../utils/apiURL';
import { Link } from 'react-router-dom';
import BuyCard from '../../components/cards/buyCard';


function Home() {
    const [books, setBooks] = useState<Book[]>([]);
    useEffect(() => {
        const loadBooks = async () => {
            const search = "best sellers and novels";
            const count = 5;
            const fetchedBooks = await fetchBooks({ API_URL, search, count });
            setBooks(fetchedBooks);
        };
        loadBooks();
    }, []);
    return (
        <div>
            <div className='flex flex-col md:flex-row px-10 mt-5'>
                <div className='md:w-3/5 flex flex-col gap-3 justify-center md:px-5'>
                    <h1 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl'>Where every book is a journey, and every reader an explorer.</h1>
                    <p className='text-2xl mt-3'>Unlock your passport to endless adventures and explore captivating worlds within our vast bookstore collection today.</p>
                    <Link to="/searchbook" className=' w-fit px-8 py-2 mt-3 rounded-xl flex items-center gap-3 cursor-pointer border border-purple-950 bg-gradient-to-tr from-[#1b0f25] to-[#4b206c]'>
                        <Search className='text-lg' />
                        <span className='text-xl'>Search</span>
                    </Link>
                </div>
                <div className='p-2'>
                    <img src={banner} alt="Banner Image" />
                </div>
            </div>

            <div className=' mx-4 md:mx-10 my-10'>
                <h2 className="text-3xl font-semibold mb-6">Featured Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-3 px-10 ">
                    {books.map((book) => (
                        <BookCard book={book} key={book.id} />
                    ))}
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <div className='flex flex-col gap-5'>
                    <h2 className="text-4xl md:text-7xl text-center">Read, Unwind and Refresh</h2>
                    <h1 className="text-xl md:text-4xl text-center">Reason,Why Incorporating Books into Your Life Promotes Health</h1>
                </div>
                <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-7 py-10 px-5 md:px-16'>
                    {
                        benefits.map((e, i) => {
                            return (
                                <div key={i} className='border border-slate-800 p-6 flex flex-col gap-3 rounded-xl h-full'>
                                    <h1 className='text-3xl font-medium text-center'>{e.title}</h1>
                                    <p className='text-lg text-center'>{e.para}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <h2 className="text-5xl font-medium text-center my-5">Top Novels</h2>
            <div className='grid md:grid-cols-2 p-5 gap-4'>
                {
                    books.map((e, i) => {
                        if (i <= 3) {
                            return (
                                <BuyCard
                                    key={i}
                                    author={e.volumeInfo.authors}
                                    title={e.volumeInfo.title}
                                    price={e.saleInfo?.listPrice?.amount}
                                    category={e.volumeInfo.categories}
                                    img={e.volumeInfo.imageLinks?.thumbnail}
                                />
                            )
                        }
                    })
                }
            </div>
            <div className='flex flex-col justify-center items-center gap-3 mt-5'>
                <h2 className="text-3xl font-normal">Get Started Now</h2>
                <div className='flex gap-0 px-3'>
                    <QuoteStart className='text-xl md:text-2xl' />
                    <h2 className="text-3xl sm:text-5xl font-normal text-center">Experience the Magic of Reading</h2>
                    <QuoteEnd className='text-xl md:text-2xl' />
                </div>
                <Link to="/searchbook" className=' w-fit px-6 py-1 mt-3 rounded-xl flex items-center gap-3 cursor-pointer border border-purple-950 bg-gradient-to-tr from-[#1b0f25] to-[#4b206c]'>
                    <Search className='text-md' />
                    <span className='text-lg'>Search</span>
                </Link>
            </div>
        </div>
    )
}

export default Home