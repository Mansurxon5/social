import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/Topbar/Topbar";
import "../../components/Topbar/topbar.css";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer"></div>
      <div className="functionContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}
