import React from 'react'
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
  } from '@mui/icons-material';
  import { Users } from '../../data';
  import "./Slidebar.css"


const Sidebar = () => {
  console.log(Users);
  return (
    
    <div className="font-semibold ml-6 myheight overflow-y-scroll sticky top-[50px] col-span-1">

        <div className='my-[1.3rem] flex space-x-3'><RssFeed></RssFeed> <span>Feed</span></div>
        <div className='my-[1.3rem] flex space-x-3'><Chat></Chat> <span>Chats</span></div>
        <div className='my-[1.3rem] flex space-x-3'><PlayCircleFilledOutlined></PlayCircleFilledOutlined> <span>Videos</span> </div>
        <div className='my-[1.3rem] flex space-x-3'><Group></Group> <span>Group</span></div>
        <div className='my-[1.3rem] flex space-x-3'><Bookmark></Bookmark> <span>BookMark</span></div>
        <div className='my-[1.3rem] flex space-x-3'><HelpOutline></HelpOutline> <span>Questions</span></div>
        <div className='my-[1.3rem] flex space-x-3'><WorkOutline></WorkOutline> <span>Jobs</span></div>
        <div className='my-[1.3rem] flex space-x-3'><Event></Event> <span>Event</span></div>
        <div className='my-[1.3rem] flex space-x-3'><School></School> <span>Courses</span></div>

        <div className='my-[1rem]'>
            <button className='bg-gray-100 px-8 py-2 rounded'>Show More</button>
        </div>
        <hr />

        {Users.map((element)=>(
           <div className="my-[1.3rem] flex space-x-3" key={element.id}>
           <img src={element.profilePicture} className='h-[2rem] w-[2rem] rounded-[50%]'/>
 
           <span>{element.username}</span>
         </div>
  ))}

       


     
        
    </div>
  )
}

export default Sidebar