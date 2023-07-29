import HomeStyled from "../StyledComponents/HomeStyled";
import arrow from "../../../public/assets/shared/desktop/arrow.svg";
import arrow2 from "../../../public/assets/shared/desktop/arrow2.svg";
import storiesData from "../../data/storiesData.json";
import { StoryWrapper } from "../StyledComponents/HomeStyled";
import { FeatureContainer } from "../StyledComponents/HomeStyled";
import featureData from "../../data/featuresData.json";

const HomePage = () => {
  return (
    <HomeStyled>
      <section className="flexBox">
        <div className="imageBox creation"></div>
        <div className="textBox blackBox">
          <h1>Create and share your photo stories.</h1>
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <div>
            <span>GET AN INVITE</span>
            <img src={arrow2} alt="arrow" />
          </div>
        </div>
        <div className="imageBox beautiful"></div>
        <div className="textBox">
          <h1>BEAUTIFUL STORIES EVERY TIME</h1>
          <p>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <div>
            <span>GET AN INVITE</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="imageBox design"></div>
        <div className="textBox">
          <h1>DESIGNED FOR EVERYONE</h1>
          <p>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <div>
            <span>GET AN INVITE</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </section>
      <section className="storyContainer">
        {storiesData.slice(0, 4).map((story, index) => (
          <StoryWrapper index={index} key={index}>
            <div className="innerWrapper">
              <h2>{story.name}</h2>
              <span className="author">by {story.author}</span>
              <div>
                <span>read Story</span>
                <img src={arrow2} alt="arrow" />
              </div>
            </div>
          </StoryWrapper>
        ))}
      </section>
      <FeatureContainer>
        {featureData.slice(0, 3).map((feature) => (
          <div>
            <img src={feature.images} alt="featureImage" />
            <h3>{feature.feature}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </FeatureContainer>
    </HomeStyled>
  );
};

export default HomePage;
