import "../assets/styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h3>Posts List</h3>
      </div>
      <div className="navbar-right">
        <button className="btn btn-refresh">Refresh button</button>
        <img className="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
