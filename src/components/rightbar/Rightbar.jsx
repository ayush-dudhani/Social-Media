import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/profiles/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b> Pola Foser </b> and <b> 3 other friends </b> have a birthday today
          </span>
        </div>
        <img src="assets/profiles/ad1.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}
