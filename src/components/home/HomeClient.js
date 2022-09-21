import classes from "./HomeClient.module.css";

import Stack from "@mui/material/Stack";
import CategoriesFilter from "./category/CategoriesFilter";
import Ticket from "./ticket/Ticket";
import CategoriesAndTicket from "./categoryAndTicket/CategoriesAndTicket";
import { Box } from "@mui/material";
import AllFixtures from "./fixtures/AllFixtures";
import * as React from "react";
import fixtureService from "../../service/fixture.service";
import { useEffect } from "react";

function HomeClient() {
  const [league_filter, setLeagueFilter] = React.useState([]);
  const [all_fixtures, setAllFixtures] = React.useState([]);
  const [filtered_leagues, setFilteredLeagues] = React.useState([]);
  const [all_leagues, setAllLeagues] = React.useState([]);

  const fetchFixtures = () => {
    fixtureService
      .getAllFixtures()
      .then((response) => {
        setAllLeagues([])
        setAllFixtures(response.data);
        setFilteredLeagues(response.data);
        response.data.map((element) => {
          var league = {
            id: element.league.id,
            name: element.league.name,
          };
          addToAllLeagues(league);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchFixtures();
  }, []);

  function addToAllLeagues(league) {
    setAllLeagues((prevLeague) => {
      return prevLeague.concat(league);
    });
  }

  function setLeagueFilterHandler(filter_array) {
    setLeagueFilter(filter_array);
  }

  function setFilteredLeaguesHandler() {
    var filtered = all_fixtures;
    console.log("league_filter inital");
    console.log(league_filter);
    if (league_filter === undefined || league_filter.length === 0) {
      console.log("league_filter is 0");
      console.log(filtered);
      setFilteredLeagues(filtered);
    } else {
      console.log("All_LEAGUES");
      console.log(filtered);
      console.log("FILTERED BY BY");
      console.log(league_filter);
      for (var i = filtered.length-1; 0; i--) {
        for (var j = 0; league_filter.length; j++) {
            if (
              league_filter[j].id === filtered[i].league.id &&
              league_filter[j].name === filtered[i].league.name
            ) {
              console.log("REMOVING");
              console.log(filtered);
              filtered.splice(i, 1);
              break;
            }
          
        }
      }
      setFilteredLeagues(filtered);
    }
  }


  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      spacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ margin: { xs: "5px", sm: "5px", md: "30px" } }}
    >
      <Box
        sx={{
          width: "20% ",
          border: "1px solid var( --color-border-gray-light)",
          display: { xs: "none", sm: "none", md: "block" },
          borderRadius: "2",
        }}
      >
        {all_leagues === undefined || all_leagues.length === 0 ? (
          <></>
        ) : (
          <CategoriesFilter
            filter_function={setFilteredLeaguesHandler}
            setFilter={setLeagueFilterHandler}
            all_leagues={all_leagues}
            key="-100"
          />
        )}
      </Box>
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
        {all_leagues === undefined || all_leagues.length === 0 ? (
          <></>
        ) : (
          <div>
            <CategoriesAndTicket
              filter_function={setFilteredLeaguesHandler}
              all_leagues={all_leagues}
            />
          </div>
        )}
      </Box>

      <Box
        sx={{
          width: "55% ",
          border: "1px solid var( --color-border-gray-light)",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        {filtered_leagues === undefined || filtered_leagues.lenght === 0 ? (
          <></>
        ) : (
          <AllFixtures leagues={filtered_leagues} />
        )}
      </Box>
      <Box sx={{ display: { sm: "block", md: "none" } }}>
        {filtered_leagues === undefined || filtered_leagues.lenght === 0 ? (
          <></>
        ) : (
          <div className={classes.center_div_container_max}>
            <AllFixtures leagues={filtered_leagues} />
          </div>
        )}
      </Box>

      <Box
        sx={{
          width: "30% ",
          border: "1px solid var( --color-border-gray-light)",
          display: { xs: "none", sm: "none", md: "block" },
          backgroundColor: "var(--color-gray-light)",
        }}
      >
        <Ticket />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}></Box>
    </Stack>
  );
}

export default HomeClient;
