import { useState, useEffect } from 'react';

import BookCard from '../../components/cards/bookCard';
import banner from '../../assets/banner.png'
import fetchBooks from '../../utils/fetchBooks';
import { FaSearch as Search } from "react-icons/fa";
import { FaQuoteLeft as QuoteStart, FaQuoteRight as QuoteEnd } from "react-icons/fa";
import { benefits } from '../../utils/data'
import { Book } from '../../utils/datatypes';
import { Link } from 'react-router-dom';
import { BuyCardSimple } from '../../components/cards/buyCard';


function Home() {
    const [books, setBooks] = useState<Book[]>([]);
    useEffect(() => {
        const loadBooks = async () => {
            const searchBook = {
                search: " Best Sellers",
                count: 10,
                startIndex: 0
            }
            const fetchedBooks = await fetchBooks(searchBook);
            setBooks(fetchedBooks);
        };
        loadBooks();
    }, []);
    return (
        <div className=' ' >
            <div className='flex flex-col md:flex-row mt-5'>
                <div className='md:w-3/5 flex flex-col gap-3 justify-center '>
                    <h1 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-medium'>Where every book is a journey, and every reader an explorer.</h1>
                    <div className='p-2 md:hidden flex'>
                        <img src={banner} alt="Banner Image" />
                    </div>
                    <p className='text-2xl font-light mt-3 text-center md:text-left'>Unlock your passport to endless adventures and explore captivating worlds within our vast bookstore collection today.</p>
                    <Link to="/searchbook" className=' w-fit mx-auto md:mx-0 px-6 sm:px-8 py-2 mt-3 rounded-xl flex items-center gap-3 cursor-pointer border border-purple-950 bg-gradient-to-tr from-[#1b0f25] to-[#4b206c]'>
                        <Search className='text-md sm:text-lg' />
                        <span className='text-lg sm:text-xl'>Search</span>
                    </Link>
                </div>
                <div className='p-2 hidden md:flex'>
                    <img src={banner} alt="Banner Image" />
                </div>
            </div>
            <div className='my-10'>
                <h2 className="text-3xl font-semibold mb-6">Featured Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-3 px-3 sm:px-10 ">
                    {
                        books.map((book, i) => {
                            if (i < 5) {
                                return (
                                    <BookCard book={book} key={i} onClick={() => { }} />
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <div className='flex flex-col gap-5'>
                    <h2 className="text-4xl md:text-7xl text-center font-bold md:font-medium">Read, Unwind and Refresh</h2>
                    <h1 className="text-xl md:text-3xl lg:text-4xl text-center">Reason,Why Incorporating Books into Your Life Promotes Health</h1>
                </div>
                <div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 py-5 px-2 md:px-0 lg:px-10'>
                    {
                        benefits.map((e, i) => {
                            return (
                                <div key={i} className="h-full border-2 border-[rgba(75,30,133,0.1)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,0.4)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
                                    <h1 className="text-2xl font-medium">{e.title}</h1>
                                    <p className="text-lg text-gray-300">{e.para}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-3 my-5'>
                <h2 className="text-3xl font-normal">Get Started Now</h2>
                <div className='flex gap-0 px-3'>
                    <QuoteStart className='text-xl md:text-2xl' />
                    <h2 className="text-3xl sm:text-5xl font-normal text-center mx-2">Experience the Magic of Reading</h2>
                    <QuoteEnd className='text-xl md:text-2xl' />
                </div>
                <Link to="/searchbook" className=' w-fit px-6 py-1 mt-3 rounded-xl flex items-center gap-3 cursor-pointer border border-purple-950 bg-gradient-to-tr from-[#1b0f25] to-[#4b206c]'>
                    <Search className='text-md' />
                    <span className='text-lg'>Search</span>
                </Link>
            </div>
            <h2 className="text-5xl font-medium text-center my-2">Some Books</h2>
            <div className='overflow-auto'>
                <div className='flex w-fit p-5 gap-4 overflow-auto '>
                    {
                        books.map((e, i) => {
                            if (i >= 5 && i <= 10) {
                                return (
                                    <BuyCardSimple
                                        key={i}
                                        book={e}
                                    />
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home