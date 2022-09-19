import classes from "./User.module.css";
import * as React from "react";

import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import MenuItemList from "../../../links/MenuItemList";
import authService from "../../../../service/auth.service";

const logout_Link = {
  color: "var(--color-primary)",
  fontSize: "0.9rem",
  fontWeight: "500",
  ":hover": {
    backgroundColor: "#F5F5F5",
    fontWeight: "600",
    letterSpacing: "1.5px",
  },
  "&:before": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "-3px",
    left: "50%",
    transform: "translate(-50%,0%)",
    backgroundColor: "var(--color-primary)",
    transformOrigin: "center",
    visibility: "hidden",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover:before": {
    visibility: "visible",
    width: "80%",
  },
};
const logout_button = {
  backgroundColor: "white",

  shadow: "none",
  borderRadius: "0",
  transition: { duration: "0" },
};
const menuItemBox = {
  borderBottom: "1px solid var(--color-primary)",
};

function User(props) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar src="/broken-image.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        classes={classes.link_ul}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {props.settings.map((setting) => (
          <MenuItemList
            key={setting.id}
            title={setting.title}
            path={setting.path}
            action={handleCloseUserMenu}
            sx={menuItemBox}
          />
        ))}
        <MenuItem>
          <Box sx={logout_button}>
            <Link to="/" key="3{setting.id}" onClick={authService.logout}>
              <Typography sx={logout_Link}>Logout</Typography>
            </Link>
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default User;
