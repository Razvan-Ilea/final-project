import "./Footer.css";
import copyright from "./copyright.png";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-copyright">
        <img src={copyright} alt="" />
        <p>by Razvan Ilea 2021</p>
      </div>
      <div className="footer-logo">
        <img src="" alt="" />
      </div>
      <div className="footer-contact">
        <p>Email: razvan_ilea12@yahoo.com</p>
        <p>Phone: 0724447609</p>
      </div>
    </div>
  );
}
