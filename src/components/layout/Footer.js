import React, { useEffect } from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import classes from "./Footer.module.css";
import LinkList from "../links/LinkList";
import authService from "../../service/auth.service";


const basicClientPages = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Contact Us", path: "/contact" },
];

const adminPages = [
  { id: 1, title: "Home", path: "/" },
  { id: 5, title: "View Fixtures", path: "/" },
  { id: 6, title: "View Tikcets", path: "/" },
];

function Footer(props) {
    let pages=basicClientPages;
 

  return (
    <footer>
      <a href="/" className={classes.logo}>
        TriumphBet
      </a>
      <LinkList links={pages} />

      <div className={classes.socials}>
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </div>

      <div className={classes.copyright}>
        <small>&copy; All rights reserved 2022.</small>
      </div>
    </footer>
  );
}

export default Footer;
