import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { Stack } from "@mui/system";
import TicketTable from "../components/account/TicketTable";
import userService from "../service/user.service";
import authService from "../service/auth.service";
import Snackbar from "@mui/material/Snackbar";

const box = {
  margin: "3%",
  backgroundColor: "var(--color-gray-light)",
  border:"1px solid var(--color-gray)"
};
const box_title = {
  width: "100%",
  margin: "auto",
  textAlign: "center",
  fontSize: "1.6rem",
  padding: "20px",
};

const boxField = {
  margin: "15px",
  padding: "5px",
  width: "25%",
};
const button = {
  width: "30%",
  color: "white",
  fontSize: "1.2rem",
  fontWeight: "500",
  color: "white",
  borderRadius: "0",
  margin: "auto",
  backgroundColor: "var(--color-primary-light)",
  ":hover": {
    backgroundColor: "var(--color-primary)",
    color: "white",
    border: "1px solid white",
  },
};
const button_box={
    width:"94%",
    margin:"3%",
    display:"flex",
    justifyContent:"center",
}


function Account(props) {
  const [current_name, setName] = useState("");
  const [current_surname, setSurname] = useState("");
  const [current_username, setUsername] = useState("");
  const [current_email, setEmail] = useState("");
  

  const fetchUser = (username) => {
    userService.getUserInfo(username)
      .then((response) => {
        setName(response.data.name)
        setSurname(response.data.surname)
        setUsername(response.data.username)
        setEmail(response.data.email)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log(authService.getToken().sub)
    var username=authService.getToken().sub;
    fetchUser(username);
  }, []);

  return (
    <Box sx={box}>
      <Stack direction={"column"}>
        <Box sx={box_title}>ACCOUNT INFORMATION</Box>
        <Stack direction={"row"}>
          <Box sx={boxField}>
            <Typography>Name</Typography>
            {
                current_name!=="" ? <TextField
                id="name"
                type="text"
                variant="standard"
                disabled
                defaultValue={current_name}
                sx={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />:<></>
            }
          </Box>
          <Box sx={boxField}>
          <Typography>Surname</Typography>
            {current_surname!=="" ? 
            <TextField
              id="surname"
              disabled
              type="text"
              variant="standard"
              defaultValue={current_surname}
              sx={{ width: "100%" }}
              InputLabelProps={{
                shrink: true,
              }}
            /> :<></>}
          </Box>
          <Box sx={boxField}>
            <Typography>Username</Typography>
            {current_username!=="" ? 
            <TextField
              id="username"
              variant="standard"
              disabled
              type="text"
              defaultValue={current_username}
              sx={{ width: "100%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />:<></>}
          </Box>
          <Box sx={boxField}>
            <Typography>Email</Typography>
            {current_email!=="" ? 
            <TextField
              id="email"
              type="email"
              disabled
              variant="standard"
              defaultValue={current_email}
              sx={{ width: "100%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />:<></>}
          </Box>
          
        </Stack>
      </Stack>
    {props.role === "ROLE_CLIENT" ? <TicketTable />: <></>}
    </Box>
  );
}

export default Account;
