import { useEffect, useState } from "react";
import { FaShoppingCart as Cart } from "react-icons/fa";
import { GiBookshelf as Books } from "react-icons/gi";
import { IoClose as Close } from "react-icons/io5";
import { TiThMenu as Menu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";


function Navbar({ className }: { className: string }) {

    const { isLoggedIn, logoutUser, user } = useUser();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    useEffect(() => {
    }, [isSidebarOpen])


    return (
        <nav className={`py-8 flex items-center justify-between sm:gap-1 ${className}`}>
            <Link to="/" className="flex gap-2 items-center ">
                <span className="text-4xl">
                    <Books />
                </span>
                <span className="text-2xl font-medium">Zween Books</span>
            </Link>
            <span className="text-xl sm:hidden p-0" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Menu className="w-10" />
            </span>
            <div className={`${isSidebarOpen ? "flex absolute items-center justify-center top-0 right-0 w-2/3 h-screen bg-slate-800" : "hidden"} flex-col sm:flex sm:flex-row sm:gap-3 md:justify-center items-center`} >
                {
                    isSidebarOpen ? (
                        <Close className="text-2xl absolute top-7 right-10" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                    ) : null
                }
                <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:px-10 text-lg font-medium">
                    <li>
                        <Link to="/" > Home </Link>
                    </li>
                    <li>
                        <Link to="/searchbook" > Search </Link>
                    </li>
                    <li>
                        <Link to="/about" > About </Link>
                    </li>
                    {
                        isLoggedIn ? (
                            <>
                                <li className="my-2">
                                    <Link to="/profile">Profile</Link>
                                </li>
                                <li onClick={() => logoutUser()}>
                                    Logout
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
