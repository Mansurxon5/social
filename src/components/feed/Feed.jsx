import "../feed/feed.css"
import Post from "../post/Post"
import Share from "../share/Share"
import {Posts} from "../../dummyData"

export default function feed() {
  return (
    <div className="feed">
      <div className="feedWraper">
        <Share />
        {Posts.map(p => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
