import { Container } from "./styles";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import portfolioImage from "../../assets/portfolio-image.jpg";

export function Skills() {
  return (
    <Container id="skills">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Skills</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <div className="skill-shape">
            <div style={{ width: "95%" }} className="skill-shape-in">
              <div>HTML</div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.3 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <div className="skill-shape">
            <div style={{ width: "92%" }} className="skill-shape-in">
              <div>CSS</div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.35 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <div className="skill-shape">
            <div style={{ width: "90%" }} className="skill-shape-in">
              <div>Bootstrap</div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <div className="skill-shape">
            <div style={{ width: "80%" }} className="skill-shape-in">
              <div>JavaScript</div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.45 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <div className="skill-shape">
            <div style={{ width: "75%" }} className="skill-shape-in">
              <div>React JS</div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.5 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <div className="skill-shape">
            <div style={{ width: "70%" }} className="skill-shape-in">
              <div>Antd</div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.55 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <div className="skill-shape">
            <div style={{ width: "60%" }} className="skill-shape-in">
              <div>Redux</div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.65 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <div className="skill-shape">
            <div style={{ width: "55%" }} className="skill-shape-in">
              <div>TypeScript</div>
            </div>
          </div>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <svg
                className="d-block"
                width="36"
                height="36"
                viewBox="0 0 612 612"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z"
                ></path>
                <path
                  fill="currentColor"
                  d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z"
                ></path>
              </svg>
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              ></img>
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img
                src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                alt="Redux Logo"
                className="themedImage_1VuW themedImage--light_3UqQ"
              />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      {/* <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img style={{ width: "70%" }} src={portfolioImage} alt="My image" />
        </ScrollAnimation>
      </div> */}
    </Container>
  );
}
