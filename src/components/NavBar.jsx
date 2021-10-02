import "./NavBar.css";

import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn, setIsloggedIn }) => {
  return (
    <div className="nav">
      <div>
        <Link className="nav-bar-link" to="/posts">
          POSTS
        </Link>
      </div>
      {isLoggedIn ? (
        <div>
          <Link className="nav-bar-link" to="/profile">
            ACCOUNT
          </Link>
          <Link
            className="nav-bar-link"
            to="/"
            onClick={() => {
              localStorage.clear();
              setIsloggedIn(false);
            }}
          >
            LOGOUT
          </Link>
        </div>
      ) : (
        <div>
          <Link className="nav-bar-link" to="/login">
            LOGIN
          </Link>
          <Link className="nav-bar-link" to="/register">
            REGISTER
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
