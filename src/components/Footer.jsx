import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-contact">
          <p style={{ fontSize: 15 }}>Bangladesh</p>

          <p>Copyright © 2021 Apple Inc. All rights reserved.</p>

          <div className="links">
            <p>Privacy Policy</p>

            <p>Terms of Use</p>

            <p>Sales and Refunds</p>

            <p>Legal</p>

            <p>Site Map</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
