import { Link } from "react-router-dom";
import { Book } from "../../utils/types"
import { CiStar as Star } from "react-icons/ci";
import { FaCartShopping as Cart } from "react-icons/fa6";
import { PiApproximateEqualsBold as Approximate } from "react-icons/pi";


interface Prop {
    book: Book | null,
    key: number | string | null
}

export function BuyCardSimple({ book, key }: Prop) {
    return (
        <div className="w-[280px] md:w-[320px] p-4 bg-[rgba(18,9,31,0.1)] border border-slate-900 rounded-xl flex-col relative overflow-visible shadow-md" key={key}>
            <div className="card-img flex justify-center w-auto  h-[280px] rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-[25%] hover:shadow-[0px_13px_47px_-5px_rgba(226,196,63,0.25),_0px_8px_16px_-8px_rgba(180,71,71,0.3)]">
                <img src={book?.volumeInfo.imageLinks?.thumbnail} alt={book?.volumeInfo.title} className="w-full h-full rounded-lg" />
            </div>
            <div className="sm:ps-4 md:ps-0 sm:w-2/3 md:w-full flex flex-col justify-stretch">
                <div className="my-3">
                    {/* <h2 className={`text-3xl font-bold text-center sm:text-start leading-[1.5] md:text-center lg:text-start hidden sm:flex`}>{book?.volumeInfo.title}</h2> */}
                    <div className="flex flex-col gap-0 md:gap-2 text-lg md:text-xl font-normal text-center sm:text-start md:text-center lg:text-start">
                        <h2 >Author : {book?.volumeInfo.authors}</h2>
                        <h2 >Category: {book?.volumeInfo.categories || 'unknown'}</h2>
                        <h2 >Published On: {book?.volumeInfo.publishedDate}</h2>
                    </div>
                    <div className={`flex gap-2 mt-1 md:mt-3 justify-center sm:justify-normal md:justify-center lg:justify-normal items-center`}>
                        <p className="text-lg ">AVG Rating : {book?.volumeInfo.averageRating || 3.5}  </p>
                        <span className="text-xl"><Star /></span>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center pt-2.5 border-t border-gray-300">
                    <h2 className="text-3xl font-medium text-center sm:text-start md:text-center lg:text-start flex ">$ {book?.saleInfo?.listPrice?.amount || ~270}</h2>
                    <div className="card-button border border-gray-900 flex items-center gap-2 p-1 cursor-pointer rounded-full transition-all duration-300 hover:border-orange-300 hover:bg-orange-300">
                        {/* <Link to={book?.volumeInfo.infoLink} className=' w-fit text-lg h-fit px-5 py-1 rounded-lg flex items-center gap-3 cursor-pointer border '>Know More</Link> */}
                        <Cart className="text-3xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function BuyCard({ book, key }: Prop) {
    return (
        <div className="bg-slate-900 relative overflow-visible shadow-md flex items-center sm:items-start lg:items-start flex-col justify-center flex-wrap md:flex-row rounded-xl p-4 h-full w-full" key={key}>
            <div className="w-full sm:w-7/12 mx-auto md:w-5/12 h-auto">
                <img src={book?.volumeInfo.imageLinks?.thumbnail} alt={book?.volumeInfo.title} className="w-full h-full rounded-lg" />
            </div>
            <div className="w-full md:w-7/12 py-5 sm:px-5 md:py-0 lg:py-5 flex justify-center items-center md:items-start flex-col gap-5 lg:gap-5">
                <h2 className={`text-3xl font-bold text-center sm:text-start md:text-center lg:text-start hidden sm:flex`}>{book?.volumeInfo.title}</h2>
                <p className="visible text-lg text-center md:text-left">{book?.volumeInfo.description?.slice(0, 200)} <span><Link to={book?.volumeInfo.infoLink || "/"}>...more</Link></span></p>
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <h2 className="text-xl font-normal text-center sm:text-start md:text-center lg:text-start">Author : {book?.volumeInfo.authors}</h2>
                    <h2 className="text-xl font-normal text-center sm:text-start md:text-center lg:text-start">Category: {book?.volumeInfo.categories || 'unknown'}</h2>
                    <h2 className="text-xl font-normal text-center sm:text-start md:text-center lg:text-start">Published On: {book?.volumeInfo.publishedDate}</h2>
                </div>
                <div className={`flex gap-2 justify-center sm:justify-normal md:justify-center lg:justify-normal items-center`}>
                    <p className="text-2xl flex gap-2"><span className="hidden sm:block">Average</span> Ratings of {book?.volumeInfo.averageRating || 3.5}  </p>
                    <span className="text-2xl"><Star /></span>
                </div>
                <p className={`text-center sm:text-start md:text-center lg:text-left flex`}>Total Page Count of the book {book?.volumeInfo.pageCount || 273}</p>
                <h2 className="text-5xl font-medium text-center sm:text-start md:text-center lg:text-start flex items-center gap-2">$ {book?.saleInfo?.listPrice?.amount || <span className="flex gap-1 text-2xl"><Approximate />270</span>}</h2>
                <div className="flex gap-3 mt-2 flex-wrap justify-center md:justify-normal sm:h-fit w-full">    
                    <span className=' w-fit text-lg h-fit px-5 py-1 rounded-lg flex items-center gap-3 cursor-pointer border '>Add To Cart</span>
                    <Link to={book?.volumeInfo.infoLink || "/"} target="_blank" className=' w-fit text-lg h-fit px-5 py-1 rounded-lg flex items-center gap-3 cursor-pointer border '>Know More</Link>
                </div>
            </div>
        </div>
    )
}

export default BuyCard