import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      {/* top  */}
      <div className="flex items-center flex-grow p-1 py-2 bg-amazon_blue">
        <div className="flex items-center flex-grow mt-2 cursor-pointer sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
          ></Image>
        </div>
        {/* searchbar */}
        <div className="items-center flex-grow hidden h-10 bg-yellow-400 rounded-md cursor-pointer focus-within:ring-2 ring-yellow-400 hover:bg-yellow-500 sm:flex">
          <input
            type="text"
            className="flex-grow flex-shrink w-6 h-full p-2 px-4 rounded-l-md focus:outline-none "
          />
          <SearchIcon className="h-12 p-4"></SearchIcon>
        </div>
        {/* right */}
        <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
          <div className="link">
            <p>Hello, Ife</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative flex items-center link">
            <span className="absolute top-0 right-0 w-4 h-4 font-bold text-center text-black bg-yellow-400 rounded-full md:right-10">
              4
            </span>
            <ShoppingCartIcon className="h-10"></ShoppingCartIcon>
            <p className="hidden mt-2 font-extrabold md:text-sm md:inline">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom header */}
      <div className="flex items-center p-2 pl-6 space-x-4 text-sm text-white bg-amazon_blue-light">
        <p className="flex items-center link">
          <MenuIcon className="h-6 mr-1"></MenuIcon> All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="hidden link lg:inline-flex">Electronics</p>
        <p className="hidden link lg:inline-flex">Food & Grocery</p>
        <p className="hidden link lg:inline-flex">Prime</p>
        <p className="hidden link lg:inline-flex">Buy Again</p>
        <p className="hidden link lg:inline-flex">Shopper Toolkit</p>
        <p className="hidden link lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
