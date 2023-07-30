import styled from "styled-components";
import coverMobile from "../../../public/assets/stories/mobile/moon-of-appalacia.svg";
import coverTablet from "../../../public/assets/stories/tablet/moon-of-appalacia.svg";
import coverDesktop from "../../../public/assets/stories/desktop/moon-of-appalacia.svg";
import sData from "../../data/storiesData.json";
import { wrapperType } from "../../Type";

export const StoryStyled = styled.main`
  .imageBox {
    width: 100%;
    height: 317px;
    background-image: url(${coverMobile});
    background-position: center;
    background-size: cover;
  }
  .textBox {
    padding: 48px 28px 48px 29px;
    background-color: #000000;
    color: #ffffff;
    > span {
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2px;
    }
    h1 {
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 3.333px;
      text-transform: uppercase;
      margin: 16px 0px;
      max-width: 387px;
    }
    .spanWrapper {
      font-size: 13px;
      font-weight: 400;
      .date {
        opacity: 0.75;
        margin-right: 9px;
      }
    }
    p {
      margin: 24px 0px;
      font-weight: 400;
      font-size: 15px;
      line-height: 25px;
      opacity: 0.6;
      max-width: 425px;
    }
    .invite {
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2px;
      display: flex;
      justify-content: left;
      align-items: center;
      gap: 16px;
    }
  }
  @media (min-width: 768px) {
    .storyContainer{
        display: flex;
        flex-wrap: wrap;
    }
    .coverWrapper {
      position: relative;
    }
    .imageBox {
      height: 650px;
      background-image: url(${coverTablet});
    }
    .textBox {
      background-color: unset;
      position: absolute;
      top: 74px;
      left: 10px;
      h1 {
        line-height: 48px;
        letter-spacing: 4.167px;
        width: 327px;
        max-width: unset;
        margin-top: 24px;
      }
      p {
        max-width: 387px;
      }
    }
  }
  @media (min-width: 1440px) {
    .imageBox {
      background-image: url(${coverDesktop});
    }
    .textBox {
      left: 73px;
    }
  }
`;

export const StoryWrapper = styled.div<wrapperType>`
  position: relative;
  width: 100%;
  height: 375px;
  &:nth-of-type(${(props) => props.index + 1}) .outerWrapper {
    background-image: url(${(props) => sData[props.index]["images"]["mobile"]});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .outerWrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      top: -24px;
    }
    .innerWrapper {
      width: 100%;
      height: 100%;
      padding: 40px 32px 40px 33px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      color: #ffffff;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.66) 100%
      );
      .date {
        font-size: 13px;
        font-weight: 400;
        margin-bottom: 4px;
      }
      .h2 {
        font-size: 18px;
        font-weight: 700;
        line-height: 25px;
      }
      .author {
        font-size: 13px;
        font-weight: 400;
        margin: 4px 0px 16px 0px;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 2px;
        padding-top: 20px;
        border-top: solid 1px rgba(255, 255, 255, 0.25);
      }
    }
    &:hover {
      hr {
        background: linear-gradient(
          27deg,
          #ffc593 0%,
          #bc7198 43.29%,
          #5a77ff 83.33%
        );
      }
    }
    hr {
      height: 6px;
      border: none;
    }
  }
  @media (min-width: 768px) {
    &:nth-of-type(${(props) => props.index + 1}) .outerWrapper {
      background-image: url(${(props) => sData[props.index]["images"]["tablet"]});
    }
    width: 50vw;
    height: 500px;
  }
  @media (min-width: 1440px) {
    &:nth-of-type(${(props) => props.index + 1}) .outerWrapper {
      background-image: url(${(props) => sData[props.index]["images"]["desktop"]});
    }
    width: 25vw;
  }
`;
