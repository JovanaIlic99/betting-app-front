import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Header.module.css";
import authService from "../../../service/auth.service";
import LinkList from "../../links/LinkList";
import * as React from "react";
import Button from "@mui/material/Button";
import User from "./user/User";
import MobileLinks from "./menu/MobileLinks";

const clientSettings = [
  { id: 3, title: "Account", path: "/account" },
];
const basicClientPages = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Contact Us", path: "/contact" },
];
const adminPages = [
  { id: 1, title: "Home", path: "/" },
  { id: 4, title: "View Fixtures", path: "/" },
  { id: 5, title: "View Tikcets", path: "/" },
];

const login_button = {
  width: "30%",
  backgroundColor: "var(--color-primary)",
  fontSize: "0.9rem",
  fontWeight: "500",
  margin: "10px 20px 10px 10px",
  ":hover": {
    backgroundColor: "var(--color-primary-light)",
    fontWeight: "600",
    letterSpacing: "1.5px",
  },
};


function Header(props) {
  const [loggedIn, isLoggedIn] = useState(true);
  const [MobileMenu, setMobileMenu] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  let pages = basicClientPages;
  let settings = [];

  let navigate = useNavigate();
  const routeLogin = () => {
    let path = `/login`;
    navigate(path);
  };

  useEffect(() => {
    const token = authService.getToken();
    if (token) {
      const role = token.authorities[0].authority;
      if (role === "ROLE_CLIENT") {
        pages = basicClientPages;
        settings = clientSettings;
      } else {
        pages = adminPages;
      }
      isLoggedIn(true);
    } else {
      pages = basicClientPages;
      settings = [];
    }
  }, []);

  return (
    <header className={[classes.head]}>
      <div className={[classes.container]}>
        <div className={[classes.l_div]}>
          
          <MobileLinks links={pages}/>
        </div>
        <div className={[classes.c_div]}>TriumphBet</div>
        <div className={[classes.r_div]}>
          {loggedIn && (
            <User settings={settings}/>
          )}
          {!loggedIn && (
            <Button
              variant="contained"
              onClick={routeLogin}
              sx={login_button}
            >
              Login
            </Button>
          )}
        </div>
      </div>
      <div className={classes.linklist}>
        <LinkList links={pages} />
      </div>
    </header>
  );
}

export default Header;
