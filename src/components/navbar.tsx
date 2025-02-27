import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { FaRegUserCircle as User } from "react-icons/fa";
import { FiLogIn as Login } from "react-icons/fi";
import { GiBookshelf as Books } from "react-icons/gi";
import { IoClose as Close } from "react-icons/io5";
import { MdOutlineShoppingCart as Cart } from "react-icons/md";
import { TiThMenu as Menu } from "react-icons/ti";
import { Link } from "react-router-dom";
import CartSection from '../components/cart';
import { useUser } from "../context/userContext";
import { Button } from "./ui/button";

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
                        <CartSection onClose={() => setShowCart(false)} />
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
                            <li className="flex flex-col sm:flex-row-reverse gap-2">
                                <Button onClick={() => setShowCart(true)}>
                                    <Cart className="!text-xl" />
                                </Button>
                                <div className="">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button className="bg-transparent">
                                                <User className="text-2xl" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-48 border-gray-800 text-white bg-slate-950">
                                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem className="p-0 hover:bg-transparent rounded-xl hover:bg-slate-900">
                                                    <Link to="/profile" className="hover:bg-slate-900 hover:text-white rounded-md w-full h-full  p-2">Profile</Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="p-0 hover:bg-transparent rounded-xl hover:bg-slate-900">
                                                    <Link to="/profile" className="hover:bg-slate-900 hover:text-white rounded-md  w-full h-full p-2">Settings</Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator className="bg-gray-800 w-[98%] mx-auto"/>
                                            <DropdownMenuItem onClick={() => logoutUser()} className=" hover:bg-slate-700">
                                                Logout
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>

                            </li>
                        ) : (
                            <li>
                                <Link to="/login" className="flex gap-1 p-2 rounded-lg bg-gradient-to-tr from-[#1b0f25] to-[#4b206c]">
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
