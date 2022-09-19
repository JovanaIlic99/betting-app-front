import Button from "@mui/material/Button";
import * as React from "react";
import { Typography } from "@mui/material";

const value = {
    margin: "1px auto 1px 10%",
    fontSize: "0.8rem",
    fontWeight: "600",
    letterSpacing: "1.2px",
  };
  const odd = {
    marginLeft: "10px",
    fontSize: "0.8rem",
  };

function BetButton(props){

    const button = {
        width: { xs: "99%", sm: "48.5%", md:   "32%" },
        fontSize: "0.9rem",
        fontWeight: "600",
        borderRadius: "0",
        margin:"0.5% 0.667% 0.5% 0.667%",
        backgroundColor: (props.bet.bet !== undefined && (props.bet.bet.id === props.value.id && props.bet.bet.name === props.value.name)) ? "var(--color-primary)" : "(--color-gray-light)",
        color: (props.bet.bet !== undefined && (props.bet.bet.id === props.value.id && props.bet.bet.name === props.value.name)) ? "white" : "var(--color-primary)",
        border: "1px solid var(--color-primary-light)",
        ":hover": {
          backgroundColor: "var(--color-primary)",
          color: "white",
          border: "1px solid white",
          letterSpacing: "1.8px",
        },
      };
return(
    <>
    <Button
            sx={button}
            value={JSON.stringify({id: props.value.id, bet_group_name: props.value.bet_group_name, name: props.value.name, odd: props.value.odd,})}
            name={props.name}
            onClick={props.handleClick}
          >
            <Typography sx={value}>{props.value.name}</Typography>
            <Typography sx={odd}>{props.value.odd}</Typography>
          </Button>
    </>
);
}

export default BetButton;