import React from "react";
import frame from "../assets/Frame 45.png";
import frame2 from "../assets/Frame 57.png";

import screen1 from "../assets/Homescreen.png";
import screen2 from "../assets/Apply Leave (1).png";
import screen3 from "../assets/Apply Leave.png";
import ecp from "../assets/Ellipse 2 (1).png";

const OtherPart = () => {
  return (
    <div className="w-11/12 flex flex-col relative mx-auto gap-4">
      {/* Hero Section */}
      <section className="relative w-[89%]  mx-auto flex flex-col  mt-36">
        <div className=" w-[60%] flex flex-col gap-3">
          <h4 className="text-[#7B7B7B] text-lg font-Unbounded uppercase">
            Passion driven instructors who believe in practical teaching
          </h4>
          <h1 className=" text-4xl font-Unbounded font-bold  leading-[50px] uppercase">
            UX & UI DESIGN SCHOOL THAT MAKES YOU COMPLETE
          </h1>
        </div>
        <div className=" flex gap-14 mt-20">
          <button className=" bg-black w-[19%] text-white py-2 px-2 uppercase">
            Request a call Back
          </button>
          <button className="  w-[19%] text-black border-2 border-[#7B7B7B] py-3 px-2 uppercase">
            Register for q & A
          </button>
        </div>
      </section>
      {/* section2 */}
      <section className="relative w-[89%]  mx-auto flex flex-col mt-28 ">
        {/* part1 */}
        <div className="relative w-full  mx-auto flex bg-white ">
          <div className="w-[92%] flex flex-row items-center justify-between mx-auto py-4 uppercase">
            <div>
              <h2 className=" font-Unbounded text-lg">20k</h2>
              <h2 className=" font-Unbounded text-lg">students</h2>
              <h3 className=" font-Unbounded  text-[#7B7B7B]">placed</h3>
            </div>
            <div>
              <h2 className=" font-Unbounded text-lg">189</h2>
              <h2 className=" font-Unbounded text-lg">Workshop</h2>
              <h3 className=" font-Unbounded  text-[#7B7B7B]">conducted</h3>
            </div>
            <div>
              <h2 className=" font-Unbounded text-lg">25k</h2>
              <h2 className=" font-Unbounded text-lg">students</h2>
              <h3 className=" font-Unbounded  text-[#7B7B7B]">enrollment</h3>
            </div>
            <div>
              <h2 className=" font-Unbounded text-lg">8+</h2>
              <h2 className=" font-Unbounded text-lg">cities</h2>
              <h3 className=" font-Unbounded  text-[#7B7B7B]">covered</h3>
            </div>
          </div>
        </div>
        {/* part2 text-[#7B7B7B] */}
        <div className=" w-full flex flex-col relative mx-auto">
          <div className=" w-[60%] flex flex-col mx-auto mt-8 py-10 gap-6">
            <h2 className=" font-Unbounded text-center text-3xl uppercase">
              kickstart your ui/ux design career
            </h2>
            <p className=" font-Unbounded text-center text-[#7B7B7B] text-sm font-light uppercase leading-7">
              We have crafted a 17 - weeks course that will enable you to
              transform into a designer. A complete hands-on experience from
              industry leaders.
            </p>
          </div>

          <div className="  w-full relative mx-auto bg-white pb-10 ">
            <div className=" w-[92%] flex flex-row mt-6 py-6 justify-between mx-auto uppercase">
              <ul className="flex flex-col gap-2">
                <li className="text-[#555555] font-Unbounded text-base">
                  What you'll learn
                </li>
                <li className=" font-Unbounded text-lg">UX Fundamentals</li>
                <li className="text-[#7B7B7B] font-Unbounded  font-light">
                  Introduction
                </li>
                <li className="text-[#7B7B7B] font-Unbounded text-base font-light">
                  Understanding UX & UI
                </li>
                <li className="text-[#7B7B7B] font-Unbounded text-base font-light">
                  Design thinking process
                </li>
              </ul>
              <ul className="flex flex-col gap-2 ml-10">
                <li className="text-[#555555] font-Unbounded text-base">
                  learn Design Tools
                </li>
                <li className=" font-Unbounded text-lg flex flex-col">
                  <span>Introduction to</span>

                  <span>Visual Design Tools</span>
                </li>
                <li className="text-[#7B7B7B] font-Unbounded text-base font-light">
                  Photoshop
                </li>
                <li className="text-[#7B7B7B] font-Unbounded text-base font-light">
                  Illustrator
                </li>
                <li className="text-[#7B7B7B] font-Unbounded text-base font-light">
                  Figma
                </li>
                <li className="text-[#7B7B7B] font-Unbounded text-base font-light">
                  Adobe XD
                </li>
                <li className="text-[#7B7B7B] font-Unbounded text-base font-light">
                  invasion studio
                </li>
                <li className="text-[#7B7B7B] font-Unbounded text-base font-light">
                  Overview Class Studio
                </li>
              </ul>
              <ul className=" flex flex-col gap-2">
                <li className="text-[#555555] font-Unbounded text-base  font-normal">
                  {" "}
                  build your profile
                </li>
                <li className=" font-Unbounded text-lg ">Portfolio Session</li>
                <li className="text-[#7B7B7B] font-Unbounded text-base font-light">
                  Concept Presentation
                </li>
                <li className="text-[#7B7B7B] font-Unbounded text-base font-light">
                  Industry Requirements
                </li>
                <li className="text-[#7B7B7B] font-Unbounded text-base font-light">
                  How to Implement on websites like{" "}
                </li>
                <li className="text-[#7B7B7B] font-Unbounded text-base font-light">
                  Behance
                </li>
              </ul>
            </div>
            <div className=" w-[51%] flex items-start justify-start mx-auto mr-40 pl-1 ">
              <button className=" bg-black w-[50%] text-white py-3 mr-6 ">
                Downloads Syllabus
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Student saying Section */}
      <section className=" relative  w-[89%] bg-white  mx-auto flex flex-col mt-10 rounded-3xl">
        <div className="w-[92%] mx-auto bg-white flex flex-col gap-8 py-8">
          <h2 className=" text-center font-Unbounded uppercase text-4xl">
            What Our Students Are Saying
          </h2>
          <div className="  w-[90%]  flex flex-row justify-around  gap-8 mx-auto">
            <div className="  w-[58%] bg-[#F5F5F5] flex flex-row gap-4 items-center justify-between py-4 px-2 rounded-lg ">
              <img src={frame} className=" w-[35%]"></img>

              <div className=" w-[63.5%] flex flex-col gap-3">
                <p className="  text-xs">
                  “Their teachers are very experienced and tell us where we are
                  going wrong. They also help us prepare our designs and even
                  get ready for interviews. The best part is, they focus on
                  every student individually. I did not only learn there, but
                  also got a lot of confidence."
                </p>
                <div className=" flex flex-row gap-2">
                  <div className=" w-[40px] bg-[#D9D9D9] rounded-full"></div>
                  <div>
                    <h2>Jane Cooper</h2>
                    <h2 className=" text-[#7B7B7B] font-Unbounded font-light text-xs">
                      UI UX Designer/ TSC
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-[58%] bg-[#F5F5F5] flex flex-row gap-4 items-center justify-between py-4 px-2 rounded-lg ">
              <img src={frame} className=" w-[35%]"></img>

              <div className=" w-[63.5%] flex flex-col gap-3">
                <p className="  text-xs">
                  “Their teachers are very experienced and tell us where we are
                  going wrong. They also help us prepare our designs and even
                  get ready for interviews. The best part is, they focus on
                  every student individually. I did not only learn there, but
                  also got a lot of confidence."
                </p>
                <div className=" flex flex-row gap-2">
                  <div className=" w-[40px] bg-[#D9D9D9] rounded-full"></div>
                  <div>
                    <h2>Jane Cooper</h2>
                    <h2 className=" text-[#7B7B7B] font-Unbounded font-light text-xs">
                      UI UX Designer/ TSC
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative  w-[89%] mx-auto flex flex-col mt-10 rounded-3xl gap-9">
        <h2 className=" font-Unbounded text-4xl uppercase text-center">
          Celebrating Some Amazing Placements
        </h2>
        <div className=" w-[60%] mx-auto flex flex-col">
          <h3 className=" font-Unbounded uppercase text-center font-light text-sm">
            Join 1000+ students who learn from UI UX Design school{" "}
          </h3>
          <h4 className=" font-Unbounded uppercase text-center font-light text-xs">
            every year
          </h4>
        </div>
        <div className="relative w-full bg-white  mx-auto flex flex-col gap-5 py-8 rounded-3xl">
          <div className=" w-[80%] mx-auto flex justify-between">
            <img src={frame2} className=" w-[20%] h-[50%]"></img>
            <img src={frame2} className=" w-[20%] h-[50%]"></img>
            <img src={frame2} className=" w-[20%] h-[50%]"></img>
            <img src={frame2} className=" w-[20%] h-[50%]"></img>
          </div>
          <div className="w-[80%] mx-auto flex justify-between">
            <img src={frame2} className=" w-[20%] h-[50%]"></img>
            <img src={frame2} className=" w-[20%] h-[50%]"></img>
            <img src={frame2} className=" w-[20%] h-[50%]"></img>
            <img src={frame2} className=" w-[20%] h-[50%]"></img>
          </div>
        </div>
      </section>

      {/* Upcoming event */}
      <section className="relative w-[89%] mx-auto flex flex-col mt-10 rounded-3xl gap-9">
        <h2 className=" font-Unbounded text-4xl uppercase text-center">
          Upcoming Events
        </h2>
        <div className="min-w-[92%] mx-auto flex flex-col gap-2">
          <h3 className=" font-Unbounded uppercase text-center font-[300] text-sm">
            We believe in making consequential disciplines with respect to
            design, hence conduct a lot of
          </h3>
          <h3 className=" font-Unbounded uppercase text-center font-light text-sm">
            workshops, demo classes and other events. There is always something
            new for you to learn.
          </h3>
        </div>
        <div className="relative w-full bg-white  mx-auto flex flex-row  py-8 rounded-3xl">
          <div className=" relative  w-[88%] bg-white  mx-auto flex flex-row">
            <div className="w-[41%] bg-[#F5F5F5] min-h-[450px]  mx-auto flex flex-col  py-4 gap-2 rounded-xl">
              <div className=" flex flex-col mx-auto w-[93%] min-h-[200px] bg-white text-center justify-center rounded-xl">
                <h2 className=" font-Unbounded text-2xl">UI UX Free Demo</h2>
              </div>
              <div className="flex flex-col w-[93%] mx-auto gap-5">
                <h2 className=" font-Unbounded uppercase text-2xl">
                  q&a session
                </h2>
                <h2>With Atharva shivankar</h2>
                <div className=" flex flex-row justify-between">
                  <h3>02/05/2023</h3>
                  <h3>04 PM : 5 :30 PM</h3>
                </div>
                <button className=" bg-black w-[100%] text-white py-4 px-2 rounded-xl uppercase">
                  Book A Sets
                </button>
              </div>
            </div>
            <div className="w-[41%] bg-[#F5F5F5] min-h-[450px]  mx-auto flex flex-col  py-4 gap-2 rounded-xl ">
              <div className=" flex flex-col mx-auto w-[93%] min-h-[200px] bg-white text-center justify-center rounded-xl">
                <h2 className="font-Unbounded text-2xl">UI UX Free Demo</h2>
              </div>
              <div className="flex flex-col w-[93%] mx-auto gap-5">
                <h2 className=" font-Unbounded uppercase text-2xl">
                  q&a session
                </h2>
                <h2>With Atharva shivankar</h2>
                <div className=" flex flex-row justify-between">
                  <h3>02/05/2023</h3>
                  <h3>04 PM : 5 :30 PM</h3>
                </div>
                <button className=" bg-black w-[100%] text-white py-4 px-2 rounded-xl uppercase">
                  Book A Sets
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Gallery */}
      <section className="relative w-[89%] mx-auto flex flex-row mt-10 rounded-3xl bg-white">
        <div className="relative w-[88%] mx-auto flex flex-row">
          <div className=" w-[45.5%]  flex flex-col mx-auto gap-14 py-10 mt-3 ">
            <h2 className=" font-Unbounded font-bold text-4xl uppercase">
              student gallery
            </h2>
            <div className=" flex flex-col gap-6">
              <h2 className=" font-Unbounded font-medium text-2xl uppercase">
                Hostel Connect
              </h2>
              <div className="  w-full font-Unbounded text-[#5D5B70] leading-10 tracking-widest ">
                Hostel Connect is the ultimate app for hostel students and
                administration - Unlock the full potential of hostel with our
                solution for a seamless and hassle free experience.
              </div>
              <button className="  w-[60%] text-black border-2 border-[#7B7B7B] py-3 px-2 uppercase">
                View case study
              </button>
            </div>
          </div>
          <div className=" w-[45.5%] relative flex flex-row gap-12">
            <img
              src={screen1}
              className=" w-[50%] h-[50%] relative top-36"
            ></img>
            <div className=" flex flex-col gap-6">
              <img src={screen2} className="w-[100%] h-[46%]" ></img>
              <img src={screen3} className="w-[100%] h-[50%]"></img>
            </div>
          </div>
        </div>
      </section>

      {/* Reality */}
      <section className="relative w-[89%] mx-auto flex flex-col mt-10 rounded-3xl gap-9">
        <h2 className=" font-Unbounded text-4xl uppercase text-center">
          Making expectations a reality
        </h2>
        <div className="w-[80%] mx-auto flex flex-col gap-2 text-center font-Unbounded font-light tracking-wider text-[#7B7B7B]">
          Regardless of where you work and what job title you hold, raising
          aspirations for design thinking and creative skills are now more than
          ever. Hence we built a bridge for you to transition into a designer.
        </div>

        <div className=" w-full flex flex-col gap-10">
          <div className=" w-full flex flex-row justify-between">
            <div className=" w-[28%] h-[180px] flex flex-col bg-white justify-center px-4 gap-5  rounded-xl">
              <div className=" flex flex-row gap-4 items-center">
                <img src={ecp} className=" w-10"></img>
                <h3 className=" font-Unbounded ">Learn UX / UI Design</h3>
              </div>
              <p className=" w-[90%] font-Unbounded font-light 2xl:tracking-wider lg:tracking-tight  xl:leading-8 leading-6 text-[#7B7B7B] ">
                Fully immersive, hands-on experience of building a concept from
                scratch.
              </p>
            </div>
            <div className=" w-[28%] h-[180px] flex flex-col bg-white justify-center px-4 gap-5  rounded-xl">
              <div className=" flex flex-row gap-4 items-center">
                <img src={ecp} className=" w-10"></img>
                <h3 className=" font-Unbounded ">Get certified</h3>
              </div>
              <p className=" w-[90%] font-Unbounded font-light 2xl:tracking-wider lg:tracking-tight xl:leading-8 leading-6 text-[#7B7B7B]">
                Fully immersive, hands-on experience of building a concept from
                scratch.
              </p>
            </div>
            <div className=" w-[28%] h-[180px] flex flex-col bg-white justify-center px-4 gap-5  rounded-xl">
              <div className=" flex flex-row gap-4 items-center">
                <img src={ecp} className=" w-10"></img>
                <h3 className=" font-Unbounded ">1-on-1 Mentorship</h3>
              </div>
              <p className=" w-[90%] font-Unbounded font-light 2xl:tracking-wider lg:tracking-tight xl:leading-8 leading-6 text-[#7B7B7B]">
                Fully immersive, hands-on experience of building a concept from
                scratch.
              </p>
            </div>
          </div>
          <div className=" flex flex-row justify-between">
            <div className=" w-[28%] h-[180px] flex flex-col bg-white justify-center px-4 gap-5  rounded-xl">
              <div className=" flex flex-row gap-4 items-center">
                <img src={ecp} className=" w-10"></img>
                <h3 className=" font-Unbounded ">Career Guidance</h3>
              </div>
              <p className=" w-[90%] font-Unbounded font-light 2xl:tracking-wider lg:tracking-tight xl:leading-8 leading-6 text-[#7B7B7B]">
                Fully immersive, hands-on experience of building a concept from
                scratch.
              </p>
            </div>
            <div className=" w-[28%] h-[180px] flex flex-col bg-white justify-center px-4 gap-5  rounded-xl">
              <div className=" flex flex-row gap-4 items-center">
                <img src={ecp} className=" w-10"></img>
                <h3 className=" font-Unbounded ">Figma & Goodies</h3>
              </div>
              <p className=" w-[90%] font-Unbounded font-light 2xl:tracking-wider lg:tracking-tight xl:leading-8 leading-6 text-[#7B7B7B]">
                Fully immersive, hands-on experience of building a concept from
                scratch.
              </p>
            </div>
            <div className=" w-[28%] h-[180px] flex flex-col bg-white justify-center px-4 gap-5  rounded-xl">
              <div className=" flex flex-row gap-4 items-center">
                <img src={ecp} className=" w-10"></img>
                <h3 className=" font-Unbounded ">work on Live projects</h3>
              </div>
              <p className=" w-[90%] font-Unbounded font-light 2xl:tracking-wider lg:tracking-tight xl:leading-8 leading-6 text-[#7B7B7B]">
                Fully immersive, hands-on experience of building a concept from
                scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning */}

      <section className="relative w-[89%] mx-auto flex flex-col mt-20 rounded-3xl gap-9">
        <div className="w-[80%] mx-auto flex flex-col gap-8">
          <h2 className=" font-Unbounded text-4xl uppercase text-center">
            Experience the new way of learning
          </h2>
          <h3 className=" font-Unbounded uppercase text-center font-light text-sm tracking-widest">
            It’s never too late. Join our army and become the future of design.
          </h3>
        </div>
        <div className=" w-full flex flex-col items-center py-4">
          <button className=" bg-black w-[19%] text-white py-3 px-3 uppercase">
            Request a call Back
          </button>
        </div>
      </section>
    </div>
  );
};

export default OtherPart;
