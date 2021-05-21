import "./Footer.css";
import copyright from "./copyright.png";

export function Footer() {
  return (
    <div className="footer">
      <img src={copyright} alt="" />
      <p>by Razvan Ilea 2021</p>
    </div>
  );
}
