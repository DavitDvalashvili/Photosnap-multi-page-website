import styled from "styled-components";
import heroMobile from "../../../public/assets/features/mobile/hero.svg";
import heroTablet from "../../../public/assets/features/tablet/hero.svg";
import heroDesktop from "../../../public/assets/features/desktop/hero.svg";
import betaMobile from "../../../public/assets/features/mobile/beta.svg";
import betaTablet from "../../../public/assets/features/tablet/beta.svg";
import betaDesktop from "../../../public/assets/features/desktop/beta.svg";
import { FeatureContainer } from "./HomeStyled";

export const FeatureStyled = styled.main``;

export const SubHeader = styled.section`
  .imageBox {
    width: 100%;
    height: 294px;
    background-image: url(${heroMobile});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .textBox {
    background-color: #000000;
    padding: 72px 29px;
    color: #ffffff;
    position: relative;
    h1 {
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 3.333px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    p {
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
      opacity: 0.6;
      max-width: 387px;
    }
    hr {
      position: absolute;
      top: 0px;
      left: 29px;
      width: 128px;
      height: 6px;
      border: none;
      background: linear-gradient(
        27deg,
        #ffc593 0%,
        #bc7198 51.95%,
        #5a77ff 100%
      );
    }
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    .imageBox {
      order: 2;
      width: 35.548vw;
      height: 490px;
      background-image: url(${heroTablet});
    }
    .textBox {
      width: 64.452vw;
      height: 490px;
      padding: 173px 54px;
      h1 {
        line-height: 48px;
        letter-spacing: 4.167px;
        margin-bottom: 21px;
      }
      hr {
        width: 6px;
        height: 144px;
        top: 173px;
        left: 0px;
      }
    }
  }
  @media (min-width: 1440px) {
    .imageBox {
      width: 57.639vw;
      background-image: url(${heroDesktop});
    }
    .textBox {
      width: 42.3612vw;
      padding: 173px 112px;
    }
  }
`;

export const BetaWrapper = styled.section`
  padding: 64px 33px 64px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100vw;
  height: 288px;
  color: #fff;
  font-weight: 700;
  background-image: url(${betaMobile});
  background-position: center;
  background-size: cover;
  position: relative;
  h4 {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 3.333px;
    text-transform: uppercase;
  }
  div {
    font-size: 12px;
    letter-spacing: 2px;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 16px;
    span {
      &:hover {
        text-decoration: underline;
      }
    }
  }
  hr {
    position: absolute;
    top: 0px;
    left: 33px;
    width: 128px;
    height: 6px;
    border: none;
    background: linear-gradient(
      27deg,
      #ffc593 0%,
      #bc7198 51.95%,
      #5a77ff 100%
    );
  }
  @media (min-width: 768px) {
    padding: 68px 39px;
    flex-direction: row;
    justify-content: space-between;
    height: 280px;
    background-image: url(${betaTablet});
    h4 {
      width: 400px;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: 4.167px;
    }
    hr {
      left: 0px;
      width: 6px;
      height: 280px;
    }
  }
  @media (min-width: 1440px) {
    padding: 68px 165px;
    background-image: url(${betaDesktop});
  }
`;

export const FeatureContainerExtend = styled(FeatureContainer)`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    row-gap: 72px;
    column-gap: 11px;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 112px 39px 112px 38px;
    max-width: 1110px;
    margin: 0 auto;
    div {
      width: 340px;
      &:nth-of-type(2) {
        padding-top: 18px;
        h3 {
          margin-top: 66px;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    column-gap: 30px;
    width: 1110px;
    margin: 160px auto;
    padding: unset;
    div {
      width: 350px;
    }
  }
`;
