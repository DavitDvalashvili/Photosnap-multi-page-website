import styled from "styled-components";
import { SubHeader } from "./FeatureStyled";
import heroMobile from "../../../public/assets/pricing/mobile/hero.svg";
import heroTablet from "../../../public/assets/pricing/tablet/hero.svg";
import heroDesktop from "../../../public/assets/pricing/desktop/hero.svg";
import { propsType } from "../../Type";

const PricingStyled = styled.main<propsType>`
  .table {
    margin-top: 160px;
  }
  .toggleWrapper {
    margin: 64px 28px 64.5px 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    color: #000;
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    .month {
      opacity: ${(props) => (props.MonthlyPrice ? "0.5" : "1")};
    }
    .year {
      opacity: ${(props) => (props.MonthlyPrice ? "1" : "0.5")};
    }
    .toggle {
      width: 64px;
      height: 32px;
      background-color: #dfdfdf;
      border-radius: 16px;
      padding: 4px;
      div {
        width: 24px;
        height: 24px;
        background-color: #000000;
        border-radius: 50%;
        float: ${(props) => (props.MonthlyPrice ? "left" : "right")};
      }
    }
  }
  .pricingWrapper {
    margin: 0px 28px 0px 29px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    .basic,
    .pro,
    .business {
      background-color: #f5f5f5;
      padding: 59px 22px 40px 21px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px;
        margin-bottom: 18px;
        text-align: center;
      }
      p {
        text-align: center;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        opacity: 0.6;
        max-width: 375px;
      }
      .price {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px 0px;
        span {
          &:nth-of-type(1) {
            font-size: 40px;
            font-weight: 700;
            line-height: 48px;
            letter-spacing: 4.167px;
          }
          &:nth-of-type(2) {
            font-size: 15px;
            font-weight: 400;
            line-height: 25px;
            opacity: 0.6;
            text-align: center;
          }
        }
      }
      button {
        width: 100%;
        height: 40px;
        border: none;
        background-color: #000000;
        color: #ffffff;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 2px;
        cursor: pointer;
      }
    }
    .active {
      background-color: #000000;
      color: #ffffff;
      position: relative;
      button {
        background-color: #ffffff;
        color: #000000;
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 6px;
        top: 0;
        left: 0;
        background: linear-gradient(
          27deg,
          #ffc593 0%,
          #bc7198 51.95%,
          #5a77ff 100%
        );
      }
    }
  }
  @media (min-width: 768px) {
    .pricingWrapper {
      margin: 0px 40px 0px 39px;
      .basic,
      .pro,
      .business {
        padding: 40px 48px 40px 40px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        p {
          text-align: left;
          font-size: 15px;
          font-weight: 400;
          line-height: 25px;
          opacity: 0.6;
          max-width: 270px;
        }
        .price {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin: 0px 0px;
        }
        button {
          margin-top: 32px;
        }
      }
      .active {
        &::after {
          width: 6px;
          height: 100%;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    .pricingWrapper {
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 30px;
      .basic,
      .pro,
      .business {
        padding: 56px 40px 40px 40px;
        width: 350px;
        height: 407px;
        > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            text-align: center;
          }
          .price {
            align-items: center;
            margin-top: 40px;
          }
          button {
            margin: 40px 0px -40px 0px;
          }
        }
      }
      .active {
        &::after {
          width: 100%;
          height: 6px;
        }
        height: 470px;
        padding: 68px 40px 71px 40px;
      }
    }
  }
`;

export default PricingStyled;

export const SubHeaderPricing = styled(SubHeader)`
  .imageBox {
    background-image: url(${heroMobile});
  }
  @media (min-width: 768px) {
    imageBox {
      background-image: url(${heroTablet});
    }
  }
  @media (min-width: 1440px) {
    imageBox {
      background-image: url(${heroDesktop});
    }
  }
`;

export const Table = styled.section`
  margin: 64px 28px 64px 29px;
  color: #000000;
  font-weight: 700;
  .tableHeader {
    font-size: 12px;
    letter-spacing: 2px;
    padding-bottom: 23px;
    border-bottom: 1px solid #000000;
  }
  .tableRow {
    padding: 23px 0px 24px 0px;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .title {
      font-size: 12px;
      letter-spacing: 2px;
    }
    .checkBoxWrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 47px;
      font-size: 10px;
      letter-spacing: 1.667px;
      text-transform: uppercase;
      div {
        display: flex;
        flex-direction: column;
        gap: 8px;
        justify-content: flex-start;
        height: 33px;
        span {
          opacity: 0.5;
        }
        img {
          width: 16px;
          height: 12px;
        }
      }
    }
  }
  @media (min-width: 768px) {
    margin: 112px 40px 112.5px 39px;
    h3 {
      text-align: center;
      text-transform: uppercase;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: 4.167px;
      margin-bottom: 46px;
    }
    .tableHeader {
      display: flex;
      justify-content: space-between;
      div {
        display: flex;
        span {
          width: 140px;
          font-size: 12px;
          letter-spacing: 2px;
          text-align: center;
        }
      }
    }
    .tableRow {
      padding: 23px 62px 23.5px 24px;
      flex-direction: row;
      gap: unset;
      justify-content: space-between;
      .checkBoxWrapper {
        padding: 0px;
        gap: 124px;
        div {
          height: unset;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    margin: 160px auto 160.5px auto;
    max-width: 731px;
    h3 {
      margin-bottom: 56px;
    }
  }
`;
