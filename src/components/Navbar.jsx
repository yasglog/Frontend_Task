import React from "react";
import logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <nav className=" w-11/12 flex relative mx-auto">
      <div class="relative  w-[89%]  mx-auto flex items-center justify-between mt-6 bg-white px-8 rounded-xl py-1 shadow-lg ">

      <img src={logo} width="50px" className=" "></img>
       
        <ul className=" flex  space-x-12 text-[#434343] ">
            <li className=" text-lg ">Portfolio</li>
            <li className=" text-lg ">Portfolio</li>
            <li className=" text-lg ">Portfolio</li>
            <li className=" text-lg ">Placements</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
