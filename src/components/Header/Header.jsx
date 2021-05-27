import "./Header.css";
import logo from "./registered.png";
import { Link } from "react-router-dom";

export function Header() {
  const buttons = {
    color: "white",
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="logo-name">
          <p>Razvan Ilea</p>
        </div>
      </div>

      <div className="menu-btn">
        <Link to="/" style={buttons}>
          <p className="big-button">Home</p>
        </Link>
        <Link to="/about" style={buttons}>
          <p className="big-button">About</p>
        </Link>
        <Link to="/skills" style={buttons}>
          <p className="big-button">Skills</p>
        </Link>
        <Link to="/hobbies" style={buttons}>
          <p className="big-button">Hobbies</p>
        </Link>
        <Link to="/contact" style={buttons}>
          <p className="big-button">Contact</p>
        </Link>
      </div>
    </div>
  );
}
