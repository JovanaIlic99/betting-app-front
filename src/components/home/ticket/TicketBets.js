import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import Button from "@mui/material/Button";

import TicketContext from "../../../store/ticket-context";
import TicketBet from "./TicketBet";

const box = {
  width: "100%",
};
const emptyBox = {
  alignItems: "center",
  justifyContent: "center",
  height: "30vh",
  display: "flex",
};
const header = {
  backgroundColor: "var(--color-primary-light)",
  display: "flex",
  width: "100%",
  borderBottom: "1px solid white",
};
const teams = {
  width: "50%",
  padding: "0 10px 0 18px",
};
const bet = {
  width: "30%",
  padding: "0 10px 0 12px",
};
const odd = {
  display: "flex",
  width: "20%",
  padding: "0 10px 0 10px",
};
const title = {
  color: "white",
  margin: "auto",
};
const button = {
  width: "100%",
  color: "white",
  backgroundColor: "var(--color-gray)",
  borderRadius: "0",
  ":hover": {
    backgroundColor: "black",
    color: "white",
    border: "1px solid white",
  },
};

function TicektBets() {
  const ticketCxt = useContext(TicketContext);
  let content;
  let str = "Place some bets and win some money";
  if (ticketCxt.ticket === undefined || ticketCxt.ticket.length === 0) {
    content = <Box sx={emptyBox}>{str}</Box>;
  } else {
    content = (
      <div>
        <Box>
          <Button sx={button} onClick={ticketCxt.clearTicket}>
            Delete all bets
          </Button>
        </Box>
        <Box flexDirection={"row"} sx={header}>
          <Box sx={teams}>
            <Typography sx={title}>Fixture</Typography>
          </Box>
          <Box sx={bet}>
            <Typography sx={title}>Bet</Typography>
          </Box>
          <Box sx={odd}>
            <Typography sx={title}>Odd</Typography>
          </Box>
        </Box>
        {ticketCxt.ticket.map((bet) => {
          return (
            <TicketBet
              key={bet.fixture.id}
              home={bet.fixture.home.name}
              away={bet.fixture.away.name}
              bet_group={bet.bet.bet_group_name}
              bet_name={bet.bet.name}
              odd={bet.bet.odd}
            />
          );
        })}
      </div>
    );
  }

  return <>{content}</>;
}

export default TicektBets;
