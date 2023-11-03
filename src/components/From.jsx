import React from 'react'

const From = () => {
  return (
    <div className="w-11/12 flex flex-col relative mx-auto ">
      <div className="relative w-[49%]   flex flex-col  gap-8 mt-10">
        <h1 className=' font-Unbounded  text-3xl  font-bold '>Get a Callback & Free Demo</h1>
        <p className=' font-Unbounded text-[#7B7B7B] font-light'>Our team will help you understand our course, choose the right payment plan, and start with onboarding</p>
        <div className=' w-[45%] flex flex-col gap-10'>
            <div className=' w-full flex flex-col gap-2'>
                <h2 className=' font-JosefinSans  font-medium tracking-wider pl-5'>Name</h2>
                <div className=' w-full bg-black h-[0.16rem]'></div>
            </div>
            <div className=' flex flex-col gap-2'>
                <h2 className=' font-JosefinSans  font-medium tracking-wider pl-5'>Mobile Number</h2>
                <div className=' w-full bg-black h-[0.16rem]'></div>
            </div>
            <div className=' flex flex-col gap-2'>
                <h2 className=' font-JosefinSans  font-medium tracking-wider pl-5'>Email</h2>
                <div className=' w-full bg-black h-[0.15rem]'></div>
            </div>
            <button className=" bg-black w-full text-white py-4 px-2">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}

export default From
