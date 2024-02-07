import { Outlet, Link } from "react-router-dom";
import "./navbar.component.scss";
import { Fragment } from "react";

const NavBar = () => {
  return (
    <Fragment>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/category">Utilities</Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
