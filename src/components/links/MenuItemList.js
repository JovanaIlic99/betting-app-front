import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import classes from "./MenuItemList.module.css";

function MenuItemList(props) {
  return (
    <MenuItem key={props} onClick={props.action} sx={props.sx}>
      <div className={classes.hover_underline_animation}>
        <Link to={props.path} key={props.id}>
          <span className={classes.hover_underline_animation}>
            {props.title}
          </span>
        </Link>
      </div>
    </MenuItem>
  );
}

export default MenuItemList;
