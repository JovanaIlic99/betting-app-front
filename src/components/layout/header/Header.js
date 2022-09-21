
import classes from "./Header.module.css";
import LinkList from "../../links/LinkList";
import * as React from "react";
import User from "./user/User";
import MobileLinks from "./menu/MobileLinks";

const basicClientPages = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Contact Us", path: "/contact" },
  { id: 3, title: "Account", path: "/account" }
];


function Header(props) {
  let pages = [];

  if (props.loggedIn) {
    pages = basicClientPages;
  }

  return (
    <header className={[classes.head]}>
      <div className={[classes.container]}>
        <div className={[classes.l_div]}>
        {props.loggedIn &&<MobileLinks links={pages} />}
        </div>
        <div className={[classes.c_div]}>TriumphBet</div>
        <div className={[classes.r_div]}>
          {props.loggedIn && <User  role={props.role} />}
        </div>
      </div>
      <div className={classes.linklist}>
        <LinkList links={pages} />
      </div>
    </header>
  );
}

export default Header;
