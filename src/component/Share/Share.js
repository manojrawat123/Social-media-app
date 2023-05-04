import React from 'react'
import profilepic from "../../img/person/1.jpeg";
import {PermMedia, Label,Room, EmojiEmotions} from '@mui/icons-material';


const MyShare = () => {
  return (
    <div className='mt-[20px] mx-4'>
        <div className='relative shadow-2xl rounded-xl bg-white'>
        <img src={profilepic} alt="Profile Pic" className="h-[3.5rem] w-[3.5rem] rounded-[50%] absolute top-1 left-1"/>
        <input type="text" className='w-[95%] outline-none h-[4rem] ml-4 pl-[5rem] border-b border-solid border-gray-700' placeholder="Share Or Post your thought"/>
      
        <div className='flex mt-4 pb-[3rem]'>
              <div className='flex mx-4'>
                <PermMedia  className='text-red-500  mx-4 my-2'></PermMedia>
                <small className='my-2'>Photo or Video</small>
              </div>
              <div className='flex mx-4'>
                <Label className='text-blue-700  mx-4 my-2'></Label>
                <small className='my-2'>Tag</small>
              </div>
              <div className='flex mx-4'>
                <Room className='text-green-700  mx-4 my-2'></Room>
                <small className='my-2'>Location</small>
              </div>
              <div className='flex mx-4'>
                <EmojiEmotions className='text-yellow-500  mx-4 my-2'></EmojiEmotions>
                <small  className='my-2'>Feelings</small>
              </div>

              <div className='ml-auto mr-4'>
                <button className='bg-green-600 hover:bg-green-700 font-semibold rounded-xl px-4 py-2 text-white'>Share</button>
              </div>
        </div>
        </div>
    </div>
  )
}

export default MyShare