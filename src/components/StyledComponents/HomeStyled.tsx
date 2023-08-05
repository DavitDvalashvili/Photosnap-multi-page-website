import styled from "styled-components";
import iData from "../../data/imageData.json";

const HomeStyled = styled.main`
  .flexBox {
    width: 100vw;
    .textBox {
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
    .wrapper1 {
      .textBox {
        background-color: #000000;
        color: #ffffff;
        position: relative;
        hr {
          width: 128px;
          height: 6px;
          border: none;
          background: linear-gradient(
            27deg,
            #ffc593 0%,
            #bc7198 51.95%,
            #5a77ff 100%
          );
          position: absolute;
          top: 0px;
          left: 33px;
        }
      }
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
    .wrapper1 {
      .imageBox {
        height: 294px;
        background-image: url(${iData[0].creation.mobile});
      }
    }
    .wrapper2 {
      .imageBox {
        background-image: url(${iData[0].beautiful.mobile});
      }
    }
    .wrapper3 {
      .imageBox {
        background-image: url(${iData[0].design.mobile});
      }
    }
  }
  @media (min-width: 768px) {
    .storyContainer {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media (min-width: 768px) {
    .flexBox {
      .flexWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        .textBox {
          width: 64.452vw;
          h1 {
            font-size: 40px;
            line-height: 48px;
            letter-spacing: 4.167px;
          }
          p {
            margin: 21px 0px 48px 0px;
            width: 387px;
          }
        }
        .imageBox {
          width: 35.548vw;
          height: 600px;
        }
      }
      .wrapper1 .imageBox,
      .wrapper3 .imageBox {
        order: 2;
      }
      .wrapper1 {
        .imageBox {
          height: 650px;
          background-image: url(${iData[0].creation.tablet});
        }
        .textBox {
          padding: 173px 54px;
          hr {
            width: 6px;
            height: 304px;
            top: 173px;
            left: 0px;
          }
        }
      }
      .wrapper2 {
        .textBox {
          padding: 136px 54px 135px 54px;
        }
        .imageBox {
          background-image: url(${iData[0].beautiful.tablet});
        }
      }
      .wrapper3 {
        .textBox {
          padding: 160px 54px 159px 54px;
        }
        .imageBox {
          background-image: url(${iData[0].design.tablet});
        }
      }
    }
  }
  @media (min-width: 1440px) {
    .flexBox {
      .flexWrapper {
        .textBox {
          width: 42.3612vw;
        }
        .imageBox {
          width: 57.639vw;
        }
      }
      .wrapper1 {
        .imageBox {
          background-image: url(${iData[0].creation.desktop});
        }
        .textBox {
          padding: 173px 111px 173px 112px;
        }
      }
      .wrapper2 {
        .textBox {
          padding: 136px 111px 135px 112px;
        }
        .imageBox {
          background-image: url(${iData[0].beautiful.desktop});
        }
      }
      .wrapper3 {
        .textBox {
          padding: 160px 111px 159px 112px;
        }
        .imageBox {
          background-image: url(${iData[0].design.desktop});
        }
      }
    }
  }
`;

export default HomeStyled;

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
    max-width: 457px;
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
  @media (min-width: 768px) {
    padding: 120px 155px;
    gap: 80px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    div {
      max-width: unset;
      width: 350px;
      height: 236px;
      &:nth-of-type(2) {
        padding-top: 18px;
        h3 {
          margin-top: 66px;
        }
      }
    }
  }
`;
