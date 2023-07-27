import logo from "../assets/shared/desktop/logo.svg";
import burgerIcon from "../assets/shared/desktop/menu.svg";
import close from "../assets/shared/desktop/close.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [hideNav, setHideNav] = useState(true);

  const handleClick = () => {
    setHideNav(!hideNav);
  };

  const handleClickOnLink = () => {
    setHideNav(true);
  };

  return (
    <>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      {!hideNav && (
        <nav>
          <ul onClick={handleClickOnLink}>
            <Link to="/stories">
              <li>STORIES</li>
            </Link>
            <Link to="/features">
              <li>FEATURES</li>
            </Link>
            <Link to="/pricing">
              <li>PRICING</li>
            </Link>
            <li>GET AN INVITE</li>
          </ul>
        </nav>
      )}
      <img
        onClick={handleClick}
        src={hideNav ? burgerIcon : close}
        alt="burger&close Icons"
      />
    </>
  );
};

export default Header;
