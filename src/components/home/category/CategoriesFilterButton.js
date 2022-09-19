import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";



const button_text={
    margin: "10px auto 10px 10px",


}

function CategoriesFilterButton(props) {
  const [selectedLeague, setLeague] = React.useState(true);

  function setLeagueHandler() {
    setLeague(!selectedLeague);
  }

  const button = {
    width: "100%",
    fontSize: "1rem",
    fontWeight: "500",
    borderRadius: "0",
    paddingLeft:"10px",
    margin: "0",
    backgroundColor: selectedLeague ? "var(--color-primary-light)" : "white",
    color: selectedLeague ? "white" : "var(--color-primary-light)",
    ":hover": {
      backgroundColor: "var(--color-primary)",
      color: "white",
      border: "1px solid white",
      borderBottom: "1px solid black",
    },
  };

  return (
    <>
      <Button
        key={props.id}
        value={JSON.stringify({id:props.id,
          name:props.name})}
        sx={button}
        variant="text"
        onClick={setLeagueHandler}
      >
       <Typography sx={button_text}> {props.name}</Typography>
      </Button>
    </>
  );
}

export default CategoriesFilterButton;
