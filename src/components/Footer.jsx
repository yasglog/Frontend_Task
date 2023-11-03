import React from "react";
import logo from "../assets/Logo.png";
import social from "../assets/solia media.png";

const Footer = () => {
  return (
    <div className=" w-full relative flex flex-col gap-6">
      <div className="w-[53%] flex flex-row mx-auto items-center justify-between mt-6 ">
        <img src={logo}></img>
        <div className=" min-w-[600px] flex flex-col gap-6">
          <ul className=" flex flex-row gap-8">
            <li className=" font-Unbounded font-light">Home</li>
            <li className=" font-Unbounded font-light">ABOUT</li>
            <li className=" font-Unbounded font-light">Portfolio</li>
            <li className=" font-Unbounded font-light">Placements</li>
            <li className=" font-Unbounded font-light">CONTACT</li>
          </ul>
          <div className=" w-[400px] mx-auto">
            <img src={social} className=" w-[80%]"></img>
          </div>
        </div>
      </div>
      <div className="w-[39.5%] mx-auto">
        <ul className="flex flex-row gap-5">
          <li className=" font-Unbounded font-light text-xs">+919309978817</li>
          <li className=" font-Unbounded font-light  text-xs">
            mailto:uiuxdesignschools@gmail.com
          </li>
          <li className=" font-Unbounded font-light  text-xs">
            www.uiuxdesignschool.in
          </li>
        </ul>
      </div>
      <div className=" w-full bg-[#D1D4D4] flex items-center justify-center py-2 font-Unbounded tracking-widest mt-8 uppercase">
        <h2>Copyright 2023. uiux design school. All Rights Reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
