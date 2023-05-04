import "./rightbar.css";
import { Users } from "../../data";
import Online from "../online/Online";
import birthImg from "../../img/ad.png";
import birthGuy from "../../img/gift.png";

// .rightbar {//   flex: 3.5;// }.rightbarWrapper {//   padding: 20px 20px 0 0;// }

  

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
      
        <div className="flex items-center mb-3">
          <img className="w-[40px] h-[40px] mr-[10px]" src={birthGuy} alt="" />
          <span className="text-[15px] font-[300]">
            <b className="font-bold">Pola Foster</b> and <b className="font-bold">3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="w-[100%] rounded-[10px] ml-0" src={birthImg} alt="" />
        <h4 className="my-[20px] font-bold">Online Friends</h4>
        <ul className="">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

// .rightbarFriendList {  padding: 0;  margin: 0;  list-style: none;}
//.rightbarTitle{  font-size: 18px;  font-weight: 500;  margin-bottom: 10px;}
//.rightbarInfo{  margin-bottom: 30px;}.rightbarInfoItem{  margin-bottom: 10px;}


  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="font-[18px] text-[500] mb-10px">User information</h4>
        <div className="mb-30px ">
          <div className="mb-10px">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="mb-[10px]">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="mb-[10px]">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="font-[18px] text-[500] mb-10px">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="../../img/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="../../img/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="pt-[20px] pr-[20px]">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
