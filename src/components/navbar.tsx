import { GiBookshelf as Books } from "react-icons/gi";
import { FaShoppingCart as Cart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiThMenu as Menu } from "react-icons/ti";
import { useEffect, useState } from "react";
import { IoClose as Close } from "react-icons/io5";


function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    useEffect(() => {
    }, [isSidebarOpen])
    

    return (
        <nav className="py-8 flex items-center justify-between sm:gap-1">
            <Link to="/" className="flex gap-2 items-center">
                <span className="text-4xl">
                    <Books />
                </span>
                <span className="text-2xl font-medium hidden md:flex">Zween Books</span>
            </Link>
            <span className="text-xl sm:hidden p-0" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Menu className="w-10" />
            </span>
            <div className={`${isSidebarOpen ? "flex absolute items-center justify-center top-0 right-0 w-2/3 h-screen bg-slate-800" : "hidden" } flex-col sm:flex sm:flex-row sm:gap-3 md:justify-center items-center`} >
                {
                    isSidebarOpen? (
                        <Close className="text-2xl absolute top-7 right-10" onClick={()=>setIsSidebarOpen(!isSidebarOpen)}/>
                    ):null
                }
                <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:px-10">
                    <li>
                        <Link to="/" className="text-lg font-medium"> Home </Link>
                    </li>
                    <li>
                        <Link to="/searchbook" className="text-lg font-medium"> Search </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-lg font-medium"> About </Link>
                    </li>
                </ul>
                <span className="text-2xl cursor-pointer mt-6 sm:mt-0 sm:ml-2 flex">
                    <Cart />
                </span>
            </div>
        </nav>
    );
}

export default Navbar;
