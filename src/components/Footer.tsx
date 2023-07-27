import arrow from "..//assets/shared/desktop/arrow2.svg";
import logo from "..//assets/shared/desktop/logo2.svg";
import { Link } from "react-router-dom";
import FooterStyled from "./StyledComponents/FooterStyled";
import useWindowWidth from "./Hooks/usewindowWidth";

const Footer = () => {
  const width = useWindowWidth();

  return (
    <FooterStyled>
      <div className="imgNavBox">
        <div className="imageBox">
          <img src={logo} alt="logo" />
          {(width < 768 || width >= 1440) && (
            <div className="social-media">
              <div className="facebook"></div>
              <div className="youtube"></div>
              <div className="twitter"></div>
              <div className="pinterest"></div>
              <div className="instagram"></div>
            </div>
          )}
        </div>
        <nav>
          <ul>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/stories">
              <li>STORIES</li>
            </Link>
            <Link to="/features">
              <li>FEATURES</li>
            </Link>
            <Link to="/pricing">
              <li>PRICING</li>
            </Link>
          </ul>
        </nav>
        {width >= 768 && width < 1440 && (
          <div className="social-media">
            <div className="facebook"></div>
            <div className="youtube"></div>
            <div className="twitter"></div>
            <div className="pinterest"></div>
            <div className="instagram"></div>
          </div>
        )}
      </div>
      <div className="textBox">
        <div>
          <span>GET AN INVITE</span>
          <img src={arrow} alt="arrow" />
        </div>
        <p>Copyright 2019. All Rights Reserved</p>
      </div>
    </FooterStyled>
  );
};

export default Footer;
