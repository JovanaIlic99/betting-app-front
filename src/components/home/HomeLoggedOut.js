import classes from "./HomeLoggedOut.module.css";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";


function HomeClient() {
  return (
    <div className="container_margin">
      <Stack direction={ "column" } spacing={{ xs: 1, sm: 2, md: 3 }}>
        <div className={[classes.LoginToPlay]}>
          <Link to="/login" >
            <h4 className={classes.hover_underline_animation}>
              You are not logged in.. <b>Login</b> to play ticket!
            </h4>
          </Link>
        </div>
    <div >
        UTAKMICE

    </div>
      </Stack>
    </div>
  );
}

export default HomeClient;
