import { Box } from "@mui/material";
import * as React from "react";
import League from "./League";
import { useContext } from "react";

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

function AllFixtures(props) {

  const ticketCxt = useContext(TicketContext);
  
function addToTicketHandler(bet){
  var added=false;
  ticketCxt.addBetToTicket(bet);
  console.log("Ticket");
  console.log(ticketCxt.ticket);
  console.log("Odds");
  console.log(ticketCxt.totalOdds);
}

    return (
        <Box
        sx={{
          width: "100% ",
          height: "100% ",
          borderRadius: "1",
        }}
      >
        <h2 style={title}>Fixtures</h2>
        {props.leagues.map((leagueFixtures)=>{
            return <League  key = {leagueFixtures.league.id} league_info={leagueFixtures} addBet={addToTicketHandler} />
        })}
      </Box>
    );
  }
  
  export default AllFixtures;