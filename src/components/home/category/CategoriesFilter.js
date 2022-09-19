import { Box } from "@mui/material";
import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import CategoriesFilterButton from "./CategoriesFilterButton";

const all_leagues = [
  { id: 39, name: "Premier League" },
  { id: 2, name: "LaLiga" },
  { id: 3, name: "Seria A" },
  { id: 4, name: "BundesLiga" },
  { id: 5, name: "Ligue 1" },
];

const league_filter = [];

const button = {
  width: "100%",
  color: "white",
  fontSize: "1rem",
  fontWeight: "500",
  borderRadius: "0",
  margin: "0",
  textAlign: "left",
  display: "flex",
  justifyContent: "flex-end",
};

const title = {
  color: "white",
  backgroundColor: "var(--color-primary)",
  letterSpacing: "1.2px",
  fontWeight: "500",
  padding: "10px 10px 10px 20px",
  borderBottom: "1px solid white",
  textAlign: "left",
  alignItems: "left",
};

function CategoriesFilter(props) {
  const handleClick = (e) => {
    if (e.target.value !== undefined){
    var selected_league = JSON.parse(e.target.value);

    console.log(selected_league);
    if (selected_league===undefined || league_filter.length === 0 ||
      !league_filter.some((fLeague) => {
        if (fLeague===undefined || fLeague.id === selected_league.id) {
          return true;
        }
        return false;
      }) 
    ) {
      league_filter.push(selected_league);
      console.log("Added league: " );
      console.log(selected_league);
    } else {
      for (var i = 0; i < league_filter.length; i++) {
        if (league_filter[i].id === selected_league.id) {
          league_filter.splice(i, 1);
          console.log("Removed league: " + selected_league.name);
        }
      }
    }
    props.filter_function(league_filter);
    console.log(league_filter);
    }
  };

  return (
    <div>
      <Box
        sx={{
          width: "100% ",
          height: "100% ",
          borderRadius: "1",
        }}
        key="-1"
      >
        <h2 style={title}>Categories</h2>
        <ButtonGroup onClick={handleClick} orientation="vertical" sx={button} 
        key="-3">
          {all_leagues.map((league) => {
            return (
              <>
                <CategoriesFilterButton
                  key={league.id+2}
                  name={league.name}
                  id={league.id}
                />
              </>
            );
          })}
        </ButtonGroup>
      </Box>
      <Box
        sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        key="-2"
      ></Box>
    </div>
  );
}

export default CategoriesFilter;
