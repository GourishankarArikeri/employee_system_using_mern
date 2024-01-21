import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <h1 id="footer-heading"> my webpage Footer</h1>
      <div className="content">
        <div>
          <h5>social media icons</h5>
          <div className="icons">
            <a href="https://www.facebook.com">
              {" "}
              <FontAwesomeIcon icon={faFacebook} id="SocialIcon" />
            </a>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} id="SocialIcon" />
            </a>
            <a href="https://www.youtube.com">
              {" "}
              <FontAwesomeIcon icon={faYoutube} id="SocialIcon" />
            </a>
            <a href="https://www.linkdin.com">
              {" "}
              <FontAwesomeIcon icon={faLinkedin} id="SocialIcon" />{" "}
            </a>
          </div>
        </div>
        <div>
          <h5>contact us</h5>

          <tr>
            <td>
              {" "}
              <FontAwesomeIcon icon={faPhone} />
            </td>
            <td>1234564789</td>
          </tr>
        </div>
        <div className="subscribe">
          <h5>subscription page</h5>
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="@gmail.com" />
          <button>subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
