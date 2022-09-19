import { Link } from "react-router-dom";
import classes from "./LinkList.module.css";

const link = {
};

function LinkList(props) {
  return (
    <ul className={classes.links}>
      {props.links.map((link) => {
        return (
          <li key={link.id}>
            <Link to={link.path} key={link.id} sx={""}>
              <span className={classes.hover_underline_animation }>{link.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default LinkList;
