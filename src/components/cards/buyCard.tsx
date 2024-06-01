import { Link } from "react-router-dom";
import { Book } from "../../utils/datatypes"
import { CiStar as Star } from "react-icons/ci";
interface prop {
    book: Book,
    key: number | string,
    isPopup: boolean
}
function BuyCard({ book, key, isPopup }: prop) {
    return (
        <div className="bg-slate-900 flex items-center sm:items-start md:items-center lg:items-start justify-center flex-wrap lg:flex-row rounded-xl py-3 h-full w-full" key={key}>
            <div className="w-5/6 sm:p-3 sm:w-5/12 md:w-2/3 lg:w-5/12 md:p-5 lg:p-3 sm:h-full md:h-auto lg:h-full">
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="w-full h-full rounded-lg" />
            </div>
            <div className="w-full sm:w-7/12 md:w-full lg:w-7/12 py-5 px-5 sm:px-0 md:px-5 lg:px-0 md:py-0 lg:py-5 flex justify-center flex-col gap-5 lg:gap-5">
                <h2 className="text-4xl font-bold text-center sm:text-start md:text-center lg:text-start">{book.volumeInfo.title}</h2>
                <p className={isPopup ? "visible text-lg " : "hidden"}>{book.volumeInfo.description?.slice(0, 200)} <span><Link to={book.volumeInfo.infoLink}>...more</Link></span></p>
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-normal text-center sm:text-start md:text-center lg:text-start">Author : {book.volumeInfo.authors}</h2>
                    <h2 className="text-xl font-normal text-center sm:text-start md:text-center lg:text-start">Category: {book.volumeInfo.categories || 'unknown'}</h2>
                    <h2 className="text-xl font-normal text-center sm:text-start md:text-center lg:text-start">Published On: {book.volumeInfo.publishedDate}</h2>
                </div>
                <div className={`flex gap-2 justify-center sm:justify-normal md:justify-center lg:justify-normal items-center ${isPopup ? "flex" : "hidden"}`}>
                    <p className="text-2xl ">Average Rating of {book.volumeInfo.averageRating || 3.5}  </p>
                    <span className="text-2xl"><Star /></span>
                </div>
                <p className="text-center sm:text-start md:text-center lg:text-start">Total Page Count of the book {book.volumeInfo.pageCount || 273}</p>
                <h2 className="text-5xl font-medium text-center sm:text-start md:text-center lg:text-start">$ {book.saleInfo?.listPrice?.amount || ~270}</h2>
                <div className="flex gap-3 mt-2 flex-wrap justify-center sm:justify-normal md:justify-center lg:justify-normal sm:h-fit w-full">
                    <span className=' w-fit text-lg h-fit px-5 py-1 rounded-lg flex items-center gap-3 cursor-pointer border '>Add To Cart</span>
                    <Link to={book.volumeInfo.infoLink} className=' w-fit text-lg h-fit px-5 py-1 rounded-lg flex items-center gap-3 cursor-pointer border '>Know More</Link>
                </div>
            </div>
        </div>
    )
}

export default BuyCard