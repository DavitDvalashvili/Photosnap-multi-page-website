import { StoryStyled } from "../StyledComponents/StoryStyled";
import arrow2 from "../../../public/assets/shared/desktop/arrow2.svg";
import storiesData from "../../data/storiesData.json";
import { StoryWrapper } from "../StyledComponents/StoryStyled";

const StoriesPage = () => {
  return (
    <StoryStyled>
      <div className="coverWrapper">
        <div className="imageBox"></div>
        <div className="textBox">
          <span>LAST MONTH’S FEATURED STORY</span>
          <h1>HAZY FULL MOON OF APPALACHIA</h1>
          <div className="spanWrapper">
            <span className="date">March 2nd 2020 </span>
            <span> by John Appleseed</span>
          </div>
          <p>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <div className="invite">
            <span>GET AN INVITE</span>
            <img src={arrow2} alt="arrow" />
          </div>
        </div>
      </div>
      <section className="storyContainer">
        {storiesData.map((story, index) => (
          <StoryWrapper index={index} key={index}>
            <div className="outerWrapper">
              <div className="innerWrapper">
                <h2>{story.name}</h2>
                <span className="author">by {story.author}</span>
                <div>
                  <span>read Story</span>
                  <img src={arrow2} alt="arrow" />
                </div>
              </div>
              <hr></hr>
            </div>
          </StoryWrapper>
        ))}
      </section>
    </StoryStyled>
  );
};

export default StoriesPage;
