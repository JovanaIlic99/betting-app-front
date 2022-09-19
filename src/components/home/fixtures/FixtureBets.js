import { Box } from "@mui/system";
import BetGroup from "./BetGroup";
import * as React from "react";

function FixtureBets(props) {
  
  return (
    <Box>
        {props.bets.map((bet_group) => {
          return <BetGroup  key = {bet_group.id} group={bet_group}  bet={props.bet}  setBet={props.setBet} 
          handleClick={props.handleClick}/>;
        })}
    </Box>
  );
}

export default FixtureBets;
