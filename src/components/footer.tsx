import { LiaCopyrightSolid as CopyRights } from "react-icons/lia";

import { Link } from "react-router-dom";
function Footer({ className }: { className: String }) {
  return (
    <div className={`flex flex-col gap-2 px-4 sm:px-16 justify-center items-center bg-[rgba(21,4,36,0.33)] p-3 mt-10 w-fit mx-auto rounded-tl-3xl rounded-tr-3xl ${className}`}>
      <ul className="flex gap-5 px-10 text-[18px] font-medium">
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/searchbook" >Search</Link></li>
        <li><Link to="/about" >About</Link></li>
      </ul>
      <div className="flex gap-1 items-start sm:items-center justify-center text-gray-500">
        <CopyRights className="text-xl" />
        <p className="text-md sm:text-md flex justify-center">2024 Zween Books. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer