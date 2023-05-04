import "./Online.css";

// .rightbarFriend {  display: flex;  align-items: center;  margin-bottom: 15px;}
// .rightbarProfileImgContainer {  margin-right: 10px;  position: relative;}
// .rightbarProfileImg {  width: 40px;  height: 40px;  border-radius: 50%;  object-fit: cover;}
// .rightbarOnline{ width: 12px;    height: 12px; border-radius: 50%; 
//   background-color: limegreen; position: absolute; top: -2px; right: 0;    border: 2px solid white;}
//   .rightbarUsername{    font-weight: 500;}

export default function Online({user}) {
  return (
    <li className="flex items-center mb-[15px]">
    <div className="mr-10px relative">
      <img className="w-[40px] h-[40px] rounded-[50%] object-cover" src={user.profilePicture} alt="" />
      <span className="w-[12px] h-[12px] rounded-[50%] bg-[limegreen] absolute top-[-2px] right-0 border-[2px] border-solid border-white"></span>
    </div>
    <span className="font-[500] ml-2">{user.username}</span>
  </li>
  );
}
