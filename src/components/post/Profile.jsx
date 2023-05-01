import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/Topbar/Topbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="homeContainer"></div>
      <div className="functionContainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                className="profileCoverImage"
                alt=""
              />
              <img
                src="assets/post/7.jpeg"
                className="profileUserImage"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak kocagalu</h4>
              <span className="profileInfoDesk">Hello my frinend</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
