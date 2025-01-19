import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full fixed z-10 bg-black opacity-84">
      {/* Navbar */}
      <nav className="flex w-full py-3 lg:py-4 px-5 md:px-20 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center justify-center text-white text-2xl lg:text-3xl font-semibold cursor-pointer">
          Munch
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:text-sm items-center justify-center text-white gap-8 flex-1">
          <li>
            <a href="/" className="hover:text-gray-400 transition">Home</a>
          </li>
          <li>
            <a href="/#recipes" className="hover:text-gray-400 transition">Explore</a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-400 transition">Favorites</a>
          </li>
        </ul>

        {/* Sign-in Button for Desktop */}
        <Button
          title="Login"
          containerStyle="hidden md:block md:text-sm bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[90px]"
          handleClick={() => navigate('/login')} // Navigate to the login page
        />

        {/* Toggle Button for Mobile */}
        <button
          className="block md:hidden text-white text-xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? 'flex' : 'hidden'
        } bg-black flex-col w-full h-screen items-center justify-center px-4 pb-14 gap-6 text-white text-[14px]`}
      >
        <a href="/" className="hover:text-gray-400 transition">Home</a>
        <a href="/#recipes" className="hover:text-gray-400 transition">Recipes</a>
        <a href="/" className="hover:text-gray-400 transition">Favorites</a>
        <Button
          title="Sign in"
          containerStyle="bg-transparent border border-white text-white hover:bg-white hover:text-slate-900 rounded-full w-full max-w-[120px] py-2 hover:bg-gray-300" handleClick={() => navigate('/login')}
        />
      </div>
    </header>
  );
};

export default Navbar;
