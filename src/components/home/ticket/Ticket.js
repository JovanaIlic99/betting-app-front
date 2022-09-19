import * as React from "react";
import { Box } from "@mui/material";
import TicketBets from "./TicketBets";
import WagerInfo from "./WagerInfo";

import TicketContext from "../../../store/ticket-context";

const title = {
  color: "white",
  backgroundColor: "var(--color-primary)",
  letterSpacing: "1.3px",
  fontSize:"1.5rem",
  fontWeight: "500",
  textAlign: "center",
  margin:"auto",
  borderBottom: "1px solid white",
  padding: "10px 10px 10px 10px",
};

function Ticket() {

  return (
    <Box sx={{
        width: "100% ",
        borderRadius: "1",
        backgroundColor: "white",
      }}>
        <h2 style={title}>Ticket</h2>
        <TicketBets />
        <WagerInfo />
      </Box>
  );
}

export default Ticket;
