import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import UserTable from "./admin/UserTable";
import fixtureService from "../../service/fixture.service";
import ticketService from "../../service/ticket.service";

const box = {
  width: "90%",
  margin: "auto",
};
const button = {
  width: "100%",
  height: "50px",
  color: "white",
  fontSize: "1rem",
  fontWeight: "500",
  borderRadius: "0",
  margin: "",
  backgroundColor: "var(--color-primary-light)",
  ":hover": {
    backgroundColor: "var(--color-primary)",
    color: "white",
    border: "1px solid white",
  },
};
const column_button = {
  padding: "10px 10px 10px 10px",
  width: { xs: "100%", sm: "100%", md: "33%" },
};
function updateBets() {
  ticketService
    .updateBets()
    .then(()=>{
      console.log("success")
    })
    .catch((error) => {
      console.log(error);
    });
}
function updatefixtures() {
  fixtureService
    .getNewFixtures()
    .then(() => {
      fixtureService
        .getNewOdds()
        .then(()=>{
          console.log("success")
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
}
function updateTickets() {
  ticketService
    .updateTickts()
    .then(()=>{
      console.log("success")
    })
    .catch((error) => {
      console.log(error);
    });
}

function HomeAdmin() {
  return (
    <div className="container_margin">
      <Box sx={box}>
        <Stack direction={{ xs: "column", sm: "column", md: "row" }}>
          <Box sx={column_button}>
            <Button onClick={updatefixtures} sx={button}>
              <Typography sx={{ padding: "0" }}>UPDATE FIXTURES</Typography>
            </Button>
          </Box>
          <Box sx={column_button}>
            <Button onClick={updateBets} sx={button}>
              <Typography sx={{ padding: "0" }}>UPDATE BETS</Typography>
            </Button>
          </Box>
          <Box sx={column_button}>
            <Button onClick={updateTickets} sx={button}>
              <Typography sx={{ padding: "0" }}>UPDATE TICKET</Typography>
            </Button>
          </Box>
        </Stack>
      </Box>

      <UserTable />
    </div>
  );
}

export default HomeAdmin;
