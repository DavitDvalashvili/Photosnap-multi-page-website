import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 24px;
  position: relative;
  font-weight: 700;
  letter-spacing: 2.5px;
  font-size: 15px;
  nav {
    position: absolute;
    left: 0px;
    top: 76px;
    background-color: #ffffff;
    width: 100vw;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin: 32px;
      .invite {
        color: #ffffff;
        list-style: none;
        padding: 14px 0px;
        background-color: #000000;
        width: 100%;
        text-align: center;
        cursor: pointer;
        transition: all 0.5s ease;
        &:hover {
          background-color: #dfdfdf;
          color: #000000;
        }
      }
      a {
        text-decoration: none;
        cursor: pointer;
        width: 100%;
        text-align: center;
        cursor: pointer;
        &:hover {
          opacity: 0.3;
        }
        li {
          color: #000000;
          list-style: none;
        }
        &:nth-of-type(3) {
          padding-bottom: 20px;
          border-bottom: solid 1px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
  .burger {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    padding: 28px 39px;
    position: unset;
    letter-spacing: 2px;
    font-size: 12px;
    nav {
      position: unset;
      width: unset;
      ul {
        flex-direction: row;
        gap: 37px;
        margin: unset;
        .invite {
          font-size: 12px;
          padding: 12px 23px;
          width: 158px;
          margin-left: 16px;
        }
        a {
          width: unset;
          &:nth-of-type(3) {
            padding-bottom: unset;
            border-bottom: unset;
          }
        }
      }
    }
  }
  @media (min-width: 1440px) {
    padding: 28px 165px;
    nav {
      ul {
        .invite {
          margin-left: 227px;
        }
      }
    }
  }
`;

export default HeaderStyled;
