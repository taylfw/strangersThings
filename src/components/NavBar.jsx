import "./NavBar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <Link className="nav-bar-link" to="/posts">
        POSTS
      </Link>

      <Link className="nav-bar-link" to="/login">
        LOGIN
      </Link>
      <Link className="nav-bar-link" to="/register">
        REGISTER
      </Link>
    </div>
  );
};

export default NavBar;
