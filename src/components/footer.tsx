import {
  FaFacebookSquare as FB,
  FaInstagram as Insta,
  FaLinkedin as LinkedIn,
  FaGithub  as Github
} from "react-icons/fa";
import { LiaCopyrightSolid as CopyRights } from "react-icons/lia";

import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className='flex flex-col gap-2 justify-center items-center bg-slate-900 p-5 mt-10'>
      <div className="flex gap-3">
        <FB className="text-3xl" />
        <Insta className="text-3xl" />
        <LinkedIn className="text-3xl" />
        <Github className="text-3xl" />
      </div>
      <ul className="flex gap-5 px-10 mt-2">
        <li><Link to="/" className=" text-lg font-medium">Home</Link></li>
        <li><Link to="/searchbook" className=" text-lg font-medium">Search</Link></li>
        <li><Link to="/about" className=" text-lg font-medium">About</Link></li>
      </ul>
      <div className="flex gap-1 items-center justify-center">
        <CopyRights className="text-xl" />
        <p className="text-md sm:text-xl">2024 Zween Books. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer