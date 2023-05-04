import React from 'react';
import profilepic from "../../img/post/3.jpeg"
import profilepic2 from "../../img/person/7.jpeg"
import MyFeed from '../Feed/Feed';

const Myprofile = () => {
  return (
    <>
    <div className="col-span-4 bg-gray-200">
            <div>
                <img src={profilepic} alt='img' className='w-[100%] h-[250px] object-cover'/>
            </div>
            <div>
                
                <img src={profilepic2} alt='img2' className='w-[150px] h-[150px] rounded-[50%] object-cover absolute left-[20rem] right-0 m-auto top-[12rem] border-[3px] border-solid border-white'/>
                

            </div>

            <div className='text-center mt-[2.5rem]'>
            <h2 className='font-bold text-2xl text-center'>Manoj Rawat</h2>
                <span className='text-xl'>Hello Friends!</span>
            </div>
            <MyFeed />
</div>


    </>
  )
}

export default Myprofile