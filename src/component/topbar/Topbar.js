import React from 'react';
import { Search , Person, Chat, Notifications } from '@mui/icons-material';
import profilepic from "../../img/person/1.jpeg"


const Topbar = () => {
  return (
    <>
    <div className='flex justify-items-center bg-blue-500 shadow-blue-500 py-2 text-white pl-4 h-[50px] w-[100%] sticky top-0 z-[999]'>

        <div className=' font-bold text-3xl' >Munna Rawat</div>
        <div className=' ml-auto  relative'>
            <Search className="absolute left-[0.8rem] text-black h-4 top-1"></Search>
            <input type='text' placeholder='Search for friend, post or video' className="w-[35vw] pl-[2.4rem] h-[2rem] rounded-2xl text-black"/>
        </div>
        <div className='mx-[1.5rem]  text-[1rem] font-semibold'>
            Home
        </div>
        <div  className='mr-auto text-[1rem] mx-[1.5rem] font-semibold'>Timeline</div>
        <div className='mx-[1.5rem] relative'><Person></Person>
        <span  className='h-[1rem] w-[1rem] bg-red-500 text-white absolute top-[-6px] left-[14px] rounded-[50%] flex justify-center align-middle items-center'>1</span>
        </div>
        <div className='mx-[1.5rem] relative'><Chat></Chat>
        <span className='h-[1rem] w-[1rem] bg-red-500 text-white absolute top-[-6px] left-[14px] rounded-[50%] flex justify-center align-middle items-center'>3</span>
        </div>
        <div className='mx-[1.5rem] relative'><Notifications></Notifications>
        <span className='h-[1rem] w-[1rem] bg-red-500 text-white absolute top-[-6px] left-[14px] rounded-[50%] flex justify-center align-middle items-center'>2</span>
        </div>
        <div className='mx-[2rem] '>
        <img src={profilepic} alt="Profile Pic" className="h-[2rem] w-[2rem] rounded-[50%]"/>
        </div>


        
    </div>
    </>
  )
}

export default Topbar