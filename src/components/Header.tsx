import logo from "../assets/shared/desktop/logo.svg";
import burgerIcon from "../assets/shared/desktop/menu.svg";
import close from "../assets/shared/desktop/close.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import useWindowWidth from "./Hooks/useWindowWidth";
import HeaderStyled from "./StyledComponents/HeaderStyled";

const Header = () => {
  const [hideNav, setHideNav] = useState(true);

  const handleClick = () => {
    setHideNav(!hideNav);
  };

  const handleClickOnLink = () => {
    setHideNav(true);
  };

  const width = useWindowWidth();

  return (
    <HeaderStyled>
      <Link to="/">
        <img src={logo} onClick={handleClickOnLink} alt="logo" />
      </Link>
      {(!hideNav || width >= 768) && (
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
            <li className="invite">GET AN INVITE</li>
          </ul>
        </nav>
      )}
      {width < 768 && (
        <img
          className="burger"
          onClick={handleClick}
          src={hideNav ? burgerIcon : close}
          alt="burger&close Icons"
        />
      )}
    </HeaderStyled>
  );
};

export default Header;
