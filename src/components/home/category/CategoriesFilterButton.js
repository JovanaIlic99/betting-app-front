import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";



const button_text={
    margin: "10px auto 10px 10px",


}

function CategoriesFilterButton(props) {

  
  const handleClick = (e) => {
    if (e.target.value !== undefined){
    var selected_league = JSON.parse(e.target.value);

    console.log(selected_league);
    if (selected_league===undefined || props.league_filter.length === 0 ||
      !props.league_filter.some((fLeague) => {
        if (fLeague===undefined || fLeague.id === selected_league.id) {
          return true;
        }
        return false;
      }) 
    ) {
      props.setLeagueFilter((prevleagues)=>{
        return prevleagues.concat(selected_league)
      })
      console.log("Added league: " );
      console.log(selected_league);
    } else {
      for (var i = 0; i < props.league_filter.length; i++) {
        if (props.league_filter[i].id === selected_league.id) {
          var fileter = props.league_filter;
          fileter.splice(i, 1);
          props.setLeagueFilter(fileter)
          console.log("Removed league: " + selected_league.name);
        }
      }
    }
    console.log(props.league_filter);
    }
  };

  const button = {
    width: "100%",
    fontSize: "1rem",
    fontWeight: "500",
    borderRadius: "0",
    paddingLeft:"10px",
    margin: "0",
    backgroundColor:  "var(--color-primary-light)",
    color: "white" ,
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
        onClick={handleClick}
      >
       <Typography sx={button_text}> {props.name}</Typography>
      </Button>
    </>
  );
}

export default CategoriesFilterButton;
