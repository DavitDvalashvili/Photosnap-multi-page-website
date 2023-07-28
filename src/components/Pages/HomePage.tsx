import HomeStyled from "../StyledComponents/HomeStyled";
import arrow from "../../assets/../assets/shared/desktop/arrow.svg";
import arrow2 from "../../assets/../assets/shared/desktop/arrow2.svg";
import storiesData from "../../storiesData.json";

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
            brands, businesses you name it.{" "}
          </p>
          <div>
            <span>GET AN INVITE</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </section>
      <section className="storyContainer">
        {storiesData.slice(0, 4).map((story, index) => (
          <div className="outerWrapper" key={index}>
            <div className="innerWrapper">
              <span className="date">{story.date}</span>
              <h2>{story.name}</h2>
              <span className="author">by {story.author}</span>
              <div>
                <span>read Story</span>
                <img src={arrow2} alt="arrow" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </HomeStyled>
  );
};

export default HomePage;
