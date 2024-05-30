import { GiBookshelf as Books } from "react-icons/gi";
import { FaShoppingCart as Cart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className='py-5 px-6 sm:px-14 flex items-center justify-between sm:gap-1'>
            <Link to="/" className="flex gap-2 items-center ">
                <span className='text-4xl'><Books /></span>
                <span className=" text-2xl font-medium hidden md:flex">Zween Books</span>
            </Link>
            <div className="flex sm:gap-3 justify-center items-center">
                <ul className="flex gap-8 px-10">
                    <li><Link to="/" className=" text-lg font-medium">Home</Link></li>
                    <li><Link to="/searchbook" className=" text-lg font-medium">Search</Link></li>
                    <li><Link to="/about" className=" text-lg font-medium">About</Link></li>
                </ul>
                <span className="text-2xl cursor-pointer"><Cart /></span>
            </div>
        </nav>
    )
}

export default Navbar