import PricingStyled from "../StyledComponents/PricingStyled";
import { SubHeaderPricing } from "../StyledComponents/PricingStyled";
import { BetaWrapper } from "../StyledComponents/FeatureStyled";
import arrow2 from "../../../public/assets/shared/desktop/arrow2.svg";
import { useState } from "react";
import useWindowWidth from "../Hooks/useWindowWidth";
import TableData from "../../data/TableData.json";
import { Table } from "../StyledComponents/PricingStyled";

const PricingPage = () => {
  const [MonthlyPrice, setMonthlyPrice] = useState<boolean>(true);
  const handleClick = () => {
    setMonthlyPrice(!MonthlyPrice);
  };

  let pro = 39;
  let basic = 19;
  let business = 99;

  const width = useWindowWidth();

  const [activePrice, setActivePrice] = useState<string>("pro");

  return (
    <PricingStyled MonthlyPrice={MonthlyPrice}>
      <SubHeaderPricing>
        <div className="imageBox"></div>
        <div className="textBox">
          <h1>PRICING</h1>
          <p>
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
          <hr></hr>
        </div>
      </SubHeaderPricing>

      <PricingStyled MonthlyPrice={MonthlyPrice} className="layer1">
        <div className="toggleWrapper">
          <span className="month">Monthly</span>
          <div className="toggle" onClick={handleClick}>
            <div></div>
          </div>
          <span className="year">Yearly</span>
        </div>

        <div className="pricingWrapper">
          <div className={activePrice == "basic" ? "basic active" : "basic"}>
            <div>
              <h2>Basic</h2>
              <p>
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </p>
              {width < 768 ||
                (width >= 1440 && (
                  <div className="price">
                    <span>
                      $
                      {MonthlyPrice
                        ? basic.toFixed(2)
                        : (basic * 12).toFixed(2)}
                    </span>
                    <span>{MonthlyPrice ? "per month" : "per year"}</span>
                  </div>
                ))}
              <button onClick={() => setActivePrice("basic")}>PICK PLAN</button>
            </div>
            {width >= 768 && width < 1440 && (
              <div className="price">
                <span>
                  ${MonthlyPrice ? basic.toFixed(2) : (basic * 12).toFixed(2)}
                </span>
                <span>{MonthlyPrice ? "per month" : "per year"}</span>
              </div>
            )}
          </div>
          <div className={activePrice == "pro" ? "pro active" : "pro"}>
            <div>
              <h2>Pro</h2>
              <p>
                More advanced features available. Recommended for photography
                veterans and professionals.
              </p>
              {width < 768 ||
                (width >= 1440 && (
                  <div className="price">
                    <span>
                      ${MonthlyPrice ? pro.toFixed(2) : (pro * 12).toFixed(2)}
                    </span>
                    <span>{MonthlyPrice ? "per month" : "per year"}</span>
                  </div>
                ))}
              <button onClick={() => setActivePrice("pro")}>PICK PLAN</button>
            </div>
            {width >= 768 && width < 1440 && (
              <div className="price">
                <span>
                  ${MonthlyPrice ? pro.toFixed(2) : (pro * 12).toFixed(2)}
                </span>
                <span>{MonthlyPrice ? "per month" : "per year"}</span>
              </div>
            )}
          </div>
          <div
            className={
              activePrice == "business" ? "business active" : "business"
            }
          >
            <div>
              <h2>Business</h2>
              <p>
                Additional features available such as more detailed metrics.
                Recommended for business owners.
              </p>
              {width < 768 ||
                (width >= 1440 && (
                  <div className="price">
                    <span>
                      $
                      {MonthlyPrice
                        ? business.toFixed(2)
                        : (business * 12).toFixed(2)}
                    </span>
                    <span>{MonthlyPrice ? "per month" : "per year"}</span>
                  </div>
                ))}
              <button onClick={() => setActivePrice("business")}>
                PICK PLAN
              </button>
            </div>
            {width >= 768 && width < 1440 && (
              <div className="price">
                <span>
                  $
                  {MonthlyPrice
                    ? business.toFixed(2)
                    : (business * 12).toFixed(2)}
                </span>
                <span>{MonthlyPrice ? "per month" : "per year"}</span>
              </div>
            )}
          </div>
        </div>
      </PricingStyled>

      <Table>
        {width >= 768 && <h3>COMPARE</h3>}
        <div className="tableHeader">
          <div className="featureTitles">THE FEATURES</div>
          {width >= 768 && (
            <div>
              <span>BASIC</span>
              <span>PRO</span>
              <span>BUSINESS</span>
            </div>
          )}
        </div>
        {TableData.map((feature) => (
          <div className="row">
            <div className="title">{feature.feature}</div>
            <div className="checkBoxWrapper">
              <div>
                <span>basic</span>
                {feature.images.basic && (
                  <img src={feature.images.basic} alt="check" />
                )}
              </div>
              <div>
                <span>pro</span>
                {feature.images.pro && (
                  <img src={feature.images.pro} alt="check" />
                )}
              </div>
              <div>
                <span>business</span>
                {feature.images.business && (
                  <img src={feature.images.business} />
                )}
              </div>
            </div>
          </div>
        ))}
      </Table>

      <BetaWrapper>
        <h4>
          We’re in beta.<br></br> Get your invite today!
        </h4>
        <div>
          <span>GET AN INVITE</span>
          <img src={arrow2} alt="arrow" />
        </div>
        <hr></hr>
      </BetaWrapper>
    </PricingStyled>
  );
};

export default PricingPage;
