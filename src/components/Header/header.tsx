// import Image from "next/image";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import SearchIcon from '@mui/icons-material/Search';
// import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
// import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';

// export default function Header() {
//     return (
//         <div className="flex justify-center py-8">
//             <div className="w-[90%] flex justify-between">
//                 <div className="text-white flex items-center gap-4 justify-center">
//                     <Image src='/images/logo.png' alt="logo" className="w-100" width={40} height={40} />
//                     <h1 className="text-2xl font-bold">Planto.</h1>
//                 </div>
//                 <div className="flex items-center">
//                     <ul className="flex text-white gap-10">
//                         <li>Home</li>
//                         <li>Plants Type
//                         <KeyboardArrowDownIcon/>
//                         </li>
//                         <li>More</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//                 <div className="flex items-center">
//                     <ul className="flex items-center text-white gap-10">
//                         <li><SearchIcon/></li>
//                         <li><LocalMallOutlinedIcon/></li>
//                         <li><DragHandleOutlinedIcon/></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }


"use client";
import Image from "next/image";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); // Toggle state for mobile menu

    return (
        <header className="text-white">
            {/* Main Container */}
            <div className="flex justify-between items-center w-[90%] mx-auto py-4">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold">PetalBloom.</h1>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-8">
                        <li className="hover:text-green-500 cursor-pointer">Home</li>
                        <li className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
                            Plants Type
                            <KeyboardArrowDownIcon />
                        </li>
                        <li className="hover:text-green-500 cursor-pointer">More</li>
                        <li className="hover:text-green-500 cursor-pointer">Contact</li>
                    </ul>
                </nav>

                {/* Desktop Icons */}
                <div className="hidden md:flex gap-6">
                    <SearchIcon className="cursor-pointer hover:text-green-500" />
                    <LocalMallOutlinedIcon className="cursor-pointer hover:text-green-500" />
                </div>

                {/* Hamburger Menu - Mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <DragHandleOutlinedIcon className="text-white cursor-pointer" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-16 left-0 w-full bg-[#1B2318] md:hidden transition-all duration-300 ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                <ul className="flex flex-col items-center gap-6 py-6 text-white">
                    <li className="hover:text-green-500 cursor-pointer">Home</li>
                    <li className="flex items-center gap-1 hover:text-green-500 cursor-pointer">
                        Plants Type
                        <KeyboardArrowDownIcon />
                    </li>
                    <li className="hover:text-green-500 cursor-pointer">More</li>
                    <li className="hover:text-green-500 cursor-pointer">Contact</li>
                    {/* Icons in mobile menu */}
                    <div className="flex gap-6">
                        <SearchIcon className="cursor-pointer hover:text-green-500" />
                        <LocalMallOutlinedIcon className="cursor-pointer hover:text-green-500" />
                    </div>
                </ul>
            </div>
        </header>
    );
}
