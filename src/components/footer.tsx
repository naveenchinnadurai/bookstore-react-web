import { LiaCopyrightSolid as CopyRights } from "react-icons/lia";

import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className='flex flex-col gap-1 justify-center items-center bg-[rgb(26,7,43)] p-3 mt-10 sm:w-1/2 mx-auto rounded-tl-3xl rounded-tr-3xl '>
      <ul className="flex gap-5 px-10 text-[18px] font-medium">
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/searchbook" >Search</Link></li>
        <li><Link to="/about" >About</Link></li>
      </ul>
      <div className="flex gap-1 items-center justify-center">
        <CopyRights className="text-xl" />
        <p className="text-md sm:text-md">2024 Zween Books. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer