import styled from "styled-components";
import hero from "../../../assets/heroes/hero-8.jpeg";

const StyledHero = styled.div`
  overflow: hidden;
  #heroImg {
    position: relative;
    height: 69vh;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        var(--brandBlack) 1%,
        transparent
      ), linear-gradient(to top, black 2%, transparent 50%);
    }
    img {
      max-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }
  #textWrapper {
    height: 70%;
    width: 100%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    position: absolute;
    top: 99px;
    @media (min-width: 1536px) {
      left: 50%;
      transform: translateX(-50%);
    }
    #text {
      position: absolute;
      padding: 1rem;
      @media (min-width: 768px) {
        padding: 1.5rem;
      }
      @media (min-width: 1536px) {
        padding: 0;
      }
      bottom: 0;
      left: 0;
      height: 70%;
      color: white;
      z-index: 2;
      h1 {
        line-height: 1;
        margin-bottom: 1rem;
        transition: font-size 400ms;
        @media (min-width: 1024px) {
          font-size: 260%;
        }
        @media (min-width: 1536px) {
          font-size: 290%;
        }
      }
      p {
        margin-bottom: 1.5rem;
        font-weight: bold;
      }
      button {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background-color: var(--brandGreenLight);
        border: none;
        padding: 0.75rem 1.5rem;
        font-weight: 900;
        font-size: 1rem;
        border-radius: 4px;
        color: #2b2828f6;
        cursor: pointer;
        letter-spacing: 0.12em;
        padding: 0.6em 1.5em 0.6em;
        transition: 500ms filter;
        &:hover {
          filter: brightness(1.2);
        }
      }
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <div id="heroImg">
        <img src={hero} alt="" />
      </div>
        <div id="textWrapper">
          hi
          <div id="text">
            <h1>
              {" "}
              Call of Duty®: <br /> Modern Warfare®
            </h1>
            <p>For Xbox Series X|S & Xbox One</p>
            <button>
              <span>GET IT NOW</span>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
    </StyledHero>
  );
};

export default Hero;
