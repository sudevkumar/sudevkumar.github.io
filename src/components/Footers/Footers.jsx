import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./footers.css";

function Footers() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-container-left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Cuttack, Odisha-14</p>
              <p>India</p>
            </div>
          </div>
          {/*  */}
          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <h4>+91-8328847712</h4>
            </div>
          </div>

          {/*  */}
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <h4>sudevkumar82@gmail.com</h4>
            </div>
          </div>
        </div>

        {/* //////////////////////////////// */}
        <div className="footer-container-right">
          <div className="link-dn">
            <a href="https://www.linkedin.com/in/sudev-kumar-6a51bb191/">
              <FaLinkedin
                size={40}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>

          <div className="git-hub">
            <a href="https://github.com/sudevkumar">
              <FaGithub
                size={40}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footers;
