import football from "./football.png";
import gaming from "./games.png";
import travel from "./travel.png";
import music from "./music.png";
import "./Hobbies.css";

export function Hobbies() {
  return (
    <div className="container">
      <h1>Hobbies</h1>
      <div className="hobbies">
        <div className="first-column">
          <div className="item">
            <img src={football} alt="" />
            <h3>Football</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              pariatur omnis facilis officia tempore temporibus, et commodi,
              provident, est ab molestiae sapiente quidem quos enim laborum
              soluta deserunt velit optio.
            </p>
          </div>
          <div className="item">
            <img src={gaming} alt="" />
            <h3>Gaming</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              pariatur omnis facilis officia tempore temporibus, et commodi,
              provident, est ab molestiae sapiente quidem quos enim laborum
              soluta deserunt velit optio.
            </p>
          </div>
        </div>
        <div className="second-column">
          <div className="item">
            <img src={travel} alt="" />
            <h3>Travel</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              pariatur omnis facilis officia tempore temporibus, et commodi,
              provident, est ab molestiae sapiente quidem quos enim laborum
              soluta deserunt velit optio.
            </p>
          </div>
          <div className="item">
            <img src={music} alt="" />
            <h3>Music</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              pariatur omnis facilis officia tempore temporibus, et commodi,
              provident, est ab molestiae sapiente quidem quos enim laborum
              soluta deserunt velit optio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
