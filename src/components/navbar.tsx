import { useEffect, useState } from "react";
import { GiBookshelf as Books } from "react-icons/gi";
import { IoClose as Close } from "react-icons/io5";
import { TiThMenu as Menu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";
import { FiLogIn as Login } from "react-icons/fi";
import { MdOutlineShoppingCart as Cart } from "react-icons/md";
import { FaRegUserCircle as User } from "react-icons/fa";
import { Button } from "./ui/button";
import CartSection from '../components/cart'

function Navbar({ className }: { className: string }) {

    const [showCart, setShowCart] = useState<boolean>(false);
    const { isLoggedIn, logoutUser } = useUser();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
    }, [isSidebarOpen])


    return (
        <nav className={`py-8 flex items-center justify-between sm:gap-1 ${className}`}>
            {
                showCart && (
                    <div className="absolute top-0 right-0 h-screen w-3/5  z-10">
                        <CartSection onClose={()=>setShowCart(false)}/>
                    </div>
                )
            }
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
                <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:px-10 text-lg font-medium justify-center items-center">
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
                                    <Link to="/profile"><User className="text-2xl" /></Link>
                                </li>
                                <Button onClick={()=>setShowCart(true)}>
                                    <Cart className="!text-[20px]" />
                                </Button>
                                <li onClick={() => logoutUser()}>
                                    Logout
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to="/login" className="flex gap-1 px-4 py-1 rounded-lg bg-gradient-to-tr from-[#1b0f25] to-[#4b206c]">Login
                                    <Login className="text-2xl" />{isLoggedIn}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
