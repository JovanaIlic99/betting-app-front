import { Box } from "@mui/system";
import * as React from "react";
import BetButton from "./BetButton";

const box = {
  width: "99%",
  margin: "0 0.5% 0 0.5%",
  padding: "0.5%",
  backgroundColor: "var(--color-gray-light)",
};

function Bets(props) {
  return (
    <Box sx={box}>
      {props.odds.map((odd) => {
        return (
          <BetButton
            value={{
              id: odd.id,
              bet_group_name: props.group.name,
              name: odd.name,
              odd: odd.odd,
            }}
            name={odd.odd}
            bet={props.bet}
            key={odd.id}
            handleClick={props.handleClick} 
          />
        );
      })}
    </Box>
  );
}

export default Bets;
