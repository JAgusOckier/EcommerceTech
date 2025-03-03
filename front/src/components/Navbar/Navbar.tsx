import Link from "next/link";
import UserAuth from "./UserAuth";
import { routes } from "@/routes/routes";
import { IoIosHome } from "react-icons/io";
import { FaLaptop } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white w-screen py-4">
            <div className="mx-auto flex justify-center gap-8 relative items-center">
                <Link href={routes.home} className="text-white text-lg font-bold flex items-center gap-1 justify-start">
                    <IoIosHome className="size-9"/>
                </Link>
                <Link href={routes.products} className="text-white hover:text-blue-200 flex items-center">
                <FaLaptop className="size-6"/>
                </Link>
                <UserAuth />
            </div>
        </nav>
    );
};

export default Navbar;
