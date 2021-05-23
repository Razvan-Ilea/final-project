import htmlLogo from "./html.png";
import cssLogo from "./css.png";
import jsLogo from "./javascript.png";
import reactLogo from "./react.png";
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
        <div>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noreferrer"
          >
            <img src={htmlLogo} alt="" />
          </a>
          <p>HTML</p>
        </div>
        <div>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
          >
            <img src={cssLogo} alt="" />
          </a>
          <p>CSS</p>
        </div>
        <div>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img src={jsLogo} alt="" />
          </a>
          <p>JavaScript</p>
        </div>
        <div>
          <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
            <img src={reactLogo} alt="" />
          </a>
          <p>ReactJS</p>
        </div>
      </div>
    </div>
  );
}
