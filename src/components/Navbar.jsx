import React from 'react'
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className=" sticky w-full  bg-white py-2  z-50 ">
    <div className="flex gap-4 items-center max-w-[1600px] p-2 justify-around mx-auto">
      {/* Logo */}
      <div title="Flipkart">
        <img src={"/FlipkartLogo.svg"} alt="" />
      </div>

      {/* Search box */}
      <div
        className="flex gap-1 bg-[#F0F5FF] w-[50vw] p-1.5 py-2 rounded-lg  "
        title="Search for products , Brands and more"
      >
        <img src={"/search.svg"} alt="" />
        <input
          type="text"
          placeholder="Search for products ,Brands and more"
          className="bg-[#F0F5FF] w-full outline-none  placeholder:text-gray-500 placeholder:text-lg"
        />
      </div>

      {/* Navigation links */}
      <div className="flex gap-4 ">
        {/* Login */}
        <div
          className={`flex gap-2 relative ${
            isHovered ? "bg-[#2953DF] text-white" : "bg-white text-black"
          } rounded-lg p-2 cursor-pointer`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <img src={"/login2.svg"} alt="" />
          ) : (
            <img src={"/public/login.svg"} alt="" />
          )}
          <button
            className="button flex items-center "
            title="Login"
          >
            Login{" "}
            <span className="caret">
              <MdOutlineKeyboardArrowDown />{" "}
            </span>
          </button>
          <div
            className={`absolute ${
              isHovered ? "" : "hidden"
            } text-black  top-[100%] w-[250px] p-2  rounded-lg border-1 dropdown1`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="p-2 flex justify-between">
              <p>New Constumer? </p>
              <p className="text-blue-600 font-bold">Sign up</p>
            </div>
            <hr />
            <div className="text-sm text-gray-500">
              <div className="flex gap-2 hover:bg-[#FAFAFA] px-1 py-2">
                <img src={"/login.svg"} alt="" />
                <span>My Profile</span>
              </div>
              <div className="flex gap-2 hover:bg-[#FAFAFA] px-1 py-2">
                <img src={"/plusZone.svg"} alt="" />
                <span>Flipkar Plus Zone</span>
              </div>
              <div className="flex gap-2 hover:bg-[#FAFAFA] px-1 py-2">
                <img src={"/orders.svg"} alt="" />
                <span>Orders</span>
              </div>
              <div className="flex gap-2 hover:bg-[#FAFAFA] px-1 py-2">
                <img src={"/wishList.svg"} alt="" />
                <span>WishList</span>
              </div>
              <div className="flex gap-2 hover:bg-[#FAFAFA] px-1 py-2">
                <img src={"/rewards.svg"} alt="" />
                <span>Rewards</span>
              </div>
              <div className="flex gap-2 hover:bg-[#FAFAFA] px-1 py-2">
                <img src={"/giftCard.svg"} alt="" />
                <span>Gift cards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cart */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          title="Cart"
        >
          <img src={"/cartsvg.svg"} alt="" />
          <p>Cart</p>
        </div>

        {/* Seller */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          title="Become a Seller"
        >
          <img src={"/home.svg"} alt="" />
          <p>Become a Seller</p>
        </div>

        {/* Three dots */}
        <div
          className="flex border-2 relative threeDot cursor-pointer p-2 rounded-lg border-transparent hover:border-2 hover:border-gray-400"
          title="DropDown with more help links"
        >
          <img src={"/threeDot.svg"} alt="" />
          <div className="absolute dropDown rounded-lg ">

          <div className="text-sm text-gray-500">
              <div className="flex gap-2 hover:bg-[#FAFAFA] px-1 py-2">
                <img src={"/notification.svg"} alt="" />
                <span>Notification Preferences</span>
              </div>
              <div className="flex gap-2 hover:bg-[#FAFAFA] px-1 py-2">
                <img src={"/helpcenter.svg"} alt="" />
                <span>24x7 Customer Care</span>
              </div>
              <div className="flex gap-2 hover:bg-[#FAFAFA] px-1 py-2">
                <img src={"/advertise.svg"} alt="" />
                <span>Advertise</span>
              </div>
              <div className="flex gap-2 hover:bg-[#FAFAFA] px-1 py-2">
                <img src={"/downloadApp.svg"} alt="" />
                <span>DownLoad App</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar