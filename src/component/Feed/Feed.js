
import React from 'react';
import MyShare from '../Share/Share';
import PeoplePost from '../People/PeoplePost';
import Rightbar from '../Rightbar/Rightbar';

const MyFeed = () => {
  return (
    <>
    <div className="grid grid-cols-8">
    <div className='col-span-5'>

   <MyShare />
   <PeoplePost />
    </div>
    <div className='col-span-3'>
      <Rightbar className='col-span-3'/>
   
    </div>
    </div>
    </>
  )
}

export default MyFeed