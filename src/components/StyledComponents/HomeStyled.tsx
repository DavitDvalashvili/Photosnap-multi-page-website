import styled from "styled-components";
import iData from "../../data/ImageData.json";
import sData from "../../data/storiesData.json";
import { wrapperType } from "../../Type";

const HomeStyled = styled.main`
  .flexBox {
    width: 100vw;
    .textBox {
      background-color: red;
      width: 100%;
      padding: 72px 24px 72px 33px;
      background-color: #ffffff;
      color: black;
      h1 {
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: 3.333px;
        text-transform: uppercase;
        max-width: 387px;
      }
      p {
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        margin: 16px 0px 23px 0px;
        max-width: 387px;
      }
      div {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 2px;
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 26px;
      }
    }
    .blackBox {
      background-color: #000000;
      color: #ffffff;
    }
    div {
      &:nth-of-type(6) {
        padding-top: 92px;
        padding-bottom: 92px;
      }
    }

    .imageBox {
      width: 100%;
      height: 271px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .creation {
      height: 294px;
      background-image: url(${iData[0].creation.mobile});
    }
    .beautiful {
      background-image: url(${iData[0].beautiful.mobile});
    }
    .design {
      background-image: url(${iData[0].design.mobile});
    }
  }
`;

export default HomeStyled;

export const StoryWrapper = styled.div<wrapperType>`
  position: relative;
  width: 100%;
  height: 375px;
  background-position: center;
  background-size: cover;
  .innerWrapper {
    position: absolute;
    top: 0;
    left: 0;
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
  &:nth-of-type(${(props) => props.index + 1}) {
    background-image: url(${(props) => sData[props.index]["images"]["mobile"]});
  }
`;

export const FeatureContainer = styled.section`
  padding: 80px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 56px;
  line-height: 25px;
  div {
    text-align: center;
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 320px;
    h3 {
      margin: 48px 0px 16px 0px;
      font-size: 18px;
      font-weight: 700;
    }
    p {
      font-size: 15px;
      font-weight: 400;
    }
  }
`;
