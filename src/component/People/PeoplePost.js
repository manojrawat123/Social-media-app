import React from 'react';
import profilepic from "../../img/person/1.jpeg";

import likeBtn from "../../img/like.png"
import heartBtn from "../../img/heart.png"
import { Posts, Users} from '../../data';
import { MoreVert } from '@mui/icons-material';

const PeoplePost = () => {
    
  return (
    <>
    {Posts.map((element, index)=>{
       return (
        
        <div className='m-4' key={element.id}>
        <div className='  shadow-2xl rounded-xl bg-white '>
                <div className='flex py-4 mx-4'>
                    <img src={Users.filter((u) => u.id === element?.userId)[0].profilePicture} alt="Profile Pic" className="h-[2rem] w-[2rem] rounded-[50%]" />
                    <span className='font-semibold ml-4'> Safak Kocaoglu</span>
                    <small className='ml-4'> {element.date}</small>
                    <span className='ml-auto mr-4'>
                   <MoreVert></MoreVert>
                    </span>
    
                    
                </div>
                <div className='mx-4 '>
                    <div className=' text-[1rem] my-2'>{element.desc}</div>
                    <img src={element.photo} className='w-[100%] h-[75vh]' />
                </div>
                <div className='flex py-4 my-4 mx-4'>
                    <div  className='mx-2'>  <img className="h-[1.5rem] w-[1.5rem]" src={likeBtn} alt="" />
           </div>
                    <div className='mx-2'>
            <img className="h-[1.5rem] w-[1.5rem]" src={heartBtn} alt="" /> </div>

                    <div className='mx-2'> {element.like} people like it</div>
                    <div className='ml-auto '>{element.comment} comments</div>
                </div>
        </div>
        </div> 
        )
    })}    
    </>
  )
}

export default PeoplePost