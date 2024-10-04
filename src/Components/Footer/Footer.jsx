import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import NEWLOGO1 from "../Assets/NewLogo1.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={NEWLOGO1} alt="" width={"200px"} />
      </div>
      <ul className="footer-links">
        <li>
          <a href="">Comany</a>
        </li>
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-containier">
          <a href="https:instgram.com">
            <img src={instagram_icon} alt="" />
          </a>
          <a href="https:pintrest.com">
            <img src={pintester_icon} alt="" />
          </a>
          <a href="https:whatsapp.com">
            <img src={whatsapp_icon} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
