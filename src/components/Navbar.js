import "../assets/styles/Navbar.scss";
import { ImSpinner11, ImMenu } from "react-icons/im";
import avatar from "../assets/picture/background1.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="menu">
          <span>
            <ImMenu />
          </span>
        </div>
        <ul display="none">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h3>Posts List</h3>
      </div>
      <div className="navbar-right">
        <div className="btn btn-refresh">
          <span>
            <ImSpinner11 />
          </span>
        </div>
        <div className="avatar">
          <img src={avatar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
