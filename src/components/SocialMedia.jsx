import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://twitter.com/RandyWritesCode"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/randywritescode/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
