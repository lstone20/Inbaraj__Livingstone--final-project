import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './SocialMedia.css';

export default function SocialFlow() {
  return (
    <div>
      <p className="social-container">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.facebook.com/livingstone.inbaraj.7" target="_blank" rel="noopener noreferrer" className="facebook social">
            &emsp;&emsp;&emsp;&emsp; <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="http://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="instagram social">
            &emsp;&emsp;&emsp;&emsp; <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter social">
            &emsp;&emsp;&emsp;&emsp; <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="http://www.linkedin.com/in/livingstone-inbaraj-70b54598" target="_blank" rel="noopener noreferrer" className="linkedin social">
            &emsp;&emsp;&emsp;&emsp; <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </p>
    </div>
  );
}