import userService from "../../../service/user.service";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import UserTableContainer from "./UserTableContainer";

const box = {
  margin: "3%",
  backgroundColor: "var(--color-gray-light)",
  border: "1px solid var(--color-gray)",
};

const box_title = {
  width: "100%",
  margin: "auto",
  textAlign: "center",
  fontSize: "1.6rem",
  padding: "20px",
};


function UserTable() {
  const [users, setUsers] = useState();

  const fetchUsers = () => {
    userService
      .getAllUsers()
      .then((response) => {
        setUsers(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Box sx={box}>
      <Stack direction={"column"}>
        <Box sx={box_title}>ALL USERS</Box>
        <UserTableContainer all_users={users} getAllUsers={fetchUsers}/>
      </Stack>
    </Box>
  );
}
export default UserTable;
