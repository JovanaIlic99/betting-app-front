import ticketService from "../../service/ticket.service";
import React, { useEffect, useState } from "react";
import authService from "../../service/auth.service";
import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import TicketRow from "./TicketRow";

const box = {
  width: "100%",
  marginTop: "30px",
  border: "1px solid var(--color-gray)",
};
const boxField = {
  margin: "0",
  padding: "5px",
  width: "20%",
  border: "1px solid white",
};
const box_title = {
  width: "100%",
  margin: "auto",
  textAlign: "center",
  fontSize: "1.6rem",
  padding: "20px",
};
const header = {
  height: "50px",
  backgroundColor: "var(--color-primary)",
};

const title = {
  color: "white",
  letterSpacing: "1.3px",
  fontSize: "1.5rem",
  fontWeight: "500",
  textAlign: "center",
  margin: "auto",
};
function TicketTable(props) {
  const [tickets, setTickets] = useState();

  const fetchTickets = (username) => {
    console.log("fetching...")
    ticketService
      .getTicketsByUsername(username)
      .then((response) => {
        setTickets(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchTickets(authService.getToken().sub);
  }, []);

  return (
    <Box sx={box}>
      <Stack direction={"column"}>
        <Box sx={box_title}>ALL TICKETS</Box>
        <Stack direction={"row"} sx={header}>
          <Box sx={boxField}>
            <Typography sx={title}>ID</Typography>
          </Box>
          <Box sx={boxField}>
            <Typography sx={title}>ODDS</Typography>
          </Box>
          <Box sx={boxField}>
            <Typography sx={title}>WAGER</Typography>
          </Box>
          <Box sx={boxField}>
            <Typography sx={title}>PAYOUT</Typography>
          </Box>
          <Box sx={boxField}>
            <Typography sx={title}>STATE</Typography>
          </Box>
        </Stack>
        {tickets !== undefined ? (
          tickets.map((ticket) => {
            return <TicketRow
              id={ticket.id}
              odds={ticket.odd}
              wager={ticket.wager}
              payout={ticket.totalWin}
              state={ticket.state}
            />;
          })
        ) : (
          <></>
        )}
      </Stack>
    </Box>
  );
}

export default TicketTable;
