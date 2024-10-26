import "./header.css";
import pinterestLogo from "../../images/icons8-pinterest.svg";
import bellIcon from "../../images/icons8-bell-48.png";
import chatIcon from "../../images/icons8-chat-50.png";
import avatarIcon from "../../images/icons8-avatar-24.png";

export const Header = () => {
  return (
    <div className="header_bar">
      <img className="pinterest_icon" src={pinterestLogo} />
      <div className="main_btns">
        <button className="btn">Home</button>
        <button className="btn">About</button>
      </div>
      <div>
        <input />
      </div>
      <img className="icons" src={bellIcon} />
      <img className="icons" src={chatIcon} />
      <img className="avatar" src={avatarIcon} />
    </div>
  );
};
