import styled from "styled-components";
import facebook from "../../../public/assets/shared/Smedia/facebook.svg";
import youtube from "../../../public/assets/shared/Smedia/youtube.svg";
import twitter from "../../../public/assets/shared/Smedia/twitter.svg";
import pinterest from "../../../public/assets/shared/Smedia/pinterest.svg";
import instagram from "../../../public/assets/shared/Smedia/instagram.svg";
import facebookHover from "../../../public/assets/shared/Smedia/facebookHover.svg";
import youtubeHover from "../../../public/assets/shared/Smedia/youtubeHover.svg";
import twitterHover from "../../../public/assets/shared/Smedia/twitterHover.svg";
import pinterestHover from "../../../public/assets/shared/Smedia/pinterestHover.svg";
import instagramHover from "../../../public/assets/shared/Smedia/instagramHover.svg";

const sMediaStyle = `
display: flex;
justify-content: center;
align-items: center;
gap: 13px;
margin: 32px 0px 49px 0px;
div {
  width: 20px;
  height: 20px;
  background-position: center;
  transform: all 0.5s ease-out;
  cursor: pointer;
}
.facebook {
  background-image: url(${facebook});
  &:hover {
    background-image: url(${facebookHover});
  }
}
.youtube {
  background-image: url(${youtube});
  &:hover {
    background-image: url(${youtubeHover});
  }
}
.twitter {
  background-image: url(${twitter});
  &:hover {
    background-image: url(${twitterHover});
  }
}
.pinterest {
  background-image: url(${pinterest});
  &:hover {
    background-image: url(${pinterestHover});
  }
}
.instagram {
  background-image: url(${instagram});
  &:hover {
    background-image: url(${instagramHover});
  }
}
`;

const FooterStyled = styled.footer`
  background-color: #000000;
  padding: 56px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 119px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  color: white;
  .imgNavBox {
    .imageBox {
      .social-media {
        ${sMediaStyle}
      }
    }
    nav {
      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 19px;
        a {
          text-decoration: none;
          cursor: pointer;
          &:hover {
            opacity: 0.3;
          }
          li {
            color: #ffffff;
            list-style: none;
          }
        }
      }
    }
    .social-media {
      ${sMediaStyle}
    }
  }
  .textBox {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 22px;
      margin-bottom: 34px;
      span {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    p {
      font-size: 15px;
      opacity: 0.5025;
      letter-spacing: 0px;
    }
  }
  @media (min-width: 768px) {
    padding: 64px 60px;
    flex-direction: row;
    justify-content: space-between;
    gap: unset;
    .imgNavBox {
      nav {
        margin-top: 32px;
        ul {
          flex-direction: row;
          gap: 26px;
        }
      }

      .social-media {
        margin: 72px 0px 0px 0px;
        justify-content: left;
      }
    }
    .textBox {
      div {
        gap: 16px;
        margin-bottom: 120px;
      }
    }
  }
  @media (min-width: 1440px) {
    padding: 64px 165px 64px 171px;
    .imgNavBox {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 109px;
      nav {
        margin-top: unset;
        ul {
          flex-direction: column;
          align-items: flex-start;
          gap: 19px;
        }
      }
      .imageBox {
        .social-media {
          margin: 82px 0px 0px 0px;
          justify-content: space-between;
        }
      }
    }
    .textBox {
      div {
        margin-bottom: 86px;
        justify-content: right;
      }
    }
  }
`;

export default FooterStyled;
