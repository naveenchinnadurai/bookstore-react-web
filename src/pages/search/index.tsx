import { useState } from 'react';
import { Link } from 'react-router-dom';
import Inputs from '../../components/inputs';
import SearchBook from '../../components/searchBook';
function Search() {

    const [input, setInput] = useState<string>("");
    const [buttonClick, setButtonClick] = useState<boolean>(false)
    const getInput = (e: any) => {
        setInput(e.target.value)
    }

    return (
        <div className='flex flex-col justify-between min-h-full'>
            <div className="flex flex-col pt-10">
                <h1 className="text-5xl font-bold mb-4 text-center">Dive into a World of Stories</h1>
                <p className="text-2xl text-center">Discover, Explore, and Immerse Yourself in <br /> the Best Books of All Time.</p>
            </div>
            <div className='p-10 flex flex-col sm:flex-row gap-3 justify-between md:justify-center md:gap-4 items-center'>
                <Inputs setInputs={getInput} value={input} placeHolder="Enter Book Name" />
                <span className='bg-purple-950 px-4 py-2 rounded-lg h-full text-md cursor-pointer' onClick={() => setButtonClick(!buttonClick)}>Get Books</span>
            </div>
            <SearchBook search={buttonClick} searchItem={input} />
            <>
                {
                    buttonClick ? (
                        <div className='flex flex-col items-center mt-3'>
                            <h2 className='text-3xl font-bold text-center'>Don't Get the Book You Searched for??</h2>
                            <Link to="https://books.google.com/" className=' w-fit px-8 py-2 rounded-xl flex items-center gap-3 cursor-pointer underline'>
                                <span className='text-xl'>Get On Google Books</span>
                            </Link>
                        </div>
                    ) : <></>
                }
            </>
        </div>
    )
}

export default Search