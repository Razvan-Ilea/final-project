import background from "./background.jpg";
import "./Home.css";
export function Home() {
  return (
    <div className="home-container">
      <div className="background-container">
        <img src={background} alt="" />
      </div>
      <div className="test">
        <h1>Welcome to my site</h1>
      </div>
    </div>
  );
}
