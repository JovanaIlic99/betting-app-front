import { Box, Button, Typography } from "@mui/material";
import UserInfo from "./UserInfo";
import authService from "../../../service/auth.service";

const column_name = {
  display: { xs: "none", sm: "none", md: "block" },
  padding: "10px 10px 10px 10px",
  width: "15%",
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
const header = {
  backgroundColor: "var(--color-primary-light)",
  display: "flex",
  width: "100%",
  borderBottom: "1px solid white",
};
const title = {
  color: "white",
  margin: "auto",
};
const user_table = {
  width: "90%",
  margin: "5%",
  border: "1px solid var(--color-primary)",
};

function UserTableContainer(props) {
  return (
    <Box sx={user_table}>
      <Box flexDirection={"row"} sx={header}>
        <Box sx={column_name}>
          <Typography sx={title}>NAME</Typography>
        </Box>
        <Box sx={column_name}>
          <Typography sx={title}>SURNAME</Typography>
        </Box>
        <Box sx={column_username}>
          <Typography sx={title}>USERNAME</Typography>{" "}
        </Box>
        <Box sx={column_email}>
          <Typography sx={title}>EMAIL</Typography>{" "}
        </Box>
        <Box sx={column_button}>
          <Typography sx={title}>DELETE</Typography>{" "}
        </Box>
      </Box>
      {props.all_users!== undefined ? props.all_users.map((user) => {
        if (user.username !== authService.getToken().sub) {
          return <UserInfo key={user.username} one_user={user} getAllUsers={props.getAllUsers}/>; 
        } 
      }) : <></>}
    </Box>
  );
}

export default UserTableContainer;
