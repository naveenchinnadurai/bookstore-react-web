import {
    FaInstagram as Insta,
    FaLinkedin as LinkedIn,
    FaGithub as Github
} from "react-icons/fa";
import { FaXTwitter as Twitter } from "react-icons/fa6";

import { Link } from "react-router-dom";

function About() {
    return (
        <div className="flex flex-col gap-2 px-3 md:px-9 py-8">
            <div className="max-w-xl my-5">
                <h3 className="text-gray-800 text-4xl font-semibold sm:text-4xl">
                    About Me
                </h3>
                <p className="text-gray-600 mt-3 text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.
                </p>
            </div>
            <div className="gap-8 sm:flex">
                <div className="w-full h-60 p-2">
                    <img
                        src="https://search.brave.com/images?q=Sundar+Pichai&context=W3sic3JjIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9jL2MzL1N1bmRhcl9QaWNoYWlfLV8yMDIzXyUyOGNyb3BwZWQlMjkuanBnLzUxMnB4LVN1bmRhcl9QaWNoYWlfLV8yMDIzXyUyOGNyb3BwZWQlMjkuanBnIiwidGV4dCI6IlN1bmRhcl9QaWNoYWlfLV8yMDIzXyhjcm9wcGVkKS5qcGciLCJwYWdlX3VybCI6Imh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1N1bmRhcl9QaWNoYWkifV0%3D&sig=82f27bc1b5fbd067a5657726d39d6e9a53b46ffbf880d3c4f8640cefa2026f56&nonce=33e3290af3c162e134b19316dfcd444a"
                        className="w-full h-full object-cover object-center shadow-md rounded-xl"
                        alt=""
                    />
                </div>
                <div className="my-4">
                    <h4 className="text-3xl text-gray-700 font-semibold">Naveen Chinnadurai</h4>
                    <p className="text-indigo-600 text-xl">Full Stack Devloper</p>
                    <div className="my-3 flex gap-4 text-gray-400">
                        <Link to="httpsL//.com/naveenchinnadurai">
                            <Twitter className="text-2xl cursor-pointer" />
                        </Link>
                        <Link to="httpsL//.com/naveenchinnadurai">
                            <Insta className="text-2xl cursor-pointer" />
                        </Link>
                        <Link to="httpsL//.com/naveenchinnadurai">
                            <LinkedIn className="text-2xl cursor-pointer" />
                        </Link>
                        <Link to="httpsL//.com/naveenchinnadurai">
                            <Github className="text-2xl cursor-pointer" />
                        </Link>
                    </div>
                    <p className="text-gray-600 mt-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit, adipisci inventore magnam molestias ab quasi? Doloribus a provident incidunt placeat debitis porro facilis dignissimos ratione vel sit. Maiores eveniet voluptatum sed ducimus eius illum rem, omnis soluta molestiae molestias.</p>
                </div>
            </div>
        </div>
    )
}

export default About
