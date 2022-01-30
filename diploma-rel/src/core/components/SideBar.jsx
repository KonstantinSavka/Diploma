import React, { useCallback } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ onLogout }) => {
    const onLogoutClick = useCallback(e => {
        e.preventDefault();
        onLogout && onLogout();
    }, [onLogout])
  return (
    <div className="aside">
      <div className="aside__menu">
        <div className="aside__content">
          <div className="aside__actions">
            <Link to="/"># Home</Link>
          </div>
          <div className="aside__actions">
            <Link to="/profile"># Profile</Link>
          </div>
          <div className="aside__actions">
            <a href="" onClick={onLogoutClick}># Log out</a>
          </div>
          <button type="button" className="nes-btn is-primary">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
