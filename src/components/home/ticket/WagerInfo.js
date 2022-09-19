import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useContext } from "react";

import TicketContext from "../../../store/ticket-context";

const box = {
  width: "100%",
  padding: "5px",
  backgroundColor: "var(--color-gray-light)",
  borderTop: "1px solid var(--color-gray)",
};
const info = {
  margin: "5px",
  padding: "10px",
};

const value = {
  width: "50%",
  textAlign: "left",
  padding: "10px",
  margin: "0",
  fontSize: "1.1rem",
  fontWeight: "600",
  letterSpacing: "1.2px",
  verticalAlign: "center",
};
const odd = {
  width: "50%",
  textAlign: "right",
  marginRight: "5%",
  padding: "10px",
  verticalAlign: "center",
  fontSize: "1.1rem",
};
const totalOdds = {
  backgroundColor: "var(--color-gray-light)",
  display: "flex",
  border: "1px solid var(--color-gray)",
};
const wagerInput = {
  textAlign: "right",
};
const button = {
  width: "100%",
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

const title = {
  color: "white",
  letterSpacing: "1.3px",
  fontSize: "1.5rem",
  fontWeight: "500",
  textAlign: "center",
  margin: "auto",
};



function WagerInfo() {
  const ticketCxt = useContext(TicketContext);
  return (
    <Box sx={box}>
      <Box sx={info} flexDirection={"row"}>
        <Box sx={totalOdds} flexDirection={"row"}>
          <div style={value}>Total odds:</div>
          <div style={odd}>
            {(Math.round(ticketCxt.totalOdds * 100) / 100).toFixed(2)}
          </div>
        </Box>

        <Box>
          <Box sx={totalOdds}>
            <div style={value}>Wager:</div>
            <div style={odd}>
              <TextField
                required
                id="standard-size-small"
                defaultValue="20"
                variant="standard"
                color="success"
                type={"number"}
                onChange={(amount) => ticketCxt.setCurrentWager(amount.target.value)}
              />
            </div>
          </Box>

          <Box sx={totalOdds}>
            <div style={value}>Payout:</div>
            <div style={odd}>
              {isNaN(ticketCxt.payout) || isNaN(ticketCxt.wager)  || ticketCxt.payout === 0
                ? "-"
                : (Math.round(ticketCxt.payout * 100) / 100).toFixed(2)}{" "}
            </div>
          </Box>
          <Box>
            <Button sx={button}>
              <Typography sx={title}>Play ticket</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default WagerInfo;
