import "../rightbar/rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="brithdayContainer">
          <img src="assets/gift.png" alt="" className="bridthdayImg" />
          <span className="brithdayText">
            <b>Pola Foster</b> and <b>3 ohter friends</b> have a brithday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightboarAd" />
        <h4 className="rightbarTitle">Online Frinends</h4>
        <ul className="rightbarProfilList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  }
  const ProfileRightbar = () => {
    return (
      <>
        <h1 className="rightbarTitle">User information</h1>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <div className="rightbarInfoKey">City:</div>
            <div className="rightbarInfoValue">New York</div>
          </div>
          <div className="rightbarInfoItem">
            <div className="rightbarInfoKey">From:</div>
            <div className="rightbarInfoValue">Madrid</div>
          </div>
          <div className="rightbarInfoItem">
            <div className="rightbarInfoKey">Relationship:</div>
            <div className="rightbarInfoValue">Single</div>
          </div>
        </div>
        <h4>User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImage"
            />
            <span className="rightbarFollowingName">John Vatson</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImage"
            />
            <span className="rightbarFollowingName">John Vatson</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImage"
            />
            <span className="rightbarFollowingName">John Vatson</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImage"
            />
            <span className="rightbarFollowingName">John Vatson</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImage"
            />
            <span className="rightbarFollowingName">John Vatson</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImage"
            />
            <span className="rightbarFollowingName">John Vatson</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="rightbar">
      <div className="rightbarWraper">
      {profile ?  <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}
