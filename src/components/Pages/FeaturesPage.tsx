import { BetaWrapper, FeatureStyled } from "../StyledComponents/FeatureStyled";
import { SubHeader } from "../StyledComponents/FeatureStyled";
import arrow2 from "../../../public/assets/shared/desktop/arrow2.svg";
import { FeatureContainerExtend } from "../StyledComponents/FeatureStyled";
import featureData from "../../data/featuresData.json";

const FeaturesPage = () => {
  return (
    <FeatureStyled>
      <SubHeader>
        <div className="imageBox"></div>
        <div className="textBox">
          <h1>FEATURES</h1>
          <p>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
          <hr></hr>
        </div>
      </SubHeader>
      <FeatureContainerExtend>
        {featureData.map((feature, index) => (
          <div key={index}>
            <img src={feature.images} alt="featureImage" />
            <h3>{feature.feature}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </FeatureContainerExtend>
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
    </FeatureStyled>
  );
};

export default FeaturesPage;
