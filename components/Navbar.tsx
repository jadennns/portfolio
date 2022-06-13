import Link from "next/link";
import { BsList } from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <nav className="max-w-7xl z-[50] w-full flex items-center justify-between p-4 mt-0 lg:mt-5 ">
        <div className="flex items-center">
          <Link href={"/"}>
            <p className="text-2xl font-bold text-main-1 cursor-pointer">
              Jadennns Portfolio
            </p>
          </Link>
        </div>
        <div className="hidden lg:flex relative items-center space-x-6 text-xl font-semibold text-main-1">
          <a href="#about" className="hover-underline-animation">
            About Me
          </a>
          <a href="#contact" className="hover-underline-animation">
            Contact
          </a>
          <a href="#projects" className="hover-underline-animation">
            Projects
          </a>
        </div>
        <div className="lg:hidden select-none relative space-y-2">
          <div
            className="border border-main-1 rounded-md p-2 text-main-1 hover:bg-main-1 hover:text-white lg:hidden cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <BsList size={20} />
          </div>
          {dropdownOpen && (
            <div className="flex flex-col space-y-3 rounded-md bg-main-4 text-main-1 font-semibold p-2 absolute z-50 left-auto right-0 w-[10rem] animate-in slide-in-from-top-3 duration-500">
              <a
                href="#about"
                className="pl-2 hover:underline hover:underline-offset-2"
              >
                About Me
              </a>
              <a
                href="#contact"
                className="pl-2 hover:underline hover:underline-offset-2"
              >
                Contact
              </a>
              <a
                href="#projects"
                className="pl-2 hover:underline hover:underline-offset-2"
              >
                Projects
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
