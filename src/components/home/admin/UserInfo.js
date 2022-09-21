import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import userService from "../../../service/user.service";
import Snackbar from "@mui/material/Snackbar";

const button = {
  width: "95%",
  height: "100%",
  color: "white",
  fontSize: "1rem",
  fontWeight: "500",
  borderRadius: "0",
  margin: "0",
  backgroundColor: "var(--color-primary-light)",
  ":hover": {
    backgroundColor: "var(--color-primary)",
    color: "white",
    border: "1px solid white",
  },
};
const column_name = {
  display: { xs: "none", sm: "none", md: "block" },
  padding: "10px 10px 10px 10px",
  width: "15%",
  margin:"0"
};
const column_username = {
  padding: "10px 10px 10px 10px",
  width: { xs: "50%", sm: "50%", md: "20%" },
};
const column_email = {
  padding: "10px 10px 10px 10px",
  display: { xs: "none", sm: "none", md: "block" },
  width: "35%",
};
const column_button = {
  padding: "10px 10px 10px 10px",
  width: { xs: "50%", sm: "50%", md: "15%" },
};
const title = {
  color: "var(--color-primary)",
  margin: "auto",
};

function UserInfo(props) {

  function deleteUser() {
    userService
      .deleteUser(props.one_user.username)
      .then((response) => {
        <Snackbar
          autoHideDuration={3000}
          message={"Deleted user " + props.one_user.username + "!"}
        />;
        props.getAllUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(props.one_user)
  return (
    <Stack direction={"row"}>
          <Box sx={column_name}>
            <Typography sx={title}>{props.one_user.name}</Typography>
          </Box>
          <Box sx={column_name}>
            <Typography sx={title}>{props.one_user.surname}</Typography>
          </Box>
          <Box sx={column_username}>
            <Typography sx={title}>{props.one_user.username}</Typography>{" "}
          </Box>
          <Box sx={column_email}>
            <Typography sx={title}>{props.one_user.email}</Typography>{" "}
          </Box>
          <Box sx={column_button}>
            <Button onClick={deleteUser} sx={button}>
              <Typography sx={{ padding: "0" }}>DELETE USER</Typography>
            </Button>
          </Box>
        </Stack>
  );
}

export default UserInfo;
