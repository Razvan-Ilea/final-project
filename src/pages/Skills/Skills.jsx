import htmlLogo from "./icons/html.png";
import cssLogo from "./icons/css.png";
import jsLogo from "./icons/javascript.png";
import reactLogo from "./icons/react.png";
import "./Skills.css";

export function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <p>
        For more than eight months I work to develop my skills at the Informal
        School of IT. These are the technologies that I learned to work with.
      </p>

      <div className="icons-container">
        <div className="html-container">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noreferrer"
          >
            <img src={htmlLogo} alt="" />
          </a>
          <p>
            <span>HTML</span>
          </p>
        </div>
        <div className="css-container">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
          >
            <img src={cssLogo} alt="" />
          </a>
          <p>
            <span>CSS</span>
          </p>
        </div>
        <div className="js-container">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img src={jsLogo} alt="" />
          </a>
          <p>
            <span>JavaScript</span>
          </p>
        </div>
        <div className="react-container">
          <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
            <img src={reactLogo} alt="" />
          </a>
          <p>
            <span>ReactJs</span>
          </p>
        </div>
      </div>
    </div>
  );
}
