import { Box } from "@mui/material";
import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import CategoriesFilterButton from "./CategoriesFilterButton";




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
const button_filter={
  width:'100%',
  color:"white",
  backgroundColor:"var(--color-gray)",
  borderRadius:"0",
  ":hover": {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
    },
}

function CategoriesFilter(props) {

  const [league_filter, setLeagueFilter] = React.useState([]);


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
      setLeagueFilter((prevleagues)=>{
        return prevleagues.concat(selected_league)
      })
      console.log("Added league: " );
      console.log(selected_league);
    } else {
      for (var i = 0; i < league_filter.length; i++) {
        if (league_filter[i].id === selected_league.id) {
          var fileter = league_filter;
          fileter.splice(i, 1);
          setLeagueFilter(fileter)
          console.log("Removed league: " + selected_league.name);
        }
      }
    }
    }
    
  };

  function filter(){
    console.log("Category filter ");
    console.log(league_filter);
    props.filter_function();
  }
  function lockInFilter(){
    props.setFilter(league_filter)
  }

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
        {/* <ButtonGroup onClick={handleClick} orientation="vertical" sx={button} 
        key="-3"> */}
          {props.all_leagues!==undefined && props.all_leagues.length!==0 ? props.all_leagues.map((league) => {
            return (
              <>
                <CategoriesFilterButton
                  key={league.id}
                  name={league.name}
                  id={league.id}
                  click={handleClick}
                  league_filter={league_filter}
                  setLeagueFilter={setLeagueFilter}
                />
              </>
            );
          }) : <></>}
        {/* </ButtonGroup> */}
      </Box>
      <Box
        sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        key="-2"
      ></Box>
    </div>
  );
}

export default CategoriesFilter;
