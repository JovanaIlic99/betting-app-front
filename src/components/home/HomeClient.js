import classes from "./HomeClient.module.css";

import Stack from "@mui/material/Stack";
import CategoriesFilter from "./category/CategoriesFilter";
import Ticket from "./ticket/Ticket";
import CategoriesAndTicket from "./categoryAndTicket/CategoriesAndTicket";
import { Box } from "@mui/material";
import AllFixtures from "./fixtures/AllFixtures";
import * as React from "react";

function HomeClient() {
  const [league_filter, setLeagueFilter] = React.useState([]);
  const [filtered_leagues, setFilteredLeagues] = React.useState(all_fixtures);

  function setLeagueFilterHandler(filter_array) {
    setLeagueFilter(filter_array);
    setFilteredLeaguesHandler();
  }

  function setFilteredLeaguesHandler() {
    const filtered = all_fixtures;
    console.log("FILTERED LEAGUES BEFORE FILTER");
    console.log(filtered);
    if (league_filter === undefined || league_filter.length === 0) {
      setFilteredLeagues(filtered);
      console.log("FILTERED LEAGUES BEFORE FILTER");
      console.log(filtered);
    } else {
      for (var i = 0; filtered.length; i++) {
        for (var j = 0; league_filter.length; j++) {
          if (league_filter[j] !== undefined) {
            if (
              league_filter[j].id === filtered[i].league.id &&
              league_filter[j].name === filtered[i].league.name
            ) {
              filtered.splice(i, 1);
              break;
            }
          }
        }
      }
      setFilteredLeagues(filtered);
    }
    console.log("FILTERED LEAGUES");
    console.log(filtered);
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
        <CategoriesFilter filter_function={setLeagueFilterHandler} key="-100" />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
        <div>
          <CategoriesAndTicket filter_function={setLeagueFilterHandler} />
        </div>
      </Box>

      <Box
        sx={{
          width: "55% ",
          border: "1px solid var( --color-border-gray-light)",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <AllFixtures leagues={filtered_leagues} />
      </Box>
      <Box sx={{ display: { sm: "block", md: "none" } }}>
        <div className={classes.center_div_container_max}>
          <AllFixtures leagues={filtered_leagues} />
        </div>
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

const all_fixtures = [
  {
    league: {
      id: 39,
      name: "Premier League",
    },
    fixtures: [
      {
        fixture: {
          id: 592141,
          date: "2021-01-12T20:15:00+00:00",
          home: {
            id: 44,
            name: "Burnley",
          },
          away: {
            id: 33,
            name: "Manchester United",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "1.44",
              },
              {
                value: "Draw",
                odd: "3.75",
              },
              {
                value: "Away",
                odd: "6.50",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.14",
              },
              {
                value: "Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 2.5",
                odd: "2.15",
              },
              {
                value: "Under 2.5",
                odd: "1.68",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "17.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "13.00",
              },
              {
                value: "Draw/Draw",
                odd: "5.50",
              },
              {
                value: "Home/Home",
                odd: "2.30",
              },
              {
                value: "Draw/Home",
                odd: "4.00",
              },
              {
                value: "Away/Home",
                odd: "23.00",
              },
              {
                value: "Away/Draw",
                odd: "21.00",
              },
              {
                value: "Away/Away",
                odd: "12.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "6.00",
              },
              {
                value: "2:1",
                odd: "11.00",
              },
              {
                value: "3:0",
                odd: "9.00",
              },
              {
                value: "3:1",
                odd: "17.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "17.00",
              },
              {
                value: "4:1",
                odd: "29.00",
              },
              {
                value: "4:2",
                odd: "67.00",
              },
              {
                value: "5:0",
                odd: "29.00",
              },
              {
                value: "5:1",
                odd: "51.00",
              },
              {
                value: "6:0",
                odd: "51.00",
              },
              {
                value: "0:0",
                odd: "7.50",
              },
              {
                value: "1:1",
                odd: "8.50",
              },
              {
                value: "2:2",
                odd: "26.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "15.00",
              },
              {
                value: "0:2",
                odd: "34.00",
              },
              {
                value: "0:3",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "23.00",
              },
              {
                value: "1:3",
                odd: "51.00",
              },
              {
                value: "2:3",
                odd: "67.00",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "3.40",
              },
              {
                value: "2:0",
                odd: "7.00",
              },
              {
                value: "2:1",
                odd: "29.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "51.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "0:0",
                odd: "2.50",
              },
              {
                value: "1:1",
                odd: "13.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "8.50",
              },
              {
                value: "0:2",
                odd: "34.00",
              },
              {
                value: "1:2",
                odd: "51.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.08",
              },
              {
                value: "Home/Away",
                odd: "1.22",
              },
              {
                value: "Draw/Away",
                odd: "2.50",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.00",
              },
              {
                value: "Draw",
                odd: "2.10",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.33",
              },
              {
                value: "Draw",
                odd: "7.50",
              },
              {
                value: "Away",
                odd: "4.33",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.10",
              },
              {
                value: "Home/Away",
                odd: "1.67",
              },
              {
                value: "Draw/Away",
                odd: "1.73",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.20",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.00",
              },
              {
                value: "Even",
                odd: "1.73",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592142,
          date: "2020-09-12T14:00:00+00:00",
          home: {
            id: 52,
            name: "Crystal Palace",
          },
          away: {
            id: 41,
            name: "Southampton",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "1.44",
              },
              {
                value: "Draw",
                odd: "3.75",
              },
              {
                value: "Away",
                odd: "6.50",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.14",
              },
              {
                value: "Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 2.5",
                odd: "2.15",
              },
              {
                value: "Under 2.5",
                odd: "1.68",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "17.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "13.00",
              },
              {
                value: "Draw/Draw",
                odd: "5.50",
              },
              {
                value: "Home/Home",
                odd: "2.30",
              },
              {
                value: "Draw/Home",
                odd: "4.00",
              },
              {
                value: "Away/Home",
                odd: "23.00",
              },
              {
                value: "Away/Draw",
                odd: "21.00",
              },
              {
                value: "Away/Away",
                odd: "12.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "6.00",
              },
              {
                value: "2:1",
                odd: "11.00",
              },
              {
                value: "3:0",
                odd: "9.00",
              },
              {
                value: "3:1",
                odd: "17.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "17.00",
              },
              {
                value: "4:1",
                odd: "29.00",
              },
              {
                value: "4:2",
                odd: "67.00",
              },
              {
                value: "5:0",
                odd: "29.00",
              },
              {
                value: "5:1",
                odd: "51.00",
              },
              {
                value: "6:0",
                odd: "51.00",
              },
              {
                value: "0:0",
                odd: "7.50",
              },
              {
                value: "1:1",
                odd: "8.50",
              },
              {
                value: "2:2",
                odd: "26.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "15.00",
              },
              {
                value: "0:2",
                odd: "34.00",
              },
              {
                value: "0:3",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "23.00",
              },
              {
                value: "1:3",
                odd: "51.00",
              },
              {
                value: "2:3",
                odd: "67.00",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "3.40",
              },
              {
                value: "2:0",
                odd: "7.00",
              },
              {
                value: "2:1",
                odd: "29.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "51.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "0:0",
                odd: "2.50",
              },
              {
                value: "1:1",
                odd: "13.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "8.50",
              },
              {
                value: "0:2",
                odd: "34.00",
              },
              {
                value: "1:2",
                odd: "51.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.08",
              },
              {
                value: "Home/Away",
                odd: "1.22",
              },
              {
                value: "Draw/Away",
                odd: "2.50",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.00",
              },
              {
                value: "Draw",
                odd: "2.10",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.33",
              },
              {
                value: "Draw",
                odd: "7.50",
              },
              {
                value: "Away",
                odd: "4.33",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.10",
              },
              {
                value: "Home/Away",
                odd: "1.67",
              },
              {
                value: "Draw/Away",
                odd: "1.73",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.20",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.00",
              },
              {
                value: "Even",
                odd: "1.73",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592143,
          date: "2020-09-12T11:30:00+00:00",
          home: {
            id: 36,
            name: "Fulham",
          },
          away: {
            id: 42,
            name: "Arsenal",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "2.15",
              },
              {
                value: "Draw",
                odd: "2.90",
              },
              {
                value: "Away",
                odd: "3.25",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.53",
              },
              {
                value: "Away",
                odd: "2.38",
              },
            ],
          },
          {
            id: 3,
            name: "Second Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.63",
              },
              {
                value: "Draw",
                odd: "2.20",
              },
              {
                value: "Away",
                odd: "3.60",
              },
            ],
          },
          {
            id: 4,
            name: "Asian Handicap",
            odds: [
              {
                value: "Home +0",
                odd: "1.88",
              },
              {
                value: "Away +0",
                odd: "1.93",
              },
              {
                value: "Home -0.25",
                odd: "1.90",
              },
              {
                value: "Away -0.25",
                odd: "1.90",
              },
              {
                value: "Home +0.25",
                odd: "1.40",
              },
              {
                value: "Away +0.25",
                odd: "2.85",
              },
              {
                value: "Home -0.5",
                odd: "2.20",
              },
              {
                value: "Away -0.5",
                odd: "1.65",
              },
              {
                value: "Home +0.5",
                odd: "1.33",
              },
              {
                value: "Away +0.5",
                odd: "3.30",
              },
              {
                value: "Home -0.75",
                odd: "2.60",
              },
              {
                value: "Away -0.75",
                odd: "1.48",
              },
              {
                value: "Home +0.75",
                odd: "1.22",
              },
              {
                value: "Away +0.75",
                odd: "4.15",
              },
              {
                value: "Home -1",
                odd: "3.45",
              },
              {
                value: "Away -1",
                odd: "1.30",
              },
              {
                value: "Home +1",
                odd: "1.11",
              },
              {
                value: "Away +1",
                odd: "6.60",
              },
              {
                value: "Home -1.5",
                odd: "4.40",
              },
              {
                value: "Away -1.5",
                odd: "1.20",
              },
              {
                value: "Home +1.5",
                odd: "1.13",
              },
              {
                value: "Away +1.5",
                odd: "5.90",
              },
              {
                value: "Home -1.25",
                odd: "3.90",
              },
              {
                value: "Away -1.25",
                odd: "1.24",
              },
              {
                value: "Home -1.75",
                odd: "5.90",
              },
              {
                value: "Away -1.75",
                odd: "1.13",
              },
              {
                value: "Home +1.25",
                odd: "1.10",
              },
              {
                value: "Away +1.25",
                odd: "7.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.00",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.62",
              },
              {
                value: "Under 1.5",
                odd: "2.20",
              },
              {
                value: "Over 4.5",
                odd: "9.00",
              },
              {
                value: "Under 4.5",
                odd: "1.04",
              },
              {
                value: "Over 2.5",
                odd: "2.88",
              },
              {
                value: "Under 2.5",
                odd: "1.40",
              },
              {
                value: "Over 0.5",
                odd: "1.13",
              },
              {
                value: "Under 0.5",
                odd: "5.50",
              },
              {
                value: "Over 5.5",
                odd: "15.00",
              },
              {
                value: "Under 5.5",
                odd: "1.01",
              },
            ],
          },
          {
            id: 6,
            name: "Goals Over/Under First Half",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "13.00",
              },
              {
                value: "Under 2.5",
                odd: "1.04",
              },
              {
                value: "Over 0.5",
                odd: "1.67",
              },
              {
                value: "Under 0.5",
                odd: "2.10",
              },
            ],
          },
          {
            id: 26,
            name: "Goals Over/Under - Second Half",
            odds: [
              {
                value: "Over 3.5",
                odd: "19.00",
              },
              {
                value: "Under 3.5",
                odd: "1.02",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "7.00",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
              {
                value: "Over 0.5",
                odd: "1.40",
              },
              {
                value: "Under 0.5",
                odd: "2.75",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "19.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "7.00",
              },
              {
                value: "Draw/Draw",
                odd: "4.00",
              },
              {
                value: "Home/Home",
                odd: "4.33",
              },
              {
                value: "Draw/Home",
                odd: "5.00",
              },
              {
                value: "Away/Home",
                odd: "26.00",
              },
              {
                value: "Away/Draw",
                odd: "15.00",
              },
              {
                value: "Away/Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 8,
            name: "Both Teams Score",
            odds: [
              {
                value: "Yes",
                odd: "2.50",
              },
              {
                value: "No",
                odd: "1.50",
              },
            ],
          },
          {
            id: 9,
            name: "Handicap Result",
            odds: [
              {
                value: "Home -1",
                odd: "4.33",
              },
              {
                value: "Away -1",
                odd: "1.62",
              },
              {
                value: "Draw -1",
                odd: "3.75",
              },
              {
                value: "Home +1",
                odd: "1.30",
              },
              {
                value: "Away +1",
                odd: "7.00",
              },
              {
                value: "Draw +1",
                odd: "4.75",
              },
              {
                value: "Home +2",
                odd: "1.07",
              },
              {
                value: "Draw +2",
                odd: "11.00",
              },
              {
                value: "Away +2",
                odd: "19.00",
              },
              {
                value: "Home -2",
                odd: "9.00",
              },
              {
                value: "Draw -2",
                odd: "6.50",
              },
              {
                value: "Away -2",
                odd: "1.18",
              },
              {
                value: "Home -3",
                odd: "23.00",
              },
              {
                value: "Draw -3",
                odd: "15.00",
              },
              {
                value: "Away -3",
                odd: "1.05",
              },
              {
                value: "Home +3",
                odd: "1.03",
              },
              {
                value: "Draw +3",
                odd: "19.00",
              },
              {
                value: "Away +3",
                odd: "29.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "9.00",
              },
              {
                value: "2:1",
                odd: "12.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "26.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "4:1",
                odd: "51.00",
              },
              {
                value: "4:2",
                odd: "81.00",
              },
              {
                value: "5:0",
                odd: "67.00",
              },
              {
                value: "5:1",
                odd: "81.00",
              },
              {
                value: "6:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "5.50",
              },
              {
                value: "1:1",
                odd: "7.00",
              },
              {
                value: "2:2",
                odd: "23.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "7.50",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "34.00",
              },
              {
                value: "0:4",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "15.00",
              },
              {
                value: "1:3",
                odd: "34.00",
              },
              {
                value: "1:4",
                odd: "67.00",
              },
              {
                value: "2:3",
                odd: "51.00",
              },
            ],
          },
          {
            id: 11,
            name: "Highest Scoring Half",
            odds: [
              {
                value: "Draw",
                odd: "3.00",
              },
              {
                value: "1st Half",
                odd: "3.25",
              },
              {
                value: "2nd Half",
                odd: "2.20",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "4.75",
              },
              {
                value: "2:0",
                odd: "15.00",
              },
              {
                value: "2:1",
                odd: "41.00",
              },
              {
                value: "3:0",
                odd: "41.00",
              },
              {
                value: "3:1",
                odd: "81.00",
              },
              {
                value: "4:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "2.10",
              },
              {
                value: "1:1",
                odd: "12.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "4.75",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "41.00",
              },
              {
                value: "1:2",
                odd: "41.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.30",
              },
              {
                value: "Home/Away",
                odd: "1.36",
              },
              {
                value: "Draw/Away",
                odd: "1.62",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "3.50",
              },
              {
                value: "Draw",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "3.50",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Draw",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "2.63",
              },
            ],
          },
          {
            id: 15,
            name: "Team To Score Last",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Away",
                odd: "2.63",
              },
              {
                value: "No goal",
                odd: "5.50",
              },
            ],
          },
          {
            id: 32,
            name: "Win Both Halves",
            odds: [
              {
                value: "Home",
                odd: "10.00",
              },
              {
                value: "Away",
                odd: "13.00",
              },
            ],
          },
          {
            id: 16,
            name: "Total - Home",
            odds: [
              {
                value: "Over 3.5",
                odd: "10.50",
              },
              {
                value: "Under 3.5",
                odd: "1.03",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "6.50",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
            ],
          },
          {
            id: 17,
            name: "Total - Away",
            odds: [
              {
                value: "Over 3.5",
                odd: "15.00",
              },
              {
                value: "Under 3.5",
                odd: "1.01",
              },
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "8.50",
              },
              {
                value: "Under 2.5",
                odd: "1.05",
              },
            ],
          },
          {
            id: 18,
            name: "Handicap Result - First Half",
            odds: [
              {
                value: "Home -1",
                odd: "11.00",
              },
              {
                value: "Away -1",
                odd: "1.29",
              },
              {
                value: "Draw -1",
                odd: "4.33",
              },
              {
                value: "Home +1",
                odd: "1.29",
              },
              {
                value: "Away +1",
                odd: "12.00",
              },
              {
                value: "Draw +1",
                odd: "4.50",
              },
              {
                value: "Home -2",
                odd: "34.00",
              },
              {
                value: "Draw -2",
                odd: "15.00",
              },
              {
                value: "Away -2",
                odd: "1.04",
              },
            ],
          },
          {
            id: 19,
            name: "Asian Handicap First Half",
            odds: [
              {
                value: "Home +0",
                odd: "1.58",
              },
              {
                value: "Away +0",
                odd: "2.35",
              },
              {
                value: "Home -0.25",
                odd: "2.68",
              },
              {
                value: "Away -0.25",
                odd: "1.45",
              },
              {
                value: "Home +0.25",
                odd: "1.43",
              },
              {
                value: "Away +0.25",
                odd: "2.75",
              },
              {
                value: "Home -0.5",
                odd: "3.55",
              },
              {
                value: "Away -0.5",
                odd: "1.28",
              },
              {
                value: "Home +0.5",
                odd: "1.28",
              },
              {
                value: "Away +0.5",
                odd: "3.55",
              },
              {
                value: "Home -0.75",
                odd: "5.00",
              },
              {
                value: "Away -0.75",
                odd: "1.17",
              },
              {
                value: "Home +0.75",
                odd: "1.16",
              },
              {
                value: "Away +0.75",
                odd: "5.25",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.29",
              },
              {
                value: "Home/Away",
                odd: "1.83",
              },
              {
                value: "Draw/Away",
                odd: "1.29",
              },
            ],
          },
          {
            id: 34,
            name: "Both Teams Score - First Half",
            odds: [
              {
                value: "Yes",
                odd: "7.50",
              },
              {
                value: "No",
                odd: "1.07",
              },
            ],
          },
          {
            id: 35,
            name: "Both Teams To Score - Second Half",
            odds: [
              {
                value: "Yes",
                odd: "5.00",
              },
              {
                value: "No",
                odd: "1.14",
              },
            ],
          },
          {
            id: 36,
            name: "Win To Nil",
            odds: [
              {
                value: "Home",
                odd: "3.00",
              },
              {
                value: "Away",
                odd: "4.75",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.38",
              },
              {
                value: "Even",
                odd: "1.57",
              },
            ],
          },
          {
            id: 39,
            name: "To Win Either Half",
            odds: [
              {
                value: "Home",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "2.10",
              },
            ],
          },
          {
            id: 40,
            name: "Home Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "4.50",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.63",
              },
              {
                value: "more 3",
                odd: "6.50",
              },
            ],
          },
          {
            id: 41,
            name: "Away Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "6.00",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.00",
              },
              {
                value: "more 3",
                odd: "8.50",
              },
            ],
          },
          {
            id: 24,
            name: "Results/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "7.00",
              },
              {
                value: "Draw/Yes",
                odd: "5.50",
              },
              {
                value: "Away/Yes",
                odd: "10.00",
              },
              {
                value: "Home/No",
                odd: "3.00",
              },
              {
                value: "Draw/No",
                odd: "5.50",
              },
              {
                value: "Away/No",
                odd: "4.75",
              },
            ],
          },
          {
            id: 25,
            name: "Result/Total Goals",
            odds: [
              {
                value: "Home/Over 2.5",
                odd: "4.75",
              },
              {
                value: "Away/Over 2.5",
                odd: "7.50",
              },
              {
                value: "Home/Under 2.5",
                odd: "3.75",
              },
              {
                value: "Away/Under 2.5",
                odd: "5.50",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.10",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 48,
            name: "To Score In Both Halves By Teams",
            odds: [
              {
                value: "Home",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 50,
            name: "Goal Line",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.75",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.63",
              },
              {
                value: "Under 1.5",
                odd: "2.25",
              },
              {
                value: "Over 2.5",
                odd: "2.75",
              },
              {
                value: "Under 2.5",
                odd: "1.43",
              },
              {
                value: "Over 2",
                odd: "2.10",
              },
              {
                value: "Under 2",
                odd: "1.70",
              },
              {
                value: "Over 3",
                odd: "4.50",
              },
              {
                value: "Under 3",
                odd: "1.19",
              },
              {
                value: "Over 2.25",
                odd: "2.43",
              },
              {
                value: "Under 2.25",
                odd: "1.53",
              },
              {
                value: "Over 3.25",
                odd: "5.25",
              },
              {
                value: "Under 3.25",
                odd: "1.16",
              },
              {
                value: "Over 2.75",
                odd: "3.45",
              },
              {
                value: "Under 2.75",
                odd: "1.30",
              },
              {
                value: "Over 1.25",
                odd: "1.43",
              },
              {
                value: "Under 1.25",
                odd: "2.75",
              },
              {
                value: "Over 1.75",
                odd: "1.80",
              },
              {
                value: "Under 1.75",
                odd: "2.00",
              },
              {
                value: "Over 1",
                odd: "1.22",
              },
              {
                value: "Under 1",
                odd: "4.15",
              },
              {
                value: "Over 0.75",
                odd: "1.18",
              },
              {
                value: "Under 0.75",
                odd: "4.80",
              },
            ],
          },
          {
            id: 72,
            name: "Goal Line (1st Half)",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.23",
              },
              {
                value: "Over 1.25",
                odd: "3.45",
              },
              {
                value: "Under 1.25",
                odd: "1.30",
              },
              {
                value: "Over 1.75",
                odd: "5.75",
              },
              {
                value: "Under 1.75",
                odd: "1.14",
              },
              {
                value: "Over 1",
                odd: "2.75",
              },
              {
                value: "Under 1",
                odd: "1.43",
              },
              {
                value: "Over 0.75",
                odd: "1.98",
              },
              {
                value: "Under 0.75",
                odd: "1.83",
              },
            ],
          },
          {
            id: 52,
            name: "Halftime Result/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "34.00",
              },
              {
                value: "Draw/Yes",
                odd: "12.00",
              },
              {
                value: "Away/Yes",
                odd: "34.00",
              },
              {
                value: "Home/No",
                odd: "3.75",
              },
              {
                value: "Draw/No",
                odd: "2.10",
              },
              {
                value: "Away/No",
                odd: "3.75",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592144,
          date: "2020-09-12T16:30:00+00:00",
          home: {
            id: 40,
            name: "Liverpool",
          },
          away: {
            id: 63,
            name: "Leeds",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "2.15",
              },
              {
                value: "Draw",
                odd: "2.90",
              },
              {
                value: "Away",
                odd: "3.25",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.53",
              },
              {
                value: "Away",
                odd: "2.38",
              },
            ],
          },
          {
            id: 3,
            name: "Second Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.63",
              },
              {
                value: "Draw",
                odd: "2.20",
              },
              {
                value: "Away",
                odd: "3.60",
              },
            ],
          },
          {
            id: 4,
            name: "Asian Handicap",
            odds: [
              {
                value: "Home +0",
                odd: "1.88",
              },
              {
                value: "Away +0",
                odd: "1.93",
              },
              {
                value: "Home -0.25",
                odd: "1.90",
              },
              {
                value: "Away -0.25",
                odd: "1.90",
              },
              {
                value: "Home +0.25",
                odd: "1.40",
              },
              {
                value: "Away +0.25",
                odd: "2.85",
              },
              {
                value: "Home -0.5",
                odd: "2.20",
              },
              {
                value: "Away -0.5",
                odd: "1.65",
              },
              {
                value: "Home +0.5",
                odd: "1.33",
              },
              {
                value: "Away +0.5",
                odd: "3.30",
              },
              {
                value: "Home -0.75",
                odd: "2.60",
              },
              {
                value: "Away -0.75",
                odd: "1.48",
              },
              {
                value: "Home +0.75",
                odd: "1.22",
              },
              {
                value: "Away +0.75",
                odd: "4.15",
              },
              {
                value: "Home -1",
                odd: "3.45",
              },
              {
                value: "Away -1",
                odd: "1.30",
              },
              {
                value: "Home +1",
                odd: "1.11",
              },
              {
                value: "Away +1",
                odd: "6.60",
              },
              {
                value: "Home -1.5",
                odd: "4.40",
              },
              {
                value: "Away -1.5",
                odd: "1.20",
              },
              {
                value: "Home +1.5",
                odd: "1.13",
              },
              {
                value: "Away +1.5",
                odd: "5.90",
              },
              {
                value: "Home -1.25",
                odd: "3.90",
              },
              {
                value: "Away -1.25",
                odd: "1.24",
              },
              {
                value: "Home -1.75",
                odd: "5.90",
              },
              {
                value: "Away -1.75",
                odd: "1.13",
              },
              {
                value: "Home +1.25",
                odd: "1.10",
              },
              {
                value: "Away +1.25",
                odd: "7.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.00",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.62",
              },
              {
                value: "Under 1.5",
                odd: "2.20",
              },
              {
                value: "Over 4.5",
                odd: "9.00",
              },
              {
                value: "Under 4.5",
                odd: "1.04",
              },
              {
                value: "Over 2.5",
                odd: "2.88",
              },
              {
                value: "Under 2.5",
                odd: "1.40",
              },
              {
                value: "Over 0.5",
                odd: "1.13",
              },
              {
                value: "Under 0.5",
                odd: "5.50",
              },
              {
                value: "Over 5.5",
                odd: "15.00",
              },
              {
                value: "Under 5.5",
                odd: "1.01",
              },
            ],
          },
          {
            id: 6,
            name: "Goals Over/Under First Half",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "13.00",
              },
              {
                value: "Under 2.5",
                odd: "1.04",
              },
              {
                value: "Over 0.5",
                odd: "1.67",
              },
              {
                value: "Under 0.5",
                odd: "2.10",
              },
            ],
          },
          {
            id: 26,
            name: "Goals Over/Under - Second Half",
            odds: [
              {
                value: "Over 3.5",
                odd: "19.00",
              },
              {
                value: "Under 3.5",
                odd: "1.02",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "7.00",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
              {
                value: "Over 0.5",
                odd: "1.40",
              },
              {
                value: "Under 0.5",
                odd: "2.75",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "19.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "7.00",
              },
              {
                value: "Draw/Draw",
                odd: "4.00",
              },
              {
                value: "Home/Home",
                odd: "4.33",
              },
              {
                value: "Draw/Home",
                odd: "5.00",
              },
              {
                value: "Away/Home",
                odd: "26.00",
              },
              {
                value: "Away/Draw",
                odd: "15.00",
              },
              {
                value: "Away/Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 8,
            name: "Both Teams Score",
            odds: [
              {
                value: "Yes",
                odd: "2.50",
              },
              {
                value: "No",
                odd: "1.50",
              },
            ],
          },
          {
            id: 9,
            name: "Handicap Result",
            odds: [
              {
                value: "Home -1",
                odd: "4.33",
              },
              {
                value: "Away -1",
                odd: "1.62",
              },
              {
                value: "Draw -1",
                odd: "3.75",
              },
              {
                value: "Home +1",
                odd: "1.30",
              },
              {
                value: "Away +1",
                odd: "7.00",
              },
              {
                value: "Draw +1",
                odd: "4.75",
              },
              {
                value: "Home +2",
                odd: "1.07",
              },
              {
                value: "Draw +2",
                odd: "11.00",
              },
              {
                value: "Away +2",
                odd: "19.00",
              },
              {
                value: "Home -2",
                odd: "9.00",
              },
              {
                value: "Draw -2",
                odd: "6.50",
              },
              {
                value: "Away -2",
                odd: "1.18",
              },
              {
                value: "Home -3",
                odd: "23.00",
              },
              {
                value: "Draw -3",
                odd: "15.00",
              },
              {
                value: "Away -3",
                odd: "1.05",
              },
              {
                value: "Home +3",
                odd: "1.03",
              },
              {
                value: "Draw +3",
                odd: "19.00",
              },
              {
                value: "Away +3",
                odd: "29.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "9.00",
              },
              {
                value: "2:1",
                odd: "12.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "26.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "4:1",
                odd: "51.00",
              },
              {
                value: "4:2",
                odd: "81.00",
              },
              {
                value: "5:0",
                odd: "67.00",
              },
              {
                value: "5:1",
                odd: "81.00",
              },
              {
                value: "6:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "5.50",
              },
              {
                value: "1:1",
                odd: "7.00",
              },
              {
                value: "2:2",
                odd: "23.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "7.50",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "34.00",
              },
              {
                value: "0:4",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "15.00",
              },
              {
                value: "1:3",
                odd: "34.00",
              },
              {
                value: "1:4",
                odd: "67.00",
              },
              {
                value: "2:3",
                odd: "51.00",
              },
            ],
          },
          {
            id: 11,
            name: "Highest Scoring Half",
            odds: [
              {
                value: "Draw",
                odd: "3.00",
              },
              {
                value: "1st Half",
                odd: "3.25",
              },
              {
                value: "2nd Half",
                odd: "2.20",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "4.75",
              },
              {
                value: "2:0",
                odd: "15.00",
              },
              {
                value: "2:1",
                odd: "41.00",
              },
              {
                value: "3:0",
                odd: "41.00",
              },
              {
                value: "3:1",
                odd: "81.00",
              },
              {
                value: "4:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "2.10",
              },
              {
                value: "1:1",
                odd: "12.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "4.75",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "41.00",
              },
              {
                value: "1:2",
                odd: "41.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.30",
              },
              {
                value: "Home/Away",
                odd: "1.36",
              },
              {
                value: "Draw/Away",
                odd: "1.62",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "3.50",
              },
              {
                value: "Draw",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "3.50",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Draw",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "2.63",
              },
            ],
          },
          {
            id: 15,
            name: "Team To Score Last",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Away",
                odd: "2.63",
              },
              {
                value: "No goal",
                odd: "5.50",
              },
            ],
          },
          {
            id: 32,
            name: "Win Both Halves",
            odds: [
              {
                value: "Home",
                odd: "10.00",
              },
              {
                value: "Away",
                odd: "13.00",
              },
            ],
          },
          {
            id: 16,
            name: "Total - Home",
            odds: [
              {
                value: "Over 3.5",
                odd: "10.50",
              },
              {
                value: "Under 3.5",
                odd: "1.03",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "6.50",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
            ],
          },
          {
            id: 17,
            name: "Total - Away",
            odds: [
              {
                value: "Over 3.5",
                odd: "15.00",
              },
              {
                value: "Under 3.5",
                odd: "1.01",
              },
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "8.50",
              },
              {
                value: "Under 2.5",
                odd: "1.05",
              },
            ],
          },
          {
            id: 18,
            name: "Handicap Result - First Half",
            odds: [
              {
                value: "Home -1",
                odd: "11.00",
              },
              {
                value: "Away -1",
                odd: "1.29",
              },
              {
                value: "Draw -1",
                odd: "4.33",
              },
              {
                value: "Home +1",
                odd: "1.29",
              },
              {
                value: "Away +1",
                odd: "12.00",
              },
              {
                value: "Draw +1",
                odd: "4.50",
              },
              {
                value: "Home -2",
                odd: "34.00",
              },
              {
                value: "Draw -2",
                odd: "15.00",
              },
              {
                value: "Away -2",
                odd: "1.04",
              },
            ],
          },
          {
            id: 19,
            name: "Asian Handicap First Half",
            odds: [
              {
                value: "Home +0",
                odd: "1.58",
              },
              {
                value: "Away +0",
                odd: "2.35",
              },
              {
                value: "Home -0.25",
                odd: "2.68",
              },
              {
                value: "Away -0.25",
                odd: "1.45",
              },
              {
                value: "Home +0.25",
                odd: "1.43",
              },
              {
                value: "Away +0.25",
                odd: "2.75",
              },
              {
                value: "Home -0.5",
                odd: "3.55",
              },
              {
                value: "Away -0.5",
                odd: "1.28",
              },
              {
                value: "Home +0.5",
                odd: "1.28",
              },
              {
                value: "Away +0.5",
                odd: "3.55",
              },
              {
                value: "Home -0.75",
                odd: "5.00",
              },
              {
                value: "Away -0.75",
                odd: "1.17",
              },
              {
                value: "Home +0.75",
                odd: "1.16",
              },
              {
                value: "Away +0.75",
                odd: "5.25",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.29",
              },
              {
                value: "Home/Away",
                odd: "1.83",
              },
              {
                value: "Draw/Away",
                odd: "1.29",
              },
            ],
          },
          {
            id: 34,
            name: "Both Teams Score - First Half",
            odds: [
              {
                value: "Yes",
                odd: "7.50",
              },
              {
                value: "No",
                odd: "1.07",
              },
            ],
          },
          {
            id: 35,
            name: "Both Teams To Score - Second Half",
            odds: [
              {
                value: "Yes",
                odd: "5.00",
              },
              {
                value: "No",
                odd: "1.14",
              },
            ],
          },
          {
            id: 36,
            name: "Win To Nil",
            odds: [
              {
                value: "Home",
                odd: "3.00",
              },
              {
                value: "Away",
                odd: "4.75",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.38",
              },
              {
                value: "Even",
                odd: "1.57",
              },
            ],
          },
          {
            id: 39,
            name: "To Win Either Half",
            odds: [
              {
                value: "Home",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "2.10",
              },
            ],
          },
          {
            id: 40,
            name: "Home Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "4.50",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.63",
              },
              {
                value: "more 3",
                odd: "6.50",
              },
            ],
          },
          {
            id: 41,
            name: "Away Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "6.00",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.00",
              },
              {
                value: "more 3",
                odd: "8.50",
              },
            ],
          },
          {
            id: 24,
            name: "Results/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "7.00",
              },
              {
                value: "Draw/Yes",
                odd: "5.50",
              },
              {
                value: "Away/Yes",
                odd: "10.00",
              },
              {
                value: "Home/No",
                odd: "3.00",
              },
              {
                value: "Draw/No",
                odd: "5.50",
              },
              {
                value: "Away/No",
                odd: "4.75",
              },
            ],
          },
          {
            id: 25,
            name: "Result/Total Goals",
            odds: [
              {
                value: "Home/Over 2.5",
                odd: "4.75",
              },
              {
                value: "Away/Over 2.5",
                odd: "7.50",
              },
              {
                value: "Home/Under 2.5",
                odd: "3.75",
              },
              {
                value: "Away/Under 2.5",
                odd: "5.50",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.10",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 48,
            name: "To Score In Both Halves By Teams",
            odds: [
              {
                value: "Home",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 50,
            name: "Goal Line",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.75",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.63",
              },
              {
                value: "Under 1.5",
                odd: "2.25",
              },
              {
                value: "Over 2.5",
                odd: "2.75",
              },
              {
                value: "Under 2.5",
                odd: "1.43",
              },
              {
                value: "Over 2",
                odd: "2.10",
              },
              {
                value: "Under 2",
                odd: "1.70",
              },
              {
                value: "Over 3",
                odd: "4.50",
              },
              {
                value: "Under 3",
                odd: "1.19",
              },
              {
                value: "Over 2.25",
                odd: "2.43",
              },
              {
                value: "Under 2.25",
                odd: "1.53",
              },
              {
                value: "Over 3.25",
                odd: "5.25",
              },
              {
                value: "Under 3.25",
                odd: "1.16",
              },
              {
                value: "Over 2.75",
                odd: "3.45",
              },
              {
                value: "Under 2.75",
                odd: "1.30",
              },
              {
                value: "Over 1.25",
                odd: "1.43",
              },
              {
                value: "Under 1.25",
                odd: "2.75",
              },
              {
                value: "Over 1.75",
                odd: "1.80",
              },
              {
                value: "Under 1.75",
                odd: "2.00",
              },
              {
                value: "Over 1",
                odd: "1.22",
              },
              {
                value: "Under 1",
                odd: "4.15",
              },
              {
                value: "Over 0.75",
                odd: "1.18",
              },
              {
                value: "Under 0.75",
                odd: "4.80",
              },
            ],
          },
          {
            id: 72,
            name: "Goal Line (1st Half)",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.23",
              },
              {
                value: "Over 1.25",
                odd: "3.45",
              },
              {
                value: "Under 1.25",
                odd: "1.30",
              },
              {
                value: "Over 1.75",
                odd: "5.75",
              },
              {
                value: "Under 1.75",
                odd: "1.14",
              },
              {
                value: "Over 1",
                odd: "2.75",
              },
              {
                value: "Under 1",
                odd: "1.43",
              },
              {
                value: "Over 0.75",
                odd: "1.98",
              },
              {
                value: "Under 0.75",
                odd: "1.83",
              },
            ],
          },
          {
            id: 52,
            name: "Halftime Result/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "34.00",
              },
              {
                value: "Draw/Yes",
                odd: "12.00",
              },
              {
                value: "Away/Yes",
                odd: "34.00",
              },
              {
                value: "Home/No",
                odd: "3.75",
              },
              {
                value: "Draw/No",
                odd: "2.10",
              },
              {
                value: "Away/No",
                odd: "3.75",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592145,
          date: "2021-01-20T18:00:00+00:00",
          home: {
            id: 50,
            name: "Manchester City",
          },
          away: {
            id: 66,
            name: "Aston Villa",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "2.15",
              },
              {
                value: "Draw",
                odd: "2.90",
              },
              {
                value: "Away",
                odd: "3.25",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.53",
              },
              {
                value: "Away",
                odd: "2.38",
              },
            ],
          },
          {
            id: 3,
            name: "Second Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.63",
              },
              {
                value: "Draw",
                odd: "2.20",
              },
              {
                value: "Away",
                odd: "3.60",
              },
            ],
          },
          {
            id: 4,
            name: "Asian Handicap",
            odds: [
              {
                value: "Home +0",
                odd: "1.88",
              },
              {
                value: "Away +0",
                odd: "1.93",
              },
              {
                value: "Home -0.25",
                odd: "1.90",
              },
              {
                value: "Away -0.25",
                odd: "1.90",
              },
              {
                value: "Home +0.25",
                odd: "1.40",
              },
              {
                value: "Away +0.25",
                odd: "2.85",
              },
              {
                value: "Home -0.5",
                odd: "2.20",
              },
              {
                value: "Away -0.5",
                odd: "1.65",
              },
              {
                value: "Home +0.5",
                odd: "1.33",
              },
              {
                value: "Away +0.5",
                odd: "3.30",
              },
              {
                value: "Home -0.75",
                odd: "2.60",
              },
              {
                value: "Away -0.75",
                odd: "1.48",
              },
              {
                value: "Home +0.75",
                odd: "1.22",
              },
              {
                value: "Away +0.75",
                odd: "4.15",
              },
              {
                value: "Home -1",
                odd: "3.45",
              },
              {
                value: "Away -1",
                odd: "1.30",
              },
              {
                value: "Home +1",
                odd: "1.11",
              },
              {
                value: "Away +1",
                odd: "6.60",
              },
              {
                value: "Home -1.5",
                odd: "4.40",
              },
              {
                value: "Away -1.5",
                odd: "1.20",
              },
              {
                value: "Home +1.5",
                odd: "1.13",
              },
              {
                value: "Away +1.5",
                odd: "5.90",
              },
              {
                value: "Home -1.25",
                odd: "3.90",
              },
              {
                value: "Away -1.25",
                odd: "1.24",
              },
              {
                value: "Home -1.75",
                odd: "5.90",
              },
              {
                value: "Away -1.75",
                odd: "1.13",
              },
              {
                value: "Home +1.25",
                odd: "1.10",
              },
              {
                value: "Away +1.25",
                odd: "7.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.00",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.62",
              },
              {
                value: "Under 1.5",
                odd: "2.20",
              },
              {
                value: "Over 4.5",
                odd: "9.00",
              },
              {
                value: "Under 4.5",
                odd: "1.04",
              },
              {
                value: "Over 2.5",
                odd: "2.88",
              },
              {
                value: "Under 2.5",
                odd: "1.40",
              },
              {
                value: "Over 0.5",
                odd: "1.13",
              },
              {
                value: "Under 0.5",
                odd: "5.50",
              },
              {
                value: "Over 5.5",
                odd: "15.00",
              },
              {
                value: "Under 5.5",
                odd: "1.01",
              },
            ],
          },
          {
            id: 6,
            name: "Goals Over/Under First Half",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "13.00",
              },
              {
                value: "Under 2.5",
                odd: "1.04",
              },
              {
                value: "Over 0.5",
                odd: "1.67",
              },
              {
                value: "Under 0.5",
                odd: "2.10",
              },
            ],
          },
          {
            id: 26,
            name: "Goals Over/Under - Second Half",
            odds: [
              {
                value: "Over 3.5",
                odd: "19.00",
              },
              {
                value: "Under 3.5",
                odd: "1.02",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "7.00",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
              {
                value: "Over 0.5",
                odd: "1.40",
              },
              {
                value: "Under 0.5",
                odd: "2.75",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "19.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "7.00",
              },
              {
                value: "Draw/Draw",
                odd: "4.00",
              },
              {
                value: "Home/Home",
                odd: "4.33",
              },
              {
                value: "Draw/Home",
                odd: "5.00",
              },
              {
                value: "Away/Home",
                odd: "26.00",
              },
              {
                value: "Away/Draw",
                odd: "15.00",
              },
              {
                value: "Away/Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 8,
            name: "Both Teams Score",
            odds: [
              {
                value: "Yes",
                odd: "2.50",
              },
              {
                value: "No",
                odd: "1.50",
              },
            ],
          },
          {
            id: 9,
            name: "Handicap Result",
            odds: [
              {
                value: "Home -1",
                odd: "4.33",
              },
              {
                value: "Away -1",
                odd: "1.62",
              },
              {
                value: "Draw -1",
                odd: "3.75",
              },
              {
                value: "Home +1",
                odd: "1.30",
              },
              {
                value: "Away +1",
                odd: "7.00",
              },
              {
                value: "Draw +1",
                odd: "4.75",
              },
              {
                value: "Home +2",
                odd: "1.07",
              },
              {
                value: "Draw +2",
                odd: "11.00",
              },
              {
                value: "Away +2",
                odd: "19.00",
              },
              {
                value: "Home -2",
                odd: "9.00",
              },
              {
                value: "Draw -2",
                odd: "6.50",
              },
              {
                value: "Away -2",
                odd: "1.18",
              },
              {
                value: "Home -3",
                odd: "23.00",
              },
              {
                value: "Draw -3",
                odd: "15.00",
              },
              {
                value: "Away -3",
                odd: "1.05",
              },
              {
                value: "Home +3",
                odd: "1.03",
              },
              {
                value: "Draw +3",
                odd: "19.00",
              },
              {
                value: "Away +3",
                odd: "29.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "9.00",
              },
              {
                value: "2:1",
                odd: "12.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "26.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "4:1",
                odd: "51.00",
              },
              {
                value: "4:2",
                odd: "81.00",
              },
              {
                value: "5:0",
                odd: "67.00",
              },
              {
                value: "5:1",
                odd: "81.00",
              },
              {
                value: "6:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "5.50",
              },
              {
                value: "1:1",
                odd: "7.00",
              },
              {
                value: "2:2",
                odd: "23.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "7.50",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "34.00",
              },
              {
                value: "0:4",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "15.00",
              },
              {
                value: "1:3",
                odd: "34.00",
              },
              {
                value: "1:4",
                odd: "67.00",
              },
              {
                value: "2:3",
                odd: "51.00",
              },
            ],
          },
          {
            id: 11,
            name: "Highest Scoring Half",
            odds: [
              {
                value: "Draw",
                odd: "3.00",
              },
              {
                value: "1st Half",
                odd: "3.25",
              },
              {
                value: "2nd Half",
                odd: "2.20",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "4.75",
              },
              {
                value: "2:0",
                odd: "15.00",
              },
              {
                value: "2:1",
                odd: "41.00",
              },
              {
                value: "3:0",
                odd: "41.00",
              },
              {
                value: "3:1",
                odd: "81.00",
              },
              {
                value: "4:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "2.10",
              },
              {
                value: "1:1",
                odd: "12.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "4.75",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "41.00",
              },
              {
                value: "1:2",
                odd: "41.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.30",
              },
              {
                value: "Home/Away",
                odd: "1.36",
              },
              {
                value: "Draw/Away",
                odd: "1.62",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "3.50",
              },
              {
                value: "Draw",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "3.50",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Draw",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "2.63",
              },
            ],
          },
          {
            id: 15,
            name: "Team To Score Last",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Away",
                odd: "2.63",
              },
              {
                value: "No goal",
                odd: "5.50",
              },
            ],
          },
          {
            id: 32,
            name: "Win Both Halves",
            odds: [
              {
                value: "Home",
                odd: "10.00",
              },
              {
                value: "Away",
                odd: "13.00",
              },
            ],
          },
          {
            id: 16,
            name: "Total - Home",
            odds: [
              {
                value: "Over 3.5",
                odd: "10.50",
              },
              {
                value: "Under 3.5",
                odd: "1.03",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "6.50",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
            ],
          },
          {
            id: 17,
            name: "Total - Away",
            odds: [
              {
                value: "Over 3.5",
                odd: "15.00",
              },
              {
                value: "Under 3.5",
                odd: "1.01",
              },
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "8.50",
              },
              {
                value: "Under 2.5",
                odd: "1.05",
              },
            ],
          },
          {
            id: 18,
            name: "Handicap Result - First Half",
            odds: [
              {
                value: "Home -1",
                odd: "11.00",
              },
              {
                value: "Away -1",
                odd: "1.29",
              },
              {
                value: "Draw -1",
                odd: "4.33",
              },
              {
                value: "Home +1",
                odd: "1.29",
              },
              {
                value: "Away +1",
                odd: "12.00",
              },
              {
                value: "Draw +1",
                odd: "4.50",
              },
              {
                value: "Home -2",
                odd: "34.00",
              },
              {
                value: "Draw -2",
                odd: "15.00",
              },
              {
                value: "Away -2",
                odd: "1.04",
              },
            ],
          },
          {
            id: 19,
            name: "Asian Handicap First Half",
            odds: [
              {
                value: "Home +0",
                odd: "1.58",
              },
              {
                value: "Away +0",
                odd: "2.35",
              },
              {
                value: "Home -0.25",
                odd: "2.68",
              },
              {
                value: "Away -0.25",
                odd: "1.45",
              },
              {
                value: "Home +0.25",
                odd: "1.43",
              },
              {
                value: "Away +0.25",
                odd: "2.75",
              },
              {
                value: "Home -0.5",
                odd: "3.55",
              },
              {
                value: "Away -0.5",
                odd: "1.28",
              },
              {
                value: "Home +0.5",
                odd: "1.28",
              },
              {
                value: "Away +0.5",
                odd: "3.55",
              },
              {
                value: "Home -0.75",
                odd: "5.00",
              },
              {
                value: "Away -0.75",
                odd: "1.17",
              },
              {
                value: "Home +0.75",
                odd: "1.16",
              },
              {
                value: "Away +0.75",
                odd: "5.25",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.29",
              },
              {
                value: "Home/Away",
                odd: "1.83",
              },
              {
                value: "Draw/Away",
                odd: "1.29",
              },
            ],
          },
          {
            id: 34,
            name: "Both Teams Score - First Half",
            odds: [
              {
                value: "Yes",
                odd: "7.50",
              },
              {
                value: "No",
                odd: "1.07",
              },
            ],
          },
          {
            id: 35,
            name: "Both Teams To Score - Second Half",
            odds: [
              {
                value: "Yes",
                odd: "5.00",
              },
              {
                value: "No",
                odd: "1.14",
              },
            ],
          },
          {
            id: 36,
            name: "Win To Nil",
            odds: [
              {
                value: "Home",
                odd: "3.00",
              },
              {
                value: "Away",
                odd: "4.75",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.38",
              },
              {
                value: "Even",
                odd: "1.57",
              },
            ],
          },
          {
            id: 39,
            name: "To Win Either Half",
            odds: [
              {
                value: "Home",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "2.10",
              },
            ],
          },
          {
            id: 40,
            name: "Home Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "4.50",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.63",
              },
              {
                value: "more 3",
                odd: "6.50",
              },
            ],
          },
          {
            id: 41,
            name: "Away Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "6.00",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.00",
              },
              {
                value: "more 3",
                odd: "8.50",
              },
            ],
          },
          {
            id: 24,
            name: "Results/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "7.00",
              },
              {
                value: "Draw/Yes",
                odd: "5.50",
              },
              {
                value: "Away/Yes",
                odd: "10.00",
              },
              {
                value: "Home/No",
                odd: "3.00",
              },
              {
                value: "Draw/No",
                odd: "5.50",
              },
              {
                value: "Away/No",
                odd: "4.75",
              },
            ],
          },
          {
            id: 25,
            name: "Result/Total Goals",
            odds: [
              {
                value: "Home/Over 2.5",
                odd: "4.75",
              },
              {
                value: "Away/Over 2.5",
                odd: "7.50",
              },
              {
                value: "Home/Under 2.5",
                odd: "3.75",
              },
              {
                value: "Away/Under 2.5",
                odd: "5.50",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.10",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 48,
            name: "To Score In Both Halves By Teams",
            odds: [
              {
                value: "Home",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 50,
            name: "Goal Line",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.75",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.63",
              },
              {
                value: "Under 1.5",
                odd: "2.25",
              },
              {
                value: "Over 2.5",
                odd: "2.75",
              },
              {
                value: "Under 2.5",
                odd: "1.43",
              },
              {
                value: "Over 2",
                odd: "2.10",
              },
              {
                value: "Under 2",
                odd: "1.70",
              },
              {
                value: "Over 3",
                odd: "4.50",
              },
              {
                value: "Under 3",
                odd: "1.19",
              },
              {
                value: "Over 2.25",
                odd: "2.43",
              },
              {
                value: "Under 2.25",
                odd: "1.53",
              },
              {
                value: "Over 3.25",
                odd: "5.25",
              },
              {
                value: "Under 3.25",
                odd: "1.16",
              },
              {
                value: "Over 2.75",
                odd: "3.45",
              },
              {
                value: "Under 2.75",
                odd: "1.30",
              },
              {
                value: "Over 1.25",
                odd: "1.43",
              },
              {
                value: "Under 1.25",
                odd: "2.75",
              },
              {
                value: "Over 1.75",
                odd: "1.80",
              },
              {
                value: "Under 1.75",
                odd: "2.00",
              },
              {
                value: "Over 1",
                odd: "1.22",
              },
              {
                value: "Under 1",
                odd: "4.15",
              },
              {
                value: "Over 0.75",
                odd: "1.18",
              },
              {
                value: "Under 0.75",
                odd: "4.80",
              },
            ],
          },
          {
            id: 72,
            name: "Goal Line (1st Half)",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.23",
              },
              {
                value: "Over 1.25",
                odd: "3.45",
              },
              {
                value: "Under 1.25",
                odd: "1.30",
              },
              {
                value: "Over 1.75",
                odd: "5.75",
              },
              {
                value: "Under 1.75",
                odd: "1.14",
              },
              {
                value: "Over 1",
                odd: "2.75",
              },
              {
                value: "Under 1",
                odd: "1.43",
              },
              {
                value: "Over 0.75",
                odd: "1.98",
              },
              {
                value: "Under 0.75",
                odd: "1.83",
              },
            ],
          },
          {
            id: 52,
            name: "Halftime Result/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "34.00",
              },
              {
                value: "Draw/Yes",
                odd: "12.00",
              },
              {
                value: "Away/Yes",
                odd: "34.00",
              },
              {
                value: "Home/No",
                odd: "3.75",
              },
              {
                value: "Draw/No",
                odd: "2.10",
              },
              {
                value: "Away/No",
                odd: "3.75",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592146,
          date: "2020-09-13T15:30:00+00:00",
          home: {
            id: 47,
            name: "Tottenham",
          },
          away: {
            id: 45,
            name: "Everton",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "1.44",
              },
              {
                value: "Draw",
                odd: "3.75",
              },
              {
                value: "Away",
                odd: "6.50",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.14",
              },
              {
                value: "Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 2.5",
                odd: "2.15",
              },
              {
                value: "Under 2.5",
                odd: "1.68",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "17.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "13.00",
              },
              {
                value: "Draw/Draw",
                odd: "5.50",
              },
              {
                value: "Home/Home",
                odd: "2.30",
              },
              {
                value: "Draw/Home",
                odd: "4.00",
              },
              {
                value: "Away/Home",
                odd: "23.00",
              },
              {
                value: "Away/Draw",
                odd: "21.00",
              },
              {
                value: "Away/Away",
                odd: "12.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "6.00",
              },
              {
                value: "2:1",
                odd: "11.00",
              },
              {
                value: "3:0",
                odd: "9.00",
              },
              {
                value: "3:1",
                odd: "17.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "17.00",
              },
              {
                value: "4:1",
                odd: "29.00",
              },
              {
                value: "4:2",
                odd: "67.00",
              },
              {
                value: "5:0",
                odd: "29.00",
              },
              {
                value: "5:1",
                odd: "51.00",
              },
              {
                value: "6:0",
                odd: "51.00",
              },
              {
                value: "0:0",
                odd: "7.50",
              },
              {
                value: "1:1",
                odd: "8.50",
              },
              {
                value: "2:2",
                odd: "26.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "15.00",
              },
              {
                value: "0:2",
                odd: "34.00",
              },
              {
                value: "0:3",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "23.00",
              },
              {
                value: "1:3",
                odd: "51.00",
              },
              {
                value: "2:3",
                odd: "67.00",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "3.40",
              },
              {
                value: "2:0",
                odd: "7.00",
              },
              {
                value: "2:1",
                odd: "29.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "51.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "0:0",
                odd: "2.50",
              },
              {
                value: "1:1",
                odd: "13.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "8.50",
              },
              {
                value: "0:2",
                odd: "34.00",
              },
              {
                value: "1:2",
                odd: "51.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.08",
              },
              {
                value: "Home/Away",
                odd: "1.22",
              },
              {
                value: "Draw/Away",
                odd: "2.50",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.00",
              },
              {
                value: "Draw",
                odd: "2.10",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.33",
              },
              {
                value: "Draw",
                odd: "7.50",
              },
              {
                value: "Away",
                odd: "4.33",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.10",
              },
              {
                value: "Home/Away",
                odd: "1.67",
              },
              {
                value: "Draw/Away",
                odd: "1.73",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.20",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.00",
              },
              {
                value: "Even",
                odd: "1.73",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592147,
          date: "2020-09-13T13:00:00+00:00",
          home: {
            id: 60,
            name: "West Brom",
          },
          away: {
            id: 46,
            name: "Leicester",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "2.15",
              },
              {
                value: "Draw",
                odd: "2.90",
              },
              {
                value: "Away",
                odd: "3.25",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.53",
              },
              {
                value: "Away",
                odd: "2.38",
              },
            ],
          },
          {
            id: 3,
            name: "Second Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.63",
              },
              {
                value: "Draw",
                odd: "2.20",
              },
              {
                value: "Away",
                odd: "3.60",
              },
            ],
          },
          {
            id: 4,
            name: "Asian Handicap",
            odds: [
              {
                value: "Home +0",
                odd: "1.88",
              },
              {
                value: "Away +0",
                odd: "1.93",
              },
              {
                value: "Home -0.25",
                odd: "1.90",
              },
              {
                value: "Away -0.25",
                odd: "1.90",
              },
              {
                value: "Home +0.25",
                odd: "1.40",
              },
              {
                value: "Away +0.25",
                odd: "2.85",
              },
              {
                value: "Home -0.5",
                odd: "2.20",
              },
              {
                value: "Away -0.5",
                odd: "1.65",
              },
              {
                value: "Home +0.5",
                odd: "1.33",
              },
              {
                value: "Away +0.5",
                odd: "3.30",
              },
              {
                value: "Home -0.75",
                odd: "2.60",
              },
              {
                value: "Away -0.75",
                odd: "1.48",
              },
              {
                value: "Home +0.75",
                odd: "1.22",
              },
              {
                value: "Away +0.75",
                odd: "4.15",
              },
              {
                value: "Home -1",
                odd: "3.45",
              },
              {
                value: "Away -1",
                odd: "1.30",
              },
              {
                value: "Home +1",
                odd: "1.11",
              },
              {
                value: "Away +1",
                odd: "6.60",
              },
              {
                value: "Home -1.5",
                odd: "4.40",
              },
              {
                value: "Away -1.5",
                odd: "1.20",
              },
              {
                value: "Home +1.5",
                odd: "1.13",
              },
              {
                value: "Away +1.5",
                odd: "5.90",
              },
              {
                value: "Home -1.25",
                odd: "3.90",
              },
              {
                value: "Away -1.25",
                odd: "1.24",
              },
              {
                value: "Home -1.75",
                odd: "5.90",
              },
              {
                value: "Away -1.75",
                odd: "1.13",
              },
              {
                value: "Home +1.25",
                odd: "1.10",
              },
              {
                value: "Away +1.25",
                odd: "7.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.00",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.62",
              },
              {
                value: "Under 1.5",
                odd: "2.20",
              },
              {
                value: "Over 4.5",
                odd: "9.00",
              },
              {
                value: "Under 4.5",
                odd: "1.04",
              },
              {
                value: "Over 2.5",
                odd: "2.88",
              },
              {
                value: "Under 2.5",
                odd: "1.40",
              },
              {
                value: "Over 0.5",
                odd: "1.13",
              },
              {
                value: "Under 0.5",
                odd: "5.50",
              },
              {
                value: "Over 5.5",
                odd: "15.00",
              },
              {
                value: "Under 5.5",
                odd: "1.01",
              },
            ],
          },
          {
            id: 6,
            name: "Goals Over/Under First Half",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "13.00",
              },
              {
                value: "Under 2.5",
                odd: "1.04",
              },
              {
                value: "Over 0.5",
                odd: "1.67",
              },
              {
                value: "Under 0.5",
                odd: "2.10",
              },
            ],
          },
          {
            id: 26,
            name: "Goals Over/Under - Second Half",
            odds: [
              {
                value: "Over 3.5",
                odd: "19.00",
              },
              {
                value: "Under 3.5",
                odd: "1.02",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "7.00",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
              {
                value: "Over 0.5",
                odd: "1.40",
              },
              {
                value: "Under 0.5",
                odd: "2.75",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "19.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "7.00",
              },
              {
                value: "Draw/Draw",
                odd: "4.00",
              },
              {
                value: "Home/Home",
                odd: "4.33",
              },
              {
                value: "Draw/Home",
                odd: "5.00",
              },
              {
                value: "Away/Home",
                odd: "26.00",
              },
              {
                value: "Away/Draw",
                odd: "15.00",
              },
              {
                value: "Away/Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 8,
            name: "Both Teams Score",
            odds: [
              {
                value: "Yes",
                odd: "2.50",
              },
              {
                value: "No",
                odd: "1.50",
              },
            ],
          },
          {
            id: 9,
            name: "Handicap Result",
            odds: [
              {
                value: "Home -1",
                odd: "4.33",
              },
              {
                value: "Away -1",
                odd: "1.62",
              },
              {
                value: "Draw -1",
                odd: "3.75",
              },
              {
                value: "Home +1",
                odd: "1.30",
              },
              {
                value: "Away +1",
                odd: "7.00",
              },
              {
                value: "Draw +1",
                odd: "4.75",
              },
              {
                value: "Home +2",
                odd: "1.07",
              },
              {
                value: "Draw +2",
                odd: "11.00",
              },
              {
                value: "Away +2",
                odd: "19.00",
              },
              {
                value: "Home -2",
                odd: "9.00",
              },
              {
                value: "Draw -2",
                odd: "6.50",
              },
              {
                value: "Away -2",
                odd: "1.18",
              },
              {
                value: "Home -3",
                odd: "23.00",
              },
              {
                value: "Draw -3",
                odd: "15.00",
              },
              {
                value: "Away -3",
                odd: "1.05",
              },
              {
                value: "Home +3",
                odd: "1.03",
              },
              {
                value: "Draw +3",
                odd: "19.00",
              },
              {
                value: "Away +3",
                odd: "29.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "9.00",
              },
              {
                value: "2:1",
                odd: "12.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "26.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "4:1",
                odd: "51.00",
              },
              {
                value: "4:2",
                odd: "81.00",
              },
              {
                value: "5:0",
                odd: "67.00",
              },
              {
                value: "5:1",
                odd: "81.00",
              },
              {
                value: "6:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "5.50",
              },
              {
                value: "1:1",
                odd: "7.00",
              },
              {
                value: "2:2",
                odd: "23.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "7.50",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "34.00",
              },
              {
                value: "0:4",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "15.00",
              },
              {
                value: "1:3",
                odd: "34.00",
              },
              {
                value: "1:4",
                odd: "67.00",
              },
              {
                value: "2:3",
                odd: "51.00",
              },
            ],
          },
          {
            id: 11,
            name: "Highest Scoring Half",
            odds: [
              {
                value: "Draw",
                odd: "3.00",
              },
              {
                value: "1st Half",
                odd: "3.25",
              },
              {
                value: "2nd Half",
                odd: "2.20",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "4.75",
              },
              {
                value: "2:0",
                odd: "15.00",
              },
              {
                value: "2:1",
                odd: "41.00",
              },
              {
                value: "3:0",
                odd: "41.00",
              },
              {
                value: "3:1",
                odd: "81.00",
              },
              {
                value: "4:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "2.10",
              },
              {
                value: "1:1",
                odd: "12.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "4.75",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "41.00",
              },
              {
                value: "1:2",
                odd: "41.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.30",
              },
              {
                value: "Home/Away",
                odd: "1.36",
              },
              {
                value: "Draw/Away",
                odd: "1.62",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "3.50",
              },
              {
                value: "Draw",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "3.50",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Draw",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "2.63",
              },
            ],
          },
          {
            id: 15,
            name: "Team To Score Last",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Away",
                odd: "2.63",
              },
              {
                value: "No goal",
                odd: "5.50",
              },
            ],
          },
          {
            id: 32,
            name: "Win Both Halves",
            odds: [
              {
                value: "Home",
                odd: "10.00",
              },
              {
                value: "Away",
                odd: "13.00",
              },
            ],
          },
          {
            id: 16,
            name: "Total - Home",
            odds: [
              {
                value: "Over 3.5",
                odd: "10.50",
              },
              {
                value: "Under 3.5",
                odd: "1.03",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "6.50",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
            ],
          },
          {
            id: 17,
            name: "Total - Away",
            odds: [
              {
                value: "Over 3.5",
                odd: "15.00",
              },
              {
                value: "Under 3.5",
                odd: "1.01",
              },
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "8.50",
              },
              {
                value: "Under 2.5",
                odd: "1.05",
              },
            ],
          },
          {
            id: 18,
            name: "Handicap Result - First Half",
            odds: [
              {
                value: "Home -1",
                odd: "11.00",
              },
              {
                value: "Away -1",
                odd: "1.29",
              },
              {
                value: "Draw -1",
                odd: "4.33",
              },
              {
                value: "Home +1",
                odd: "1.29",
              },
              {
                value: "Away +1",
                odd: "12.00",
              },
              {
                value: "Draw +1",
                odd: "4.50",
              },
              {
                value: "Home -2",
                odd: "34.00",
              },
              {
                value: "Draw -2",
                odd: "15.00",
              },
              {
                value: "Away -2",
                odd: "1.04",
              },
            ],
          },
          {
            id: 19,
            name: "Asian Handicap First Half",
            odds: [
              {
                value: "Home +0",
                odd: "1.58",
              },
              {
                value: "Away +0",
                odd: "2.35",
              },
              {
                value: "Home -0.25",
                odd: "2.68",
              },
              {
                value: "Away -0.25",
                odd: "1.45",
              },
              {
                value: "Home +0.25",
                odd: "1.43",
              },
              {
                value: "Away +0.25",
                odd: "2.75",
              },
              {
                value: "Home -0.5",
                odd: "3.55",
              },
              {
                value: "Away -0.5",
                odd: "1.28",
              },
              {
                value: "Home +0.5",
                odd: "1.28",
              },
              {
                value: "Away +0.5",
                odd: "3.55",
              },
              {
                value: "Home -0.75",
                odd: "5.00",
              },
              {
                value: "Away -0.75",
                odd: "1.17",
              },
              {
                value: "Home +0.75",
                odd: "1.16",
              },
              {
                value: "Away +0.75",
                odd: "5.25",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.29",
              },
              {
                value: "Home/Away",
                odd: "1.83",
              },
              {
                value: "Draw/Away",
                odd: "1.29",
              },
            ],
          },
          {
            id: 34,
            name: "Both Teams Score - First Half",
            odds: [
              {
                value: "Yes",
                odd: "7.50",
              },
              {
                value: "No",
                odd: "1.07",
              },
            ],
          },
          {
            id: 35,
            name: "Both Teams To Score - Second Half",
            odds: [
              {
                value: "Yes",
                odd: "5.00",
              },
              {
                value: "No",
                odd: "1.14",
              },
            ],
          },
          {
            id: 36,
            name: "Win To Nil",
            odds: [
              {
                value: "Home",
                odd: "3.00",
              },
              {
                value: "Away",
                odd: "4.75",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.38",
              },
              {
                value: "Even",
                odd: "1.57",
              },
            ],
          },
          {
            id: 39,
            name: "To Win Either Half",
            odds: [
              {
                value: "Home",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "2.10",
              },
            ],
          },
          {
            id: 40,
            name: "Home Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "4.50",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.63",
              },
              {
                value: "more 3",
                odd: "6.50",
              },
            ],
          },
          {
            id: 41,
            name: "Away Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "6.00",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.00",
              },
              {
                value: "more 3",
                odd: "8.50",
              },
            ],
          },
          {
            id: 24,
            name: "Results/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "7.00",
              },
              {
                value: "Draw/Yes",
                odd: "5.50",
              },
              {
                value: "Away/Yes",
                odd: "10.00",
              },
              {
                value: "Home/No",
                odd: "3.00",
              },
              {
                value: "Draw/No",
                odd: "5.50",
              },
              {
                value: "Away/No",
                odd: "4.75",
              },
            ],
          },
          {
            id: 25,
            name: "Result/Total Goals",
            odds: [
              {
                value: "Home/Over 2.5",
                odd: "4.75",
              },
              {
                value: "Away/Over 2.5",
                odd: "7.50",
              },
              {
                value: "Home/Under 2.5",
                odd: "3.75",
              },
              {
                value: "Away/Under 2.5",
                odd: "5.50",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.10",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 48,
            name: "To Score In Both Halves By Teams",
            odds: [
              {
                value: "Home",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 50,
            name: "Goal Line",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.75",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.63",
              },
              {
                value: "Under 1.5",
                odd: "2.25",
              },
              {
                value: "Over 2.5",
                odd: "2.75",
              },
              {
                value: "Under 2.5",
                odd: "1.43",
              },
              {
                value: "Over 2",
                odd: "2.10",
              },
              {
                value: "Under 2",
                odd: "1.70",
              },
              {
                value: "Over 3",
                odd: "4.50",
              },
              {
                value: "Under 3",
                odd: "1.19",
              },
              {
                value: "Over 2.25",
                odd: "2.43",
              },
              {
                value: "Under 2.25",
                odd: "1.53",
              },
              {
                value: "Over 3.25",
                odd: "5.25",
              },
              {
                value: "Under 3.25",
                odd: "1.16",
              },
              {
                value: "Over 2.75",
                odd: "3.45",
              },
              {
                value: "Under 2.75",
                odd: "1.30",
              },
              {
                value: "Over 1.25",
                odd: "1.43",
              },
              {
                value: "Under 1.25",
                odd: "2.75",
              },
              {
                value: "Over 1.75",
                odd: "1.80",
              },
              {
                value: "Under 1.75",
                odd: "2.00",
              },
              {
                value: "Over 1",
                odd: "1.22",
              },
              {
                value: "Under 1",
                odd: "4.15",
              },
              {
                value: "Over 0.75",
                odd: "1.18",
              },
              {
                value: "Under 0.75",
                odd: "4.80",
              },
            ],
          },
          {
            id: 72,
            name: "Goal Line (1st Half)",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.23",
              },
              {
                value: "Over 1.25",
                odd: "3.45",
              },
              {
                value: "Under 1.25",
                odd: "1.30",
              },
              {
                value: "Over 1.75",
                odd: "5.75",
              },
              {
                value: "Under 1.75",
                odd: "1.14",
              },
              {
                value: "Over 1",
                odd: "2.75",
              },
              {
                value: "Under 1",
                odd: "1.43",
              },
              {
                value: "Over 0.75",
                odd: "1.98",
              },
              {
                value: "Under 0.75",
                odd: "1.83",
              },
            ],
          },
          {
            id: 52,
            name: "Halftime Result/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "34.00",
              },
              {
                value: "Draw/Yes",
                odd: "12.00",
              },
              {
                value: "Away/Yes",
                odd: "34.00",
              },
              {
                value: "Home/No",
                odd: "3.75",
              },
              {
                value: "Draw/No",
                odd: "2.10",
              },
              {
                value: "Away/No",
                odd: "3.75",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592148,
          date: "2020-09-12T19:00:00+00:00",
          home: {
            id: 48,
            name: "West Ham",
          },
          away: {
            id: 34,
            name: "Newcastle",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "2.15",
              },
              {
                value: "Draw",
                odd: "2.90",
              },
              {
                value: "Away",
                odd: "3.25",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.53",
              },
              {
                value: "Away",
                odd: "2.38",
              },
            ],
          },
          {
            id: 3,
            name: "Second Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.63",
              },
              {
                value: "Draw",
                odd: "2.20",
              },
              {
                value: "Away",
                odd: "3.60",
              },
            ],
          },
          {
            id: 4,
            name: "Asian Handicap",
            odds: [
              {
                value: "Home +0",
                odd: "1.88",
              },
              {
                value: "Away +0",
                odd: "1.93",
              },
              {
                value: "Home -0.25",
                odd: "1.90",
              },
              {
                value: "Away -0.25",
                odd: "1.90",
              },
              {
                value: "Home +0.25",
                odd: "1.40",
              },
              {
                value: "Away +0.25",
                odd: "2.85",
              },
              {
                value: "Home -0.5",
                odd: "2.20",
              },
              {
                value: "Away -0.5",
                odd: "1.65",
              },
              {
                value: "Home +0.5",
                odd: "1.33",
              },
              {
                value: "Away +0.5",
                odd: "3.30",
              },
              {
                value: "Home -0.75",
                odd: "2.60",
              },
              {
                value: "Away -0.75",
                odd: "1.48",
              },
              {
                value: "Home +0.75",
                odd: "1.22",
              },
              {
                value: "Away +0.75",
                odd: "4.15",
              },
              {
                value: "Home -1",
                odd: "3.45",
              },
              {
                value: "Away -1",
                odd: "1.30",
              },
              {
                value: "Home +1",
                odd: "1.11",
              },
              {
                value: "Away +1",
                odd: "6.60",
              },
              {
                value: "Home -1.5",
                odd: "4.40",
              },
              {
                value: "Away -1.5",
                odd: "1.20",
              },
              {
                value: "Home +1.5",
                odd: "1.13",
              },
              {
                value: "Away +1.5",
                odd: "5.90",
              },
              {
                value: "Home -1.25",
                odd: "3.90",
              },
              {
                value: "Away -1.25",
                odd: "1.24",
              },
              {
                value: "Home -1.75",
                odd: "5.90",
              },
              {
                value: "Away -1.75",
                odd: "1.13",
              },
              {
                value: "Home +1.25",
                odd: "1.10",
              },
              {
                value: "Away +1.25",
                odd: "7.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.00",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.62",
              },
              {
                value: "Under 1.5",
                odd: "2.20",
              },
              {
                value: "Over 4.5",
                odd: "9.00",
              },
              {
                value: "Under 4.5",
                odd: "1.04",
              },
              {
                value: "Over 2.5",
                odd: "2.88",
              },
              {
                value: "Under 2.5",
                odd: "1.40",
              },
              {
                value: "Over 0.5",
                odd: "1.13",
              },
              {
                value: "Under 0.5",
                odd: "5.50",
              },
              {
                value: "Over 5.5",
                odd: "15.00",
              },
              {
                value: "Under 5.5",
                odd: "1.01",
              },
            ],
          },
          {
            id: 6,
            name: "Goals Over/Under First Half",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "13.00",
              },
              {
                value: "Under 2.5",
                odd: "1.04",
              },
              {
                value: "Over 0.5",
                odd: "1.67",
              },
              {
                value: "Under 0.5",
                odd: "2.10",
              },
            ],
          },
          {
            id: 26,
            name: "Goals Over/Under - Second Half",
            odds: [
              {
                value: "Over 3.5",
                odd: "19.00",
              },
              {
                value: "Under 3.5",
                odd: "1.02",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "7.00",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
              {
                value: "Over 0.5",
                odd: "1.40",
              },
              {
                value: "Under 0.5",
                odd: "2.75",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "19.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "7.00",
              },
              {
                value: "Draw/Draw",
                odd: "4.00",
              },
              {
                value: "Home/Home",
                odd: "4.33",
              },
              {
                value: "Draw/Home",
                odd: "5.00",
              },
              {
                value: "Away/Home",
                odd: "26.00",
              },
              {
                value: "Away/Draw",
                odd: "15.00",
              },
              {
                value: "Away/Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 8,
            name: "Both Teams Score",
            odds: [
              {
                value: "Yes",
                odd: "2.50",
              },
              {
                value: "No",
                odd: "1.50",
              },
            ],
          },
          {
            id: 9,
            name: "Handicap Result",
            odds: [
              {
                value: "Home -1",
                odd: "4.33",
              },
              {
                value: "Away -1",
                odd: "1.62",
              },
              {
                value: "Draw -1",
                odd: "3.75",
              },
              {
                value: "Home +1",
                odd: "1.30",
              },
              {
                value: "Away +1",
                odd: "7.00",
              },
              {
                value: "Draw +1",
                odd: "4.75",
              },
              {
                value: "Home +2",
                odd: "1.07",
              },
              {
                value: "Draw +2",
                odd: "11.00",
              },
              {
                value: "Away +2",
                odd: "19.00",
              },
              {
                value: "Home -2",
                odd: "9.00",
              },
              {
                value: "Draw -2",
                odd: "6.50",
              },
              {
                value: "Away -2",
                odd: "1.18",
              },
              {
                value: "Home -3",
                odd: "23.00",
              },
              {
                value: "Draw -3",
                odd: "15.00",
              },
              {
                value: "Away -3",
                odd: "1.05",
              },
              {
                value: "Home +3",
                odd: "1.03",
              },
              {
                value: "Draw +3",
                odd: "19.00",
              },
              {
                value: "Away +3",
                odd: "29.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "9.00",
              },
              {
                value: "2:1",
                odd: "12.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "26.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "4:1",
                odd: "51.00",
              },
              {
                value: "4:2",
                odd: "81.00",
              },
              {
                value: "5:0",
                odd: "67.00",
              },
              {
                value: "5:1",
                odd: "81.00",
              },
              {
                value: "6:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "5.50",
              },
              {
                value: "1:1",
                odd: "7.00",
              },
              {
                value: "2:2",
                odd: "23.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "7.50",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "34.00",
              },
              {
                value: "0:4",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "15.00",
              },
              {
                value: "1:3",
                odd: "34.00",
              },
              {
                value: "1:4",
                odd: "67.00",
              },
              {
                value: "2:3",
                odd: "51.00",
              },
            ],
          },
          {
            id: 11,
            name: "Highest Scoring Half",
            odds: [
              {
                value: "Draw",
                odd: "3.00",
              },
              {
                value: "1st Half",
                odd: "3.25",
              },
              {
                value: "2nd Half",
                odd: "2.20",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "4.75",
              },
              {
                value: "2:0",
                odd: "15.00",
              },
              {
                value: "2:1",
                odd: "41.00",
              },
              {
                value: "3:0",
                odd: "41.00",
              },
              {
                value: "3:1",
                odd: "81.00",
              },
              {
                value: "4:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "2.10",
              },
              {
                value: "1:1",
                odd: "12.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "4.75",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "41.00",
              },
              {
                value: "1:2",
                odd: "41.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.30",
              },
              {
                value: "Home/Away",
                odd: "1.36",
              },
              {
                value: "Draw/Away",
                odd: "1.62",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "3.50",
              },
              {
                value: "Draw",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "3.50",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Draw",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "2.63",
              },
            ],
          },
          {
            id: 15,
            name: "Team To Score Last",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Away",
                odd: "2.63",
              },
              {
                value: "No goal",
                odd: "5.50",
              },
            ],
          },
          {
            id: 32,
            name: "Win Both Halves",
            odds: [
              {
                value: "Home",
                odd: "10.00",
              },
              {
                value: "Away",
                odd: "13.00",
              },
            ],
          },
          {
            id: 16,
            name: "Total - Home",
            odds: [
              {
                value: "Over 3.5",
                odd: "10.50",
              },
              {
                value: "Under 3.5",
                odd: "1.03",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "6.50",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
            ],
          },
          {
            id: 17,
            name: "Total - Away",
            odds: [
              {
                value: "Over 3.5",
                odd: "15.00",
              },
              {
                value: "Under 3.5",
                odd: "1.01",
              },
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "8.50",
              },
              {
                value: "Under 2.5",
                odd: "1.05",
              },
            ],
          },
          {
            id: 18,
            name: "Handicap Result - First Half",
            odds: [
              {
                value: "Home -1",
                odd: "11.00",
              },
              {
                value: "Away -1",
                odd: "1.29",
              },
              {
                value: "Draw -1",
                odd: "4.33",
              },
              {
                value: "Home +1",
                odd: "1.29",
              },
              {
                value: "Away +1",
                odd: "12.00",
              },
              {
                value: "Draw +1",
                odd: "4.50",
              },
              {
                value: "Home -2",
                odd: "34.00",
              },
              {
                value: "Draw -2",
                odd: "15.00",
              },
              {
                value: "Away -2",
                odd: "1.04",
              },
            ],
          },
          {
            id: 19,
            name: "Asian Handicap First Half",
            odds: [
              {
                value: "Home +0",
                odd: "1.58",
              },
              {
                value: "Away +0",
                odd: "2.35",
              },
              {
                value: "Home -0.25",
                odd: "2.68",
              },
              {
                value: "Away -0.25",
                odd: "1.45",
              },
              {
                value: "Home +0.25",
                odd: "1.43",
              },
              {
                value: "Away +0.25",
                odd: "2.75",
              },
              {
                value: "Home -0.5",
                odd: "3.55",
              },
              {
                value: "Away -0.5",
                odd: "1.28",
              },
              {
                value: "Home +0.5",
                odd: "1.28",
              },
              {
                value: "Away +0.5",
                odd: "3.55",
              },
              {
                value: "Home -0.75",
                odd: "5.00",
              },
              {
                value: "Away -0.75",
                odd: "1.17",
              },
              {
                value: "Home +0.75",
                odd: "1.16",
              },
              {
                value: "Away +0.75",
                odd: "5.25",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.29",
              },
              {
                value: "Home/Away",
                odd: "1.83",
              },
              {
                value: "Draw/Away",
                odd: "1.29",
              },
            ],
          },
          {
            id: 34,
            name: "Both Teams Score - First Half",
            odds: [
              {
                value: "Yes",
                odd: "7.50",
              },
              {
                value: "No",
                odd: "1.07",
              },
            ],
          },
          {
            id: 35,
            name: "Both Teams To Score - Second Half",
            odds: [
              {
                value: "Yes",
                odd: "5.00",
              },
              {
                value: "No",
                odd: "1.14",
              },
            ],
          },
          {
            id: 36,
            name: "Win To Nil",
            odds: [
              {
                value: "Home",
                odd: "3.00",
              },
              {
                value: "Away",
                odd: "4.75",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.38",
              },
              {
                value: "Even",
                odd: "1.57",
              },
            ],
          },
          {
            id: 39,
            name: "To Win Either Half",
            odds: [
              {
                value: "Home",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "2.10",
              },
            ],
          },
          {
            id: 40,
            name: "Home Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "4.50",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.63",
              },
              {
                value: "more 3",
                odd: "6.50",
              },
            ],
          },
          {
            id: 41,
            name: "Away Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "6.00",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.00",
              },
              {
                value: "more 3",
                odd: "8.50",
              },
            ],
          },
          {
            id: 24,
            name: "Results/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "7.00",
              },
              {
                value: "Draw/Yes",
                odd: "5.50",
              },
              {
                value: "Away/Yes",
                odd: "10.00",
              },
              {
                value: "Home/No",
                odd: "3.00",
              },
              {
                value: "Draw/No",
                odd: "5.50",
              },
              {
                value: "Away/No",
                odd: "4.75",
              },
            ],
          },
          {
            id: 25,
            name: "Result/Total Goals",
            odds: [
              {
                value: "Home/Over 2.5",
                odd: "4.75",
              },
              {
                value: "Away/Over 2.5",
                odd: "7.50",
              },
              {
                value: "Home/Under 2.5",
                odd: "3.75",
              },
              {
                value: "Away/Under 2.5",
                odd: "5.50",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.10",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 48,
            name: "To Score In Both Halves By Teams",
            odds: [
              {
                value: "Home",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 50,
            name: "Goal Line",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.75",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.63",
              },
              {
                value: "Under 1.5",
                odd: "2.25",
              },
              {
                value: "Over 2.5",
                odd: "2.75",
              },
              {
                value: "Under 2.5",
                odd: "1.43",
              },
              {
                value: "Over 2",
                odd: "2.10",
              },
              {
                value: "Under 2",
                odd: "1.70",
              },
              {
                value: "Over 3",
                odd: "4.50",
              },
              {
                value: "Under 3",
                odd: "1.19",
              },
              {
                value: "Over 2.25",
                odd: "2.43",
              },
              {
                value: "Under 2.25",
                odd: "1.53",
              },
              {
                value: "Over 3.25",
                odd: "5.25",
              },
              {
                value: "Under 3.25",
                odd: "1.16",
              },
              {
                value: "Over 2.75",
                odd: "3.45",
              },
              {
                value: "Under 2.75",
                odd: "1.30",
              },
              {
                value: "Over 1.25",
                odd: "1.43",
              },
              {
                value: "Under 1.25",
                odd: "2.75",
              },
              {
                value: "Over 1.75",
                odd: "1.80",
              },
              {
                value: "Under 1.75",
                odd: "2.00",
              },
              {
                value: "Over 1",
                odd: "1.22",
              },
              {
                value: "Under 1",
                odd: "4.15",
              },
              {
                value: "Over 0.75",
                odd: "1.18",
              },
              {
                value: "Under 0.75",
                odd: "4.80",
              },
            ],
          },
          {
            id: 72,
            name: "Goal Line (1st Half)",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.23",
              },
              {
                value: "Over 1.25",
                odd: "3.45",
              },
              {
                value: "Under 1.25",
                odd: "1.30",
              },
              {
                value: "Over 1.75",
                odd: "5.75",
              },
              {
                value: "Under 1.75",
                odd: "1.14",
              },
              {
                value: "Over 1",
                odd: "2.75",
              },
              {
                value: "Under 1",
                odd: "1.43",
              },
              {
                value: "Over 0.75",
                odd: "1.98",
              },
              {
                value: "Under 0.75",
                odd: "1.83",
              },
            ],
          },
          {
            id: 52,
            name: "Halftime Result/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "34.00",
              },
              {
                value: "Draw/Yes",
                odd: "12.00",
              },
              {
                value: "Away/Yes",
                odd: "34.00",
              },
              {
                value: "Home/No",
                odd: "3.75",
              },
              {
                value: "Draw/No",
                odd: "2.10",
              },
              {
                value: "Away/No",
                odd: "3.75",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592149,
          date: "2020-09-14T19:15:00+00:00",
          home: {
            id: 51,
            name: "Brighton",
          },
          away: {
            id: 49,
            name: "Chelsea",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "2.15",
              },
              {
                value: "Draw",
                odd: "2.90",
              },
              {
                value: "Away",
                odd: "3.25",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.53",
              },
              {
                value: "Away",
                odd: "2.38",
              },
            ],
          },
          {
            id: 3,
            name: "Second Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.63",
              },
              {
                value: "Draw",
                odd: "2.20",
              },
              {
                value: "Away",
                odd: "3.60",
              },
            ],
          },
          {
            id: 4,
            name: "Asian Handicap",
            odds: [
              {
                value: "Home +0",
                odd: "1.88",
              },
              {
                value: "Away +0",
                odd: "1.93",
              },
              {
                value: "Home -0.25",
                odd: "1.90",
              },
              {
                value: "Away -0.25",
                odd: "1.90",
              },
              {
                value: "Home +0.25",
                odd: "1.40",
              },
              {
                value: "Away +0.25",
                odd: "2.85",
              },
              {
                value: "Home -0.5",
                odd: "2.20",
              },
              {
                value: "Away -0.5",
                odd: "1.65",
              },
              {
                value: "Home +0.5",
                odd: "1.33",
              },
              {
                value: "Away +0.5",
                odd: "3.30",
              },
              {
                value: "Home -0.75",
                odd: "2.60",
              },
              {
                value: "Away -0.75",
                odd: "1.48",
              },
              {
                value: "Home +0.75",
                odd: "1.22",
              },
              {
                value: "Away +0.75",
                odd: "4.15",
              },
              {
                value: "Home -1",
                odd: "3.45",
              },
              {
                value: "Away -1",
                odd: "1.30",
              },
              {
                value: "Home +1",
                odd: "1.11",
              },
              {
                value: "Away +1",
                odd: "6.60",
              },
              {
                value: "Home -1.5",
                odd: "4.40",
              },
              {
                value: "Away -1.5",
                odd: "1.20",
              },
              {
                value: "Home +1.5",
                odd: "1.13",
              },
              {
                value: "Away +1.5",
                odd: "5.90",
              },
              {
                value: "Home -1.25",
                odd: "3.90",
              },
              {
                value: "Away -1.25",
                odd: "1.24",
              },
              {
                value: "Home -1.75",
                odd: "5.90",
              },
              {
                value: "Away -1.75",
                odd: "1.13",
              },
              {
                value: "Home +1.25",
                odd: "1.10",
              },
              {
                value: "Away +1.25",
                odd: "7.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.00",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.62",
              },
              {
                value: "Under 1.5",
                odd: "2.20",
              },
              {
                value: "Over 4.5",
                odd: "9.00",
              },
              {
                value: "Under 4.5",
                odd: "1.04",
              },
              {
                value: "Over 2.5",
                odd: "2.88",
              },
              {
                value: "Under 2.5",
                odd: "1.40",
              },
              {
                value: "Over 0.5",
                odd: "1.13",
              },
              {
                value: "Under 0.5",
                odd: "5.50",
              },
              {
                value: "Over 5.5",
                odd: "15.00",
              },
              {
                value: "Under 5.5",
                odd: "1.01",
              },
            ],
          },
          {
            id: 6,
            name: "Goals Over/Under First Half",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "13.00",
              },
              {
                value: "Under 2.5",
                odd: "1.04",
              },
              {
                value: "Over 0.5",
                odd: "1.67",
              },
              {
                value: "Under 0.5",
                odd: "2.10",
              },
            ],
          },
          {
            id: 26,
            name: "Goals Over/Under - Second Half",
            odds: [
              {
                value: "Over 3.5",
                odd: "19.00",
              },
              {
                value: "Under 3.5",
                odd: "1.02",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "7.00",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
              {
                value: "Over 0.5",
                odd: "1.40",
              },
              {
                value: "Under 0.5",
                odd: "2.75",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "19.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "7.00",
              },
              {
                value: "Draw/Draw",
                odd: "4.00",
              },
              {
                value: "Home/Home",
                odd: "4.33",
              },
              {
                value: "Draw/Home",
                odd: "5.00",
              },
              {
                value: "Away/Home",
                odd: "26.00",
              },
              {
                value: "Away/Draw",
                odd: "15.00",
              },
              {
                value: "Away/Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 8,
            name: "Both Teams Score",
            odds: [
              {
                value: "Yes",
                odd: "2.50",
              },
              {
                value: "No",
                odd: "1.50",
              },
            ],
          },
          {
            id: 9,
            name: "Handicap Result",
            odds: [
              {
                value: "Home -1",
                odd: "4.33",
              },
              {
                value: "Away -1",
                odd: "1.62",
              },
              {
                value: "Draw -1",
                odd: "3.75",
              },
              {
                value: "Home +1",
                odd: "1.30",
              },
              {
                value: "Away +1",
                odd: "7.00",
              },
              {
                value: "Draw +1",
                odd: "4.75",
              },
              {
                value: "Home +2",
                odd: "1.07",
              },
              {
                value: "Draw +2",
                odd: "11.00",
              },
              {
                value: "Away +2",
                odd: "19.00",
              },
              {
                value: "Home -2",
                odd: "9.00",
              },
              {
                value: "Draw -2",
                odd: "6.50",
              },
              {
                value: "Away -2",
                odd: "1.18",
              },
              {
                value: "Home -3",
                odd: "23.00",
              },
              {
                value: "Draw -3",
                odd: "15.00",
              },
              {
                value: "Away -3",
                odd: "1.05",
              },
              {
                value: "Home +3",
                odd: "1.03",
              },
              {
                value: "Draw +3",
                odd: "19.00",
              },
              {
                value: "Away +3",
                odd: "29.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "9.00",
              },
              {
                value: "2:1",
                odd: "12.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "26.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "4:1",
                odd: "51.00",
              },
              {
                value: "4:2",
                odd: "81.00",
              },
              {
                value: "5:0",
                odd: "67.00",
              },
              {
                value: "5:1",
                odd: "81.00",
              },
              {
                value: "6:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "5.50",
              },
              {
                value: "1:1",
                odd: "7.00",
              },
              {
                value: "2:2",
                odd: "23.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "7.50",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "34.00",
              },
              {
                value: "0:4",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "15.00",
              },
              {
                value: "1:3",
                odd: "34.00",
              },
              {
                value: "1:4",
                odd: "67.00",
              },
              {
                value: "2:3",
                odd: "51.00",
              },
            ],
          },
          {
            id: 11,
            name: "Highest Scoring Half",
            odds: [
              {
                value: "Draw",
                odd: "3.00",
              },
              {
                value: "1st Half",
                odd: "3.25",
              },
              {
                value: "2nd Half",
                odd: "2.20",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "4.75",
              },
              {
                value: "2:0",
                odd: "15.00",
              },
              {
                value: "2:1",
                odd: "41.00",
              },
              {
                value: "3:0",
                odd: "41.00",
              },
              {
                value: "3:1",
                odd: "81.00",
              },
              {
                value: "4:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "2.10",
              },
              {
                value: "1:1",
                odd: "12.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "4.75",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "41.00",
              },
              {
                value: "1:2",
                odd: "41.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.30",
              },
              {
                value: "Home/Away",
                odd: "1.36",
              },
              {
                value: "Draw/Away",
                odd: "1.62",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "3.50",
              },
              {
                value: "Draw",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "3.50",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Draw",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "2.63",
              },
            ],
          },
          {
            id: 15,
            name: "Team To Score Last",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Away",
                odd: "2.63",
              },
              {
                value: "No goal",
                odd: "5.50",
              },
            ],
          },
          {
            id: 32,
            name: "Win Both Halves",
            odds: [
              {
                value: "Home",
                odd: "10.00",
              },
              {
                value: "Away",
                odd: "13.00",
              },
            ],
          },
          {
            id: 16,
            name: "Total - Home",
            odds: [
              {
                value: "Over 3.5",
                odd: "10.50",
              },
              {
                value: "Under 3.5",
                odd: "1.03",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "6.50",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
            ],
          },
          {
            id: 17,
            name: "Total - Away",
            odds: [
              {
                value: "Over 3.5",
                odd: "15.00",
              },
              {
                value: "Under 3.5",
                odd: "1.01",
              },
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "8.50",
              },
              {
                value: "Under 2.5",
                odd: "1.05",
              },
            ],
          },
          {
            id: 18,
            name: "Handicap Result - First Half",
            odds: [
              {
                value: "Home -1",
                odd: "11.00",
              },
              {
                value: "Away -1",
                odd: "1.29",
              },
              {
                value: "Draw -1",
                odd: "4.33",
              },
              {
                value: "Home +1",
                odd: "1.29",
              },
              {
                value: "Away +1",
                odd: "12.00",
              },
              {
                value: "Draw +1",
                odd: "4.50",
              },
              {
                value: "Home -2",
                odd: "34.00",
              },
              {
                value: "Draw -2",
                odd: "15.00",
              },
              {
                value: "Away -2",
                odd: "1.04",
              },
            ],
          },
          {
            id: 19,
            name: "Asian Handicap First Half",
            odds: [
              {
                value: "Home +0",
                odd: "1.58",
              },
              {
                value: "Away +0",
                odd: "2.35",
              },
              {
                value: "Home -0.25",
                odd: "2.68",
              },
              {
                value: "Away -0.25",
                odd: "1.45",
              },
              {
                value: "Home +0.25",
                odd: "1.43",
              },
              {
                value: "Away +0.25",
                odd: "2.75",
              },
              {
                value: "Home -0.5",
                odd: "3.55",
              },
              {
                value: "Away -0.5",
                odd: "1.28",
              },
              {
                value: "Home +0.5",
                odd: "1.28",
              },
              {
                value: "Away +0.5",
                odd: "3.55",
              },
              {
                value: "Home -0.75",
                odd: "5.00",
              },
              {
                value: "Away -0.75",
                odd: "1.17",
              },
              {
                value: "Home +0.75",
                odd: "1.16",
              },
              {
                value: "Away +0.75",
                odd: "5.25",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.29",
              },
              {
                value: "Home/Away",
                odd: "1.83",
              },
              {
                value: "Draw/Away",
                odd: "1.29",
              },
            ],
          },
          {
            id: 34,
            name: "Both Teams Score - First Half",
            odds: [
              {
                value: "Yes",
                odd: "7.50",
              },
              {
                value: "No",
                odd: "1.07",
              },
            ],
          },
          {
            id: 35,
            name: "Both Teams To Score - Second Half",
            odds: [
              {
                value: "Yes",
                odd: "5.00",
              },
              {
                value: "No",
                odd: "1.14",
              },
            ],
          },
          {
            id: 36,
            name: "Win To Nil",
            odds: [
              {
                value: "Home",
                odd: "3.00",
              },
              {
                value: "Away",
                odd: "4.75",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.38",
              },
              {
                value: "Even",
                odd: "1.57",
              },
            ],
          },
          {
            id: 39,
            name: "To Win Either Half",
            odds: [
              {
                value: "Home",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "2.10",
              },
            ],
          },
          {
            id: 40,
            name: "Home Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "4.50",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.63",
              },
              {
                value: "more 3",
                odd: "6.50",
              },
            ],
          },
          {
            id: 41,
            name: "Away Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "6.00",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.00",
              },
              {
                value: "more 3",
                odd: "8.50",
              },
            ],
          },
          {
            id: 24,
            name: "Results/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "7.00",
              },
              {
                value: "Draw/Yes",
                odd: "5.50",
              },
              {
                value: "Away/Yes",
                odd: "10.00",
              },
              {
                value: "Home/No",
                odd: "3.00",
              },
              {
                value: "Draw/No",
                odd: "5.50",
              },
              {
                value: "Away/No",
                odd: "4.75",
              },
            ],
          },
          {
            id: 25,
            name: "Result/Total Goals",
            odds: [
              {
                value: "Home/Over 2.5",
                odd: "4.75",
              },
              {
                value: "Away/Over 2.5",
                odd: "7.50",
              },
              {
                value: "Home/Under 2.5",
                odd: "3.75",
              },
              {
                value: "Away/Under 2.5",
                odd: "5.50",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.10",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 48,
            name: "To Score In Both Halves By Teams",
            odds: [
              {
                value: "Home",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 50,
            name: "Goal Line",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.75",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.63",
              },
              {
                value: "Under 1.5",
                odd: "2.25",
              },
              {
                value: "Over 2.5",
                odd: "2.75",
              },
              {
                value: "Under 2.5",
                odd: "1.43",
              },
              {
                value: "Over 2",
                odd: "2.10",
              },
              {
                value: "Under 2",
                odd: "1.70",
              },
              {
                value: "Over 3",
                odd: "4.50",
              },
              {
                value: "Under 3",
                odd: "1.19",
              },
              {
                value: "Over 2.25",
                odd: "2.43",
              },
              {
                value: "Under 2.25",
                odd: "1.53",
              },
              {
                value: "Over 3.25",
                odd: "5.25",
              },
              {
                value: "Under 3.25",
                odd: "1.16",
              },
              {
                value: "Over 2.75",
                odd: "3.45",
              },
              {
                value: "Under 2.75",
                odd: "1.30",
              },
              {
                value: "Over 1.25",
                odd: "1.43",
              },
              {
                value: "Under 1.25",
                odd: "2.75",
              },
              {
                value: "Over 1.75",
                odd: "1.80",
              },
              {
                value: "Under 1.75",
                odd: "2.00",
              },
              {
                value: "Over 1",
                odd: "1.22",
              },
              {
                value: "Under 1",
                odd: "4.15",
              },
              {
                value: "Over 0.75",
                odd: "1.18",
              },
              {
                value: "Under 0.75",
                odd: "4.80",
              },
            ],
          },
          {
            id: 72,
            name: "Goal Line (1st Half)",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.23",
              },
              {
                value: "Over 1.25",
                odd: "3.45",
              },
              {
                value: "Under 1.25",
                odd: "1.30",
              },
              {
                value: "Over 1.75",
                odd: "5.75",
              },
              {
                value: "Under 1.75",
                odd: "1.14",
              },
              {
                value: "Over 1",
                odd: "2.75",
              },
              {
                value: "Under 1",
                odd: "1.43",
              },
              {
                value: "Over 0.75",
                odd: "1.98",
              },
              {
                value: "Under 0.75",
                odd: "1.83",
              },
            ],
          },
          {
            id: 52,
            name: "Halftime Result/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "34.00",
              },
              {
                value: "Draw/Yes",
                odd: "12.00",
              },
              {
                value: "Away/Yes",
                odd: "34.00",
              },
              {
                value: "Home/No",
                odd: "3.75",
              },
              {
                value: "Draw/No",
                odd: "2.10",
              },
              {
                value: "Away/No",
                odd: "3.75",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592150,
          date: "2020-09-14T17:00:00+00:00",
          home: {
            id: 62,
            name: "Sheffield Utd",
          },
          away: {
            id: 39,
            name: "Wolves",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "2.15",
              },
              {
                value: "Draw",
                odd: "2.90",
              },
              {
                value: "Away",
                odd: "3.25",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.53",
              },
              {
                value: "Away",
                odd: "2.38",
              },
            ],
          },
          {
            id: 3,
            name: "Second Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.63",
              },
              {
                value: "Draw",
                odd: "2.20",
              },
              {
                value: "Away",
                odd: "3.60",
              },
            ],
          },
          {
            id: 4,
            name: "Asian Handicap",
            odds: [
              {
                value: "Home +0",
                odd: "1.88",
              },
              {
                value: "Away +0",
                odd: "1.93",
              },
              {
                value: "Home -0.25",
                odd: "1.90",
              },
              {
                value: "Away -0.25",
                odd: "1.90",
              },
              {
                value: "Home +0.25",
                odd: "1.40",
              },
              {
                value: "Away +0.25",
                odd: "2.85",
              },
              {
                value: "Home -0.5",
                odd: "2.20",
              },
              {
                value: "Away -0.5",
                odd: "1.65",
              },
              {
                value: "Home +0.5",
                odd: "1.33",
              },
              {
                value: "Away +0.5",
                odd: "3.30",
              },
              {
                value: "Home -0.75",
                odd: "2.60",
              },
              {
                value: "Away -0.75",
                odd: "1.48",
              },
              {
                value: "Home +0.75",
                odd: "1.22",
              },
              {
                value: "Away +0.75",
                odd: "4.15",
              },
              {
                value: "Home -1",
                odd: "3.45",
              },
              {
                value: "Away -1",
                odd: "1.30",
              },
              {
                value: "Home +1",
                odd: "1.11",
              },
              {
                value: "Away +1",
                odd: "6.60",
              },
              {
                value: "Home -1.5",
                odd: "4.40",
              },
              {
                value: "Away -1.5",
                odd: "1.20",
              },
              {
                value: "Home +1.5",
                odd: "1.13",
              },
              {
                value: "Away +1.5",
                odd: "5.90",
              },
              {
                value: "Home -1.25",
                odd: "3.90",
              },
              {
                value: "Away -1.25",
                odd: "1.24",
              },
              {
                value: "Home -1.75",
                odd: "5.90",
              },
              {
                value: "Away -1.75",
                odd: "1.13",
              },
              {
                value: "Home +1.25",
                odd: "1.10",
              },
              {
                value: "Away +1.25",
                odd: "7.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.00",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.62",
              },
              {
                value: "Under 1.5",
                odd: "2.20",
              },
              {
                value: "Over 4.5",
                odd: "9.00",
              },
              {
                value: "Under 4.5",
                odd: "1.04",
              },
              {
                value: "Over 2.5",
                odd: "2.88",
              },
              {
                value: "Under 2.5",
                odd: "1.40",
              },
              {
                value: "Over 0.5",
                odd: "1.13",
              },
              {
                value: "Under 0.5",
                odd: "5.50",
              },
              {
                value: "Over 5.5",
                odd: "15.00",
              },
              {
                value: "Under 5.5",
                odd: "1.01",
              },
            ],
          },
          {
            id: 6,
            name: "Goals Over/Under First Half",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "13.00",
              },
              {
                value: "Under 2.5",
                odd: "1.04",
              },
              {
                value: "Over 0.5",
                odd: "1.67",
              },
              {
                value: "Under 0.5",
                odd: "2.10",
              },
            ],
          },
          {
            id: 26,
            name: "Goals Over/Under - Second Half",
            odds: [
              {
                value: "Over 3.5",
                odd: "19.00",
              },
              {
                value: "Under 3.5",
                odd: "1.02",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "7.00",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
              {
                value: "Over 0.5",
                odd: "1.40",
              },
              {
                value: "Under 0.5",
                odd: "2.75",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "19.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "7.00",
              },
              {
                value: "Draw/Draw",
                odd: "4.00",
              },
              {
                value: "Home/Home",
                odd: "4.33",
              },
              {
                value: "Draw/Home",
                odd: "5.00",
              },
              {
                value: "Away/Home",
                odd: "26.00",
              },
              {
                value: "Away/Draw",
                odd: "15.00",
              },
              {
                value: "Away/Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 8,
            name: "Both Teams Score",
            odds: [
              {
                value: "Yes",
                odd: "2.50",
              },
              {
                value: "No",
                odd: "1.50",
              },
            ],
          },
          {
            id: 9,
            name: "Handicap Result",
            odds: [
              {
                value: "Home -1",
                odd: "4.33",
              },
              {
                value: "Away -1",
                odd: "1.62",
              },
              {
                value: "Draw -1",
                odd: "3.75",
              },
              {
                value: "Home +1",
                odd: "1.30",
              },
              {
                value: "Away +1",
                odd: "7.00",
              },
              {
                value: "Draw +1",
                odd: "4.75",
              },
              {
                value: "Home +2",
                odd: "1.07",
              },
              {
                value: "Draw +2",
                odd: "11.00",
              },
              {
                value: "Away +2",
                odd: "19.00",
              },
              {
                value: "Home -2",
                odd: "9.00",
              },
              {
                value: "Draw -2",
                odd: "6.50",
              },
              {
                value: "Away -2",
                odd: "1.18",
              },
              {
                value: "Home -3",
                odd: "23.00",
              },
              {
                value: "Draw -3",
                odd: "15.00",
              },
              {
                value: "Away -3",
                odd: "1.05",
              },
              {
                value: "Home +3",
                odd: "1.03",
              },
              {
                value: "Draw +3",
                odd: "19.00",
              },
              {
                value: "Away +3",
                odd: "29.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "9.00",
              },
              {
                value: "2:1",
                odd: "12.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "26.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "4:1",
                odd: "51.00",
              },
              {
                value: "4:2",
                odd: "81.00",
              },
              {
                value: "5:0",
                odd: "67.00",
              },
              {
                value: "5:1",
                odd: "81.00",
              },
              {
                value: "6:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "5.50",
              },
              {
                value: "1:1",
                odd: "7.00",
              },
              {
                value: "2:2",
                odd: "23.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "7.50",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "34.00",
              },
              {
                value: "0:4",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "15.00",
              },
              {
                value: "1:3",
                odd: "34.00",
              },
              {
                value: "1:4",
                odd: "67.00",
              },
              {
                value: "2:3",
                odd: "51.00",
              },
            ],
          },
          {
            id: 11,
            name: "Highest Scoring Half",
            odds: [
              {
                value: "Draw",
                odd: "3.00",
              },
              {
                value: "1st Half",
                odd: "3.25",
              },
              {
                value: "2nd Half",
                odd: "2.20",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "4.75",
              },
              {
                value: "2:0",
                odd: "15.00",
              },
              {
                value: "2:1",
                odd: "41.00",
              },
              {
                value: "3:0",
                odd: "41.00",
              },
              {
                value: "3:1",
                odd: "81.00",
              },
              {
                value: "4:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "2.10",
              },
              {
                value: "1:1",
                odd: "12.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "4.75",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "41.00",
              },
              {
                value: "1:2",
                odd: "41.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.30",
              },
              {
                value: "Home/Away",
                odd: "1.36",
              },
              {
                value: "Draw/Away",
                odd: "1.62",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "3.50",
              },
              {
                value: "Draw",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "3.50",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Draw",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "2.63",
              },
            ],
          },
          {
            id: 15,
            name: "Team To Score Last",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Away",
                odd: "2.63",
              },
              {
                value: "No goal",
                odd: "5.50",
              },
            ],
          },
          {
            id: 32,
            name: "Win Both Halves",
            odds: [
              {
                value: "Home",
                odd: "10.00",
              },
              {
                value: "Away",
                odd: "13.00",
              },
            ],
          },
          {
            id: 16,
            name: "Total - Home",
            odds: [
              {
                value: "Over 3.5",
                odd: "10.50",
              },
              {
                value: "Under 3.5",
                odd: "1.03",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "6.50",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
            ],
          },
          {
            id: 17,
            name: "Total - Away",
            odds: [
              {
                value: "Over 3.5",
                odd: "15.00",
              },
              {
                value: "Under 3.5",
                odd: "1.01",
              },
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "8.50",
              },
              {
                value: "Under 2.5",
                odd: "1.05",
              },
            ],
          },
          {
            id: 18,
            name: "Handicap Result - First Half",
            odds: [
              {
                value: "Home -1",
                odd: "11.00",
              },
              {
                value: "Away -1",
                odd: "1.29",
              },
              {
                value: "Draw -1",
                odd: "4.33",
              },
              {
                value: "Home +1",
                odd: "1.29",
              },
              {
                value: "Away +1",
                odd: "12.00",
              },
              {
                value: "Draw +1",
                odd: "4.50",
              },
              {
                value: "Home -2",
                odd: "34.00",
              },
              {
                value: "Draw -2",
                odd: "15.00",
              },
              {
                value: "Away -2",
                odd: "1.04",
              },
            ],
          },
          {
            id: 19,
            name: "Asian Handicap First Half",
            odds: [
              {
                value: "Home +0",
                odd: "1.58",
              },
              {
                value: "Away +0",
                odd: "2.35",
              },
              {
                value: "Home -0.25",
                odd: "2.68",
              },
              {
                value: "Away -0.25",
                odd: "1.45",
              },
              {
                value: "Home +0.25",
                odd: "1.43",
              },
              {
                value: "Away +0.25",
                odd: "2.75",
              },
              {
                value: "Home -0.5",
                odd: "3.55",
              },
              {
                value: "Away -0.5",
                odd: "1.28",
              },
              {
                value: "Home +0.5",
                odd: "1.28",
              },
              {
                value: "Away +0.5",
                odd: "3.55",
              },
              {
                value: "Home -0.75",
                odd: "5.00",
              },
              {
                value: "Away -0.75",
                odd: "1.17",
              },
              {
                value: "Home +0.75",
                odd: "1.16",
              },
              {
                value: "Away +0.75",
                odd: "5.25",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.29",
              },
              {
                value: "Home/Away",
                odd: "1.83",
              },
              {
                value: "Draw/Away",
                odd: "1.29",
              },
            ],
          },
          {
            id: 34,
            name: "Both Teams Score - First Half",
            odds: [
              {
                value: "Yes",
                odd: "7.50",
              },
              {
                value: "No",
                odd: "1.07",
              },
            ],
          },
          {
            id: 35,
            name: "Both Teams To Score - Second Half",
            odds: [
              {
                value: "Yes",
                odd: "5.00",
              },
              {
                value: "No",
                odd: "1.14",
              },
            ],
          },
          {
            id: 36,
            name: "Win To Nil",
            odds: [
              {
                value: "Home",
                odd: "3.00",
              },
              {
                value: "Away",
                odd: "4.75",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.38",
              },
              {
                value: "Even",
                odd: "1.57",
              },
            ],
          },
          {
            id: 39,
            name: "To Win Either Half",
            odds: [
              {
                value: "Home",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "2.10",
              },
            ],
          },
          {
            id: 40,
            name: "Home Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "4.50",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.63",
              },
              {
                value: "more 3",
                odd: "6.50",
              },
            ],
          },
          {
            id: 41,
            name: "Away Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "6.00",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.00",
              },
              {
                value: "more 3",
                odd: "8.50",
              },
            ],
          },
          {
            id: 24,
            name: "Results/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "7.00",
              },
              {
                value: "Draw/Yes",
                odd: "5.50",
              },
              {
                value: "Away/Yes",
                odd: "10.00",
              },
              {
                value: "Home/No",
                odd: "3.00",
              },
              {
                value: "Draw/No",
                odd: "5.50",
              },
              {
                value: "Away/No",
                odd: "4.75",
              },
            ],
          },
          {
            id: 25,
            name: "Result/Total Goals",
            odds: [
              {
                value: "Home/Over 2.5",
                odd: "4.75",
              },
              {
                value: "Away/Over 2.5",
                odd: "7.50",
              },
              {
                value: "Home/Under 2.5",
                odd: "3.75",
              },
              {
                value: "Away/Under 2.5",
                odd: "5.50",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.10",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 48,
            name: "To Score In Both Halves By Teams",
            odds: [
              {
                value: "Home",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 50,
            name: "Goal Line",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.75",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.63",
              },
              {
                value: "Under 1.5",
                odd: "2.25",
              },
              {
                value: "Over 2.5",
                odd: "2.75",
              },
              {
                value: "Under 2.5",
                odd: "1.43",
              },
              {
                value: "Over 2",
                odd: "2.10",
              },
              {
                value: "Under 2",
                odd: "1.70",
              },
              {
                value: "Over 3",
                odd: "4.50",
              },
              {
                value: "Under 3",
                odd: "1.19",
              },
              {
                value: "Over 2.25",
                odd: "2.43",
              },
              {
                value: "Under 2.25",
                odd: "1.53",
              },
              {
                value: "Over 3.25",
                odd: "5.25",
              },
              {
                value: "Under 3.25",
                odd: "1.16",
              },
              {
                value: "Over 2.75",
                odd: "3.45",
              },
              {
                value: "Under 2.75",
                odd: "1.30",
              },
              {
                value: "Over 1.25",
                odd: "1.43",
              },
              {
                value: "Under 1.25",
                odd: "2.75",
              },
              {
                value: "Over 1.75",
                odd: "1.80",
              },
              {
                value: "Under 1.75",
                odd: "2.00",
              },
              {
                value: "Over 1",
                odd: "1.22",
              },
              {
                value: "Under 1",
                odd: "4.15",
              },
              {
                value: "Over 0.75",
                odd: "1.18",
              },
              {
                value: "Under 0.75",
                odd: "4.80",
              },
            ],
          },
          {
            id: 72,
            name: "Goal Line (1st Half)",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.23",
              },
              {
                value: "Over 1.25",
                odd: "3.45",
              },
              {
                value: "Under 1.25",
                odd: "1.30",
              },
              {
                value: "Over 1.75",
                odd: "5.75",
              },
              {
                value: "Under 1.75",
                odd: "1.14",
              },
              {
                value: "Over 1",
                odd: "2.75",
              },
              {
                value: "Under 1",
                odd: "1.43",
              },
              {
                value: "Over 0.75",
                odd: "1.98",
              },
              {
                value: "Under 0.75",
                odd: "1.83",
              },
            ],
          },
          {
            id: 52,
            name: "Halftime Result/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "34.00",
              },
              {
                value: "Draw/Yes",
                odd: "12.00",
              },
              {
                value: "Away/Yes",
                odd: "34.00",
              },
              {
                value: "Home/No",
                odd: "3.75",
              },
              {
                value: "Draw/No",
                odd: "2.10",
              },
              {
                value: "Away/No",
                odd: "3.75",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592151,
          date: "2020-09-19T19:00:00+00:00",
          home: {
            id: 42,
            name: "Arsenal",
          },
          away: {
            id: 48,
            name: "West Ham",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "2.15",
              },
              {
                value: "Draw",
                odd: "2.90",
              },
              {
                value: "Away",
                odd: "3.25",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.53",
              },
              {
                value: "Away",
                odd: "2.38",
              },
            ],
          },
          {
            id: 3,
            name: "Second Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.63",
              },
              {
                value: "Draw",
                odd: "2.20",
              },
              {
                value: "Away",
                odd: "3.60",
              },
            ],
          },
          {
            id: 4,
            name: "Asian Handicap",
            odds: [
              {
                value: "Home +0",
                odd: "1.88",
              },
              {
                value: "Away +0",
                odd: "1.93",
              },
              {
                value: "Home -0.25",
                odd: "1.90",
              },
              {
                value: "Away -0.25",
                odd: "1.90",
              },
              {
                value: "Home +0.25",
                odd: "1.40",
              },
              {
                value: "Away +0.25",
                odd: "2.85",
              },
              {
                value: "Home -0.5",
                odd: "2.20",
              },
              {
                value: "Away -0.5",
                odd: "1.65",
              },
              {
                value: "Home +0.5",
                odd: "1.33",
              },
              {
                value: "Away +0.5",
                odd: "3.30",
              },
              {
                value: "Home -0.75",
                odd: "2.60",
              },
              {
                value: "Away -0.75",
                odd: "1.48",
              },
              {
                value: "Home +0.75",
                odd: "1.22",
              },
              {
                value: "Away +0.75",
                odd: "4.15",
              },
              {
                value: "Home -1",
                odd: "3.45",
              },
              {
                value: "Away -1",
                odd: "1.30",
              },
              {
                value: "Home +1",
                odd: "1.11",
              },
              {
                value: "Away +1",
                odd: "6.60",
              },
              {
                value: "Home -1.5",
                odd: "4.40",
              },
              {
                value: "Away -1.5",
                odd: "1.20",
              },
              {
                value: "Home +1.5",
                odd: "1.13",
              },
              {
                value: "Away +1.5",
                odd: "5.90",
              },
              {
                value: "Home -1.25",
                odd: "3.90",
              },
              {
                value: "Away -1.25",
                odd: "1.24",
              },
              {
                value: "Home -1.75",
                odd: "5.90",
              },
              {
                value: "Away -1.75",
                odd: "1.13",
              },
              {
                value: "Home +1.25",
                odd: "1.10",
              },
              {
                value: "Away +1.25",
                odd: "7.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.00",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.62",
              },
              {
                value: "Under 1.5",
                odd: "2.20",
              },
              {
                value: "Over 4.5",
                odd: "9.00",
              },
              {
                value: "Under 4.5",
                odd: "1.04",
              },
              {
                value: "Over 2.5",
                odd: "2.88",
              },
              {
                value: "Under 2.5",
                odd: "1.40",
              },
              {
                value: "Over 0.5",
                odd: "1.13",
              },
              {
                value: "Under 0.5",
                odd: "5.50",
              },
              {
                value: "Over 5.5",
                odd: "15.00",
              },
              {
                value: "Under 5.5",
                odd: "1.01",
              },
            ],
          },
          {
            id: 6,
            name: "Goals Over/Under First Half",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "13.00",
              },
              {
                value: "Under 2.5",
                odd: "1.04",
              },
              {
                value: "Over 0.5",
                odd: "1.67",
              },
              {
                value: "Under 0.5",
                odd: "2.10",
              },
            ],
          },
          {
            id: 26,
            name: "Goals Over/Under - Second Half",
            odds: [
              {
                value: "Over 3.5",
                odd: "19.00",
              },
              {
                value: "Under 3.5",
                odd: "1.02",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "7.00",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
              {
                value: "Over 0.5",
                odd: "1.40",
              },
              {
                value: "Under 0.5",
                odd: "2.75",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "19.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "7.00",
              },
              {
                value: "Draw/Draw",
                odd: "4.00",
              },
              {
                value: "Home/Home",
                odd: "4.33",
              },
              {
                value: "Draw/Home",
                odd: "5.00",
              },
              {
                value: "Away/Home",
                odd: "26.00",
              },
              {
                value: "Away/Draw",
                odd: "15.00",
              },
              {
                value: "Away/Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 8,
            name: "Both Teams Score",
            odds: [
              {
                value: "Yes",
                odd: "2.50",
              },
              {
                value: "No",
                odd: "1.50",
              },
            ],
          },
          {
            id: 9,
            name: "Handicap Result",
            odds: [
              {
                value: "Home -1",
                odd: "4.33",
              },
              {
                value: "Away -1",
                odd: "1.62",
              },
              {
                value: "Draw -1",
                odd: "3.75",
              },
              {
                value: "Home +1",
                odd: "1.30",
              },
              {
                value: "Away +1",
                odd: "7.00",
              },
              {
                value: "Draw +1",
                odd: "4.75",
              },
              {
                value: "Home +2",
                odd: "1.07",
              },
              {
                value: "Draw +2",
                odd: "11.00",
              },
              {
                value: "Away +2",
                odd: "19.00",
              },
              {
                value: "Home -2",
                odd: "9.00",
              },
              {
                value: "Draw -2",
                odd: "6.50",
              },
              {
                value: "Away -2",
                odd: "1.18",
              },
              {
                value: "Home -3",
                odd: "23.00",
              },
              {
                value: "Draw -3",
                odd: "15.00",
              },
              {
                value: "Away -3",
                odd: "1.05",
              },
              {
                value: "Home +3",
                odd: "1.03",
              },
              {
                value: "Draw +3",
                odd: "19.00",
              },
              {
                value: "Away +3",
                odd: "29.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "9.00",
              },
              {
                value: "2:1",
                odd: "12.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "26.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "4:1",
                odd: "51.00",
              },
              {
                value: "4:2",
                odd: "81.00",
              },
              {
                value: "5:0",
                odd: "67.00",
              },
              {
                value: "5:1",
                odd: "81.00",
              },
              {
                value: "6:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "5.50",
              },
              {
                value: "1:1",
                odd: "7.00",
              },
              {
                value: "2:2",
                odd: "23.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "7.50",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "34.00",
              },
              {
                value: "0:4",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "15.00",
              },
              {
                value: "1:3",
                odd: "34.00",
              },
              {
                value: "1:4",
                odd: "67.00",
              },
              {
                value: "2:3",
                odd: "51.00",
              },
            ],
          },
          {
            id: 11,
            name: "Highest Scoring Half",
            odds: [
              {
                value: "Draw",
                odd: "3.00",
              },
              {
                value: "1st Half",
                odd: "3.25",
              },
              {
                value: "2nd Half",
                odd: "2.20",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "4.75",
              },
              {
                value: "2:0",
                odd: "15.00",
              },
              {
                value: "2:1",
                odd: "41.00",
              },
              {
                value: "3:0",
                odd: "41.00",
              },
              {
                value: "3:1",
                odd: "81.00",
              },
              {
                value: "4:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "2.10",
              },
              {
                value: "1:1",
                odd: "12.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "4.75",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "41.00",
              },
              {
                value: "1:2",
                odd: "41.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.30",
              },
              {
                value: "Home/Away",
                odd: "1.36",
              },
              {
                value: "Draw/Away",
                odd: "1.62",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "3.50",
              },
              {
                value: "Draw",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "3.50",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Draw",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "2.63",
              },
            ],
          },
          {
            id: 15,
            name: "Team To Score Last",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Away",
                odd: "2.63",
              },
              {
                value: "No goal",
                odd: "5.50",
              },
            ],
          },
          {
            id: 32,
            name: "Win Both Halves",
            odds: [
              {
                value: "Home",
                odd: "10.00",
              },
              {
                value: "Away",
                odd: "13.00",
              },
            ],
          },
          {
            id: 16,
            name: "Total - Home",
            odds: [
              {
                value: "Over 3.5",
                odd: "10.50",
              },
              {
                value: "Under 3.5",
                odd: "1.03",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "6.50",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
            ],
          },
          {
            id: 17,
            name: "Total - Away",
            odds: [
              {
                value: "Over 3.5",
                odd: "15.00",
              },
              {
                value: "Under 3.5",
                odd: "1.01",
              },
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "8.50",
              },
              {
                value: "Under 2.5",
                odd: "1.05",
              },
            ],
          },
          {
            id: 18,
            name: "Handicap Result - First Half",
            odds: [
              {
                value: "Home -1",
                odd: "11.00",
              },
              {
                value: "Away -1",
                odd: "1.29",
              },
              {
                value: "Draw -1",
                odd: "4.33",
              },
              {
                value: "Home +1",
                odd: "1.29",
              },
              {
                value: "Away +1",
                odd: "12.00",
              },
              {
                value: "Draw +1",
                odd: "4.50",
              },
              {
                value: "Home -2",
                odd: "34.00",
              },
              {
                value: "Draw -2",
                odd: "15.00",
              },
              {
                value: "Away -2",
                odd: "1.04",
              },
            ],
          },
          {
            id: 19,
            name: "Asian Handicap First Half",
            odds: [
              {
                value: "Home +0",
                odd: "1.58",
              },
              {
                value: "Away +0",
                odd: "2.35",
              },
              {
                value: "Home -0.25",
                odd: "2.68",
              },
              {
                value: "Away -0.25",
                odd: "1.45",
              },
              {
                value: "Home +0.25",
                odd: "1.43",
              },
              {
                value: "Away +0.25",
                odd: "2.75",
              },
              {
                value: "Home -0.5",
                odd: "3.55",
              },
              {
                value: "Away -0.5",
                odd: "1.28",
              },
              {
                value: "Home +0.5",
                odd: "1.28",
              },
              {
                value: "Away +0.5",
                odd: "3.55",
              },
              {
                value: "Home -0.75",
                odd: "5.00",
              },
              {
                value: "Away -0.75",
                odd: "1.17",
              },
              {
                value: "Home +0.75",
                odd: "1.16",
              },
              {
                value: "Away +0.75",
                odd: "5.25",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.29",
              },
              {
                value: "Home/Away",
                odd: "1.83",
              },
              {
                value: "Draw/Away",
                odd: "1.29",
              },
            ],
          },
          {
            id: 34,
            name: "Both Teams Score - First Half",
            odds: [
              {
                value: "Yes",
                odd: "7.50",
              },
              {
                value: "No",
                odd: "1.07",
              },
            ],
          },
          {
            id: 35,
            name: "Both Teams To Score - Second Half",
            odds: [
              {
                value: "Yes",
                odd: "5.00",
              },
              {
                value: "No",
                odd: "1.14",
              },
            ],
          },
          {
            id: 36,
            name: "Win To Nil",
            odds: [
              {
                value: "Home",
                odd: "3.00",
              },
              {
                value: "Away",
                odd: "4.75",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.38",
              },
              {
                value: "Even",
                odd: "1.57",
              },
            ],
          },
          {
            id: 39,
            name: "To Win Either Half",
            odds: [
              {
                value: "Home",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "2.10",
              },
            ],
          },
          {
            id: 40,
            name: "Home Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "4.50",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.63",
              },
              {
                value: "more 3",
                odd: "6.50",
              },
            ],
          },
          {
            id: 41,
            name: "Away Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "6.00",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.00",
              },
              {
                value: "more 3",
                odd: "8.50",
              },
            ],
          },
          {
            id: 24,
            name: "Results/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "7.00",
              },
              {
                value: "Draw/Yes",
                odd: "5.50",
              },
              {
                value: "Away/Yes",
                odd: "10.00",
              },
              {
                value: "Home/No",
                odd: "3.00",
              },
              {
                value: "Draw/No",
                odd: "5.50",
              },
              {
                value: "Away/No",
                odd: "4.75",
              },
            ],
          },
          {
            id: 25,
            name: "Result/Total Goals",
            odds: [
              {
                value: "Home/Over 2.5",
                odd: "4.75",
              },
              {
                value: "Away/Over 2.5",
                odd: "7.50",
              },
              {
                value: "Home/Under 2.5",
                odd: "3.75",
              },
              {
                value: "Away/Under 2.5",
                odd: "5.50",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.10",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 48,
            name: "To Score In Both Halves By Teams",
            odds: [
              {
                value: "Home",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 50,
            name: "Goal Line",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.75",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.63",
              },
              {
                value: "Under 1.5",
                odd: "2.25",
              },
              {
                value: "Over 2.5",
                odd: "2.75",
              },
              {
                value: "Under 2.5",
                odd: "1.43",
              },
              {
                value: "Over 2",
                odd: "2.10",
              },
              {
                value: "Under 2",
                odd: "1.70",
              },
              {
                value: "Over 3",
                odd: "4.50",
              },
              {
                value: "Under 3",
                odd: "1.19",
              },
              {
                value: "Over 2.25",
                odd: "2.43",
              },
              {
                value: "Under 2.25",
                odd: "1.53",
              },
              {
                value: "Over 3.25",
                odd: "5.25",
              },
              {
                value: "Under 3.25",
                odd: "1.16",
              },
              {
                value: "Over 2.75",
                odd: "3.45",
              },
              {
                value: "Under 2.75",
                odd: "1.30",
              },
              {
                value: "Over 1.25",
                odd: "1.43",
              },
              {
                value: "Under 1.25",
                odd: "2.75",
              },
              {
                value: "Over 1.75",
                odd: "1.80",
              },
              {
                value: "Under 1.75",
                odd: "2.00",
              },
              {
                value: "Over 1",
                odd: "1.22",
              },
              {
                value: "Under 1",
                odd: "4.15",
              },
              {
                value: "Over 0.75",
                odd: "1.18",
              },
              {
                value: "Under 0.75",
                odd: "4.80",
              },
            ],
          },
          {
            id: 72,
            name: "Goal Line (1st Half)",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.23",
              },
              {
                value: "Over 1.25",
                odd: "3.45",
              },
              {
                value: "Under 1.25",
                odd: "1.30",
              },
              {
                value: "Over 1.75",
                odd: "5.75",
              },
              {
                value: "Under 1.75",
                odd: "1.14",
              },
              {
                value: "Over 1",
                odd: "2.75",
              },
              {
                value: "Under 1",
                odd: "1.43",
              },
              {
                value: "Over 0.75",
                odd: "1.98",
              },
              {
                value: "Under 0.75",
                odd: "1.83",
              },
            ],
          },
          {
            id: 52,
            name: "Halftime Result/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "34.00",
              },
              {
                value: "Draw/Yes",
                odd: "12.00",
              },
              {
                value: "Away/Yes",
                odd: "34.00",
              },
              {
                value: "Home/No",
                odd: "3.75",
              },
              {
                value: "Draw/No",
                odd: "2.10",
              },
              {
                value: "Away/No",
                odd: "3.75",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592152,
          date: "2020-09-21T17:00:00+00:00",
          home: {
            id: 66,
            name: "Aston Villa",
          },
          away: {
            id: 62,
            name: "Sheffield Utd",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "2.15",
              },
              {
                value: "Draw",
                odd: "2.90",
              },
              {
                value: "Away",
                odd: "3.25",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.53",
              },
              {
                value: "Away",
                odd: "2.38",
              },
            ],
          },
          {
            id: 3,
            name: "Second Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.63",
              },
              {
                value: "Draw",
                odd: "2.20",
              },
              {
                value: "Away",
                odd: "3.60",
              },
            ],
          },
          {
            id: 4,
            name: "Asian Handicap",
            odds: [
              {
                value: "Home +0",
                odd: "1.88",
              },
              {
                value: "Away +0",
                odd: "1.93",
              },
              {
                value: "Home -0.25",
                odd: "1.90",
              },
              {
                value: "Away -0.25",
                odd: "1.90",
              },
              {
                value: "Home +0.25",
                odd: "1.40",
              },
              {
                value: "Away +0.25",
                odd: "2.85",
              },
              {
                value: "Home -0.5",
                odd: "2.20",
              },
              {
                value: "Away -0.5",
                odd: "1.65",
              },
              {
                value: "Home +0.5",
                odd: "1.33",
              },
              {
                value: "Away +0.5",
                odd: "3.30",
              },
              {
                value: "Home -0.75",
                odd: "2.60",
              },
              {
                value: "Away -0.75",
                odd: "1.48",
              },
              {
                value: "Home +0.75",
                odd: "1.22",
              },
              {
                value: "Away +0.75",
                odd: "4.15",
              },
              {
                value: "Home -1",
                odd: "3.45",
              },
              {
                value: "Away -1",
                odd: "1.30",
              },
              {
                value: "Home +1",
                odd: "1.11",
              },
              {
                value: "Away +1",
                odd: "6.60",
              },
              {
                value: "Home -1.5",
                odd: "4.40",
              },
              {
                value: "Away -1.5",
                odd: "1.20",
              },
              {
                value: "Home +1.5",
                odd: "1.13",
              },
              {
                value: "Away +1.5",
                odd: "5.90",
              },
              {
                value: "Home -1.25",
                odd: "3.90",
              },
              {
                value: "Away -1.25",
                odd: "1.24",
              },
              {
                value: "Home -1.75",
                odd: "5.90",
              },
              {
                value: "Away -1.75",
                odd: "1.13",
              },
              {
                value: "Home +1.25",
                odd: "1.10",
              },
              {
                value: "Away +1.25",
                odd: "7.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.00",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.62",
              },
              {
                value: "Under 1.5",
                odd: "2.20",
              },
              {
                value: "Over 4.5",
                odd: "9.00",
              },
              {
                value: "Under 4.5",
                odd: "1.04",
              },
              {
                value: "Over 2.5",
                odd: "2.88",
              },
              {
                value: "Under 2.5",
                odd: "1.40",
              },
              {
                value: "Over 0.5",
                odd: "1.13",
              },
              {
                value: "Under 0.5",
                odd: "5.50",
              },
              {
                value: "Over 5.5",
                odd: "15.00",
              },
              {
                value: "Under 5.5",
                odd: "1.01",
              },
            ],
          },
          {
            id: 6,
            name: "Goals Over/Under First Half",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "13.00",
              },
              {
                value: "Under 2.5",
                odd: "1.04",
              },
              {
                value: "Over 0.5",
                odd: "1.67",
              },
              {
                value: "Under 0.5",
                odd: "2.10",
              },
            ],
          },
          {
            id: 26,
            name: "Goals Over/Under - Second Half",
            odds: [
              {
                value: "Over 3.5",
                odd: "19.00",
              },
              {
                value: "Under 3.5",
                odd: "1.02",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "7.00",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
              {
                value: "Over 0.5",
                odd: "1.40",
              },
              {
                value: "Under 0.5",
                odd: "2.75",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "19.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "7.00",
              },
              {
                value: "Draw/Draw",
                odd: "4.00",
              },
              {
                value: "Home/Home",
                odd: "4.33",
              },
              {
                value: "Draw/Home",
                odd: "5.00",
              },
              {
                value: "Away/Home",
                odd: "26.00",
              },
              {
                value: "Away/Draw",
                odd: "15.00",
              },
              {
                value: "Away/Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 8,
            name: "Both Teams Score",
            odds: [
              {
                value: "Yes",
                odd: "2.50",
              },
              {
                value: "No",
                odd: "1.50",
              },
            ],
          },
          {
            id: 9,
            name: "Handicap Result",
            odds: [
              {
                value: "Home -1",
                odd: "4.33",
              },
              {
                value: "Away -1",
                odd: "1.62",
              },
              {
                value: "Draw -1",
                odd: "3.75",
              },
              {
                value: "Home +1",
                odd: "1.30",
              },
              {
                value: "Away +1",
                odd: "7.00",
              },
              {
                value: "Draw +1",
                odd: "4.75",
              },
              {
                value: "Home +2",
                odd: "1.07",
              },
              {
                value: "Draw +2",
                odd: "11.00",
              },
              {
                value: "Away +2",
                odd: "19.00",
              },
              {
                value: "Home -2",
                odd: "9.00",
              },
              {
                value: "Draw -2",
                odd: "6.50",
              },
              {
                value: "Away -2",
                odd: "1.18",
              },
              {
                value: "Home -3",
                odd: "23.00",
              },
              {
                value: "Draw -3",
                odd: "15.00",
              },
              {
                value: "Away -3",
                odd: "1.05",
              },
              {
                value: "Home +3",
                odd: "1.03",
              },
              {
                value: "Draw +3",
                odd: "19.00",
              },
              {
                value: "Away +3",
                odd: "29.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "9.00",
              },
              {
                value: "2:1",
                odd: "12.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "26.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "4:1",
                odd: "51.00",
              },
              {
                value: "4:2",
                odd: "81.00",
              },
              {
                value: "5:0",
                odd: "67.00",
              },
              {
                value: "5:1",
                odd: "81.00",
              },
              {
                value: "6:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "5.50",
              },
              {
                value: "1:1",
                odd: "7.00",
              },
              {
                value: "2:2",
                odd: "23.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "7.50",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "34.00",
              },
              {
                value: "0:4",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "15.00",
              },
              {
                value: "1:3",
                odd: "34.00",
              },
              {
                value: "1:4",
                odd: "67.00",
              },
              {
                value: "2:3",
                odd: "51.00",
              },
            ],
          },
          {
            id: 11,
            name: "Highest Scoring Half",
            odds: [
              {
                value: "Draw",
                odd: "3.00",
              },
              {
                value: "1st Half",
                odd: "3.25",
              },
              {
                value: "2nd Half",
                odd: "2.20",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "4.75",
              },
              {
                value: "2:0",
                odd: "15.00",
              },
              {
                value: "2:1",
                odd: "41.00",
              },
              {
                value: "3:0",
                odd: "41.00",
              },
              {
                value: "3:1",
                odd: "81.00",
              },
              {
                value: "4:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "2.10",
              },
              {
                value: "1:1",
                odd: "12.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "4.75",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "41.00",
              },
              {
                value: "1:2",
                odd: "41.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.30",
              },
              {
                value: "Home/Away",
                odd: "1.36",
              },
              {
                value: "Draw/Away",
                odd: "1.62",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "3.50",
              },
              {
                value: "Draw",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "3.50",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Draw",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "2.63",
              },
            ],
          },
          {
            id: 15,
            name: "Team To Score Last",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Away",
                odd: "2.63",
              },
              {
                value: "No goal",
                odd: "5.50",
              },
            ],
          },
          {
            id: 32,
            name: "Win Both Halves",
            odds: [
              {
                value: "Home",
                odd: "10.00",
              },
              {
                value: "Away",
                odd: "13.00",
              },
            ],
          },
          {
            id: 16,
            name: "Total - Home",
            odds: [
              {
                value: "Over 3.5",
                odd: "10.50",
              },
              {
                value: "Under 3.5",
                odd: "1.03",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "6.50",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
            ],
          },
          {
            id: 17,
            name: "Total - Away",
            odds: [
              {
                value: "Over 3.5",
                odd: "15.00",
              },
              {
                value: "Under 3.5",
                odd: "1.01",
              },
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "8.50",
              },
              {
                value: "Under 2.5",
                odd: "1.05",
              },
            ],
          },
          {
            id: 18,
            name: "Handicap Result - First Half",
            odds: [
              {
                value: "Home -1",
                odd: "11.00",
              },
              {
                value: "Away -1",
                odd: "1.29",
              },
              {
                value: "Draw -1",
                odd: "4.33",
              },
              {
                value: "Home +1",
                odd: "1.29",
              },
              {
                value: "Away +1",
                odd: "12.00",
              },
              {
                value: "Draw +1",
                odd: "4.50",
              },
              {
                value: "Home -2",
                odd: "34.00",
              },
              {
                value: "Draw -2",
                odd: "15.00",
              },
              {
                value: "Away -2",
                odd: "1.04",
              },
            ],
          },
          {
            id: 19,
            name: "Asian Handicap First Half",
            odds: [
              {
                value: "Home +0",
                odd: "1.58",
              },
              {
                value: "Away +0",
                odd: "2.35",
              },
              {
                value: "Home -0.25",
                odd: "2.68",
              },
              {
                value: "Away -0.25",
                odd: "1.45",
              },
              {
                value: "Home +0.25",
                odd: "1.43",
              },
              {
                value: "Away +0.25",
                odd: "2.75",
              },
              {
                value: "Home -0.5",
                odd: "3.55",
              },
              {
                value: "Away -0.5",
                odd: "1.28",
              },
              {
                value: "Home +0.5",
                odd: "1.28",
              },
              {
                value: "Away +0.5",
                odd: "3.55",
              },
              {
                value: "Home -0.75",
                odd: "5.00",
              },
              {
                value: "Away -0.75",
                odd: "1.17",
              },
              {
                value: "Home +0.75",
                odd: "1.16",
              },
              {
                value: "Away +0.75",
                odd: "5.25",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.29",
              },
              {
                value: "Home/Away",
                odd: "1.83",
              },
              {
                value: "Draw/Away",
                odd: "1.29",
              },
            ],
          },
          {
            id: 34,
            name: "Both Teams Score - First Half",
            odds: [
              {
                value: "Yes",
                odd: "7.50",
              },
              {
                value: "No",
                odd: "1.07",
              },
            ],
          },
          {
            id: 35,
            name: "Both Teams To Score - Second Half",
            odds: [
              {
                value: "Yes",
                odd: "5.00",
              },
              {
                value: "No",
                odd: "1.14",
              },
            ],
          },
          {
            id: 36,
            name: "Win To Nil",
            odds: [
              {
                value: "Home",
                odd: "3.00",
              },
              {
                value: "Away",
                odd: "4.75",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.38",
              },
              {
                value: "Even",
                odd: "1.57",
              },
            ],
          },
          {
            id: 39,
            name: "To Win Either Half",
            odds: [
              {
                value: "Home",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "2.10",
              },
            ],
          },
          {
            id: 40,
            name: "Home Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "4.50",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.63",
              },
              {
                value: "more 3",
                odd: "6.50",
              },
            ],
          },
          {
            id: 41,
            name: "Away Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "6.00",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.00",
              },
              {
                value: "more 3",
                odd: "8.50",
              },
            ],
          },
          {
            id: 24,
            name: "Results/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "7.00",
              },
              {
                value: "Draw/Yes",
                odd: "5.50",
              },
              {
                value: "Away/Yes",
                odd: "10.00",
              },
              {
                value: "Home/No",
                odd: "3.00",
              },
              {
                value: "Draw/No",
                odd: "5.50",
              },
              {
                value: "Away/No",
                odd: "4.75",
              },
            ],
          },
          {
            id: 25,
            name: "Result/Total Goals",
            odds: [
              {
                value: "Home/Over 2.5",
                odd: "4.75",
              },
              {
                value: "Away/Over 2.5",
                odd: "7.50",
              },
              {
                value: "Home/Under 2.5",
                odd: "3.75",
              },
              {
                value: "Away/Under 2.5",
                odd: "5.50",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.10",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 48,
            name: "To Score In Both Halves By Teams",
            odds: [
              {
                value: "Home",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 50,
            name: "Goal Line",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.75",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.63",
              },
              {
                value: "Under 1.5",
                odd: "2.25",
              },
              {
                value: "Over 2.5",
                odd: "2.75",
              },
              {
                value: "Under 2.5",
                odd: "1.43",
              },
              {
                value: "Over 2",
                odd: "2.10",
              },
              {
                value: "Under 2",
                odd: "1.70",
              },
              {
                value: "Over 3",
                odd: "4.50",
              },
              {
                value: "Under 3",
                odd: "1.19",
              },
              {
                value: "Over 2.25",
                odd: "2.43",
              },
              {
                value: "Under 2.25",
                odd: "1.53",
              },
              {
                value: "Over 3.25",
                odd: "5.25",
              },
              {
                value: "Under 3.25",
                odd: "1.16",
              },
              {
                value: "Over 2.75",
                odd: "3.45",
              },
              {
                value: "Under 2.75",
                odd: "1.30",
              },
              {
                value: "Over 1.25",
                odd: "1.43",
              },
              {
                value: "Under 1.25",
                odd: "2.75",
              },
              {
                value: "Over 1.75",
                odd: "1.80",
              },
              {
                value: "Under 1.75",
                odd: "2.00",
              },
              {
                value: "Over 1",
                odd: "1.22",
              },
              {
                value: "Under 1",
                odd: "4.15",
              },
              {
                value: "Over 0.75",
                odd: "1.18",
              },
              {
                value: "Under 0.75",
                odd: "4.80",
              },
            ],
          },
          {
            id: 72,
            name: "Goal Line (1st Half)",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.23",
              },
              {
                value: "Over 1.25",
                odd: "3.45",
              },
              {
                value: "Under 1.25",
                odd: "1.30",
              },
              {
                value: "Over 1.75",
                odd: "5.75",
              },
              {
                value: "Under 1.75",
                odd: "1.14",
              },
              {
                value: "Over 1",
                odd: "2.75",
              },
              {
                value: "Under 1",
                odd: "1.43",
              },
              {
                value: "Over 0.75",
                odd: "1.98",
              },
              {
                value: "Under 0.75",
                odd: "1.83",
              },
            ],
          },
          {
            id: 52,
            name: "Halftime Result/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "34.00",
              },
              {
                value: "Draw/Yes",
                odd: "12.00",
              },
              {
                value: "Away/Yes",
                odd: "34.00",
              },
              {
                value: "Home/No",
                odd: "3.75",
              },
              {
                value: "Draw/No",
                odd: "2.10",
              },
              {
                value: "Away/No",
                odd: "3.75",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592153,
          date: "2020-09-20T15:30:00+00:00",
          home: {
            id: 49,
            name: "Chelsea",
          },
          away: {
            id: 40,
            name: "Liverpool",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "2.15",
              },
              {
                value: "Draw",
                odd: "2.90",
              },
              {
                value: "Away",
                odd: "3.25",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.53",
              },
              {
                value: "Away",
                odd: "2.38",
              },
            ],
          },
          {
            id: 3,
            name: "Second Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.63",
              },
              {
                value: "Draw",
                odd: "2.20",
              },
              {
                value: "Away",
                odd: "3.60",
              },
            ],
          },
          {
            id: 4,
            name: "Asian Handicap",
            odds: [
              {
                value: "Home +0",
                odd: "1.88",
              },
              {
                value: "Away +0",
                odd: "1.93",
              },
              {
                value: "Home -0.25",
                odd: "1.90",
              },
              {
                value: "Away -0.25",
                odd: "1.90",
              },
              {
                value: "Home +0.25",
                odd: "1.40",
              },
              {
                value: "Away +0.25",
                odd: "2.85",
              },
              {
                value: "Home -0.5",
                odd: "2.20",
              },
              {
                value: "Away -0.5",
                odd: "1.65",
              },
              {
                value: "Home +0.5",
                odd: "1.33",
              },
              {
                value: "Away +0.5",
                odd: "3.30",
              },
              {
                value: "Home -0.75",
                odd: "2.60",
              },
              {
                value: "Away -0.75",
                odd: "1.48",
              },
              {
                value: "Home +0.75",
                odd: "1.22",
              },
              {
                value: "Away +0.75",
                odd: "4.15",
              },
              {
                value: "Home -1",
                odd: "3.45",
              },
              {
                value: "Away -1",
                odd: "1.30",
              },
              {
                value: "Home +1",
                odd: "1.11",
              },
              {
                value: "Away +1",
                odd: "6.60",
              },
              {
                value: "Home -1.5",
                odd: "4.40",
              },
              {
                value: "Away -1.5",
                odd: "1.20",
              },
              {
                value: "Home +1.5",
                odd: "1.13",
              },
              {
                value: "Away +1.5",
                odd: "5.90",
              },
              {
                value: "Home -1.25",
                odd: "3.90",
              },
              {
                value: "Away -1.25",
                odd: "1.24",
              },
              {
                value: "Home -1.75",
                odd: "5.90",
              },
              {
                value: "Away -1.75",
                odd: "1.13",
              },
              {
                value: "Home +1.25",
                odd: "1.10",
              },
              {
                value: "Away +1.25",
                odd: "7.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.00",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.62",
              },
              {
                value: "Under 1.5",
                odd: "2.20",
              },
              {
                value: "Over 4.5",
                odd: "9.00",
              },
              {
                value: "Under 4.5",
                odd: "1.04",
              },
              {
                value: "Over 2.5",
                odd: "2.88",
              },
              {
                value: "Under 2.5",
                odd: "1.40",
              },
              {
                value: "Over 0.5",
                odd: "1.13",
              },
              {
                value: "Under 0.5",
                odd: "5.50",
              },
              {
                value: "Over 5.5",
                odd: "15.00",
              },
              {
                value: "Under 5.5",
                odd: "1.01",
              },
            ],
          },
          {
            id: 6,
            name: "Goals Over/Under First Half",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "13.00",
              },
              {
                value: "Under 2.5",
                odd: "1.04",
              },
              {
                value: "Over 0.5",
                odd: "1.67",
              },
              {
                value: "Under 0.5",
                odd: "2.10",
              },
            ],
          },
          {
            id: 26,
            name: "Goals Over/Under - Second Half",
            odds: [
              {
                value: "Over 3.5",
                odd: "19.00",
              },
              {
                value: "Under 3.5",
                odd: "1.02",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "7.00",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
              {
                value: "Over 0.5",
                odd: "1.40",
              },
              {
                value: "Under 0.5",
                odd: "2.75",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "19.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "7.00",
              },
              {
                value: "Draw/Draw",
                odd: "4.00",
              },
              {
                value: "Home/Home",
                odd: "4.33",
              },
              {
                value: "Draw/Home",
                odd: "5.00",
              },
              {
                value: "Away/Home",
                odd: "26.00",
              },
              {
                value: "Away/Draw",
                odd: "15.00",
              },
              {
                value: "Away/Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 8,
            name: "Both Teams Score",
            odds: [
              {
                value: "Yes",
                odd: "2.50",
              },
              {
                value: "No",
                odd: "1.50",
              },
            ],
          },
          {
            id: 9,
            name: "Handicap Result",
            odds: [
              {
                value: "Home -1",
                odd: "4.33",
              },
              {
                value: "Away -1",
                odd: "1.62",
              },
              {
                value: "Draw -1",
                odd: "3.75",
              },
              {
                value: "Home +1",
                odd: "1.30",
              },
              {
                value: "Away +1",
                odd: "7.00",
              },
              {
                value: "Draw +1",
                odd: "4.75",
              },
              {
                value: "Home +2",
                odd: "1.07",
              },
              {
                value: "Draw +2",
                odd: "11.00",
              },
              {
                value: "Away +2",
                odd: "19.00",
              },
              {
                value: "Home -2",
                odd: "9.00",
              },
              {
                value: "Draw -2",
                odd: "6.50",
              },
              {
                value: "Away -2",
                odd: "1.18",
              },
              {
                value: "Home -3",
                odd: "23.00",
              },
              {
                value: "Draw -3",
                odd: "15.00",
              },
              {
                value: "Away -3",
                odd: "1.05",
              },
              {
                value: "Home +3",
                odd: "1.03",
              },
              {
                value: "Draw +3",
                odd: "19.00",
              },
              {
                value: "Away +3",
                odd: "29.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "9.00",
              },
              {
                value: "2:1",
                odd: "12.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "26.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "4:1",
                odd: "51.00",
              },
              {
                value: "4:2",
                odd: "81.00",
              },
              {
                value: "5:0",
                odd: "67.00",
              },
              {
                value: "5:1",
                odd: "81.00",
              },
              {
                value: "6:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "5.50",
              },
              {
                value: "1:1",
                odd: "7.00",
              },
              {
                value: "2:2",
                odd: "23.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "7.50",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "34.00",
              },
              {
                value: "0:4",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "15.00",
              },
              {
                value: "1:3",
                odd: "34.00",
              },
              {
                value: "1:4",
                odd: "67.00",
              },
              {
                value: "2:3",
                odd: "51.00",
              },
            ],
          },
          {
            id: 11,
            name: "Highest Scoring Half",
            odds: [
              {
                value: "Draw",
                odd: "3.00",
              },
              {
                value: "1st Half",
                odd: "3.25",
              },
              {
                value: "2nd Half",
                odd: "2.20",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "4.75",
              },
              {
                value: "2:0",
                odd: "15.00",
              },
              {
                value: "2:1",
                odd: "41.00",
              },
              {
                value: "3:0",
                odd: "41.00",
              },
              {
                value: "3:1",
                odd: "81.00",
              },
              {
                value: "4:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "2.10",
              },
              {
                value: "1:1",
                odd: "12.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "4.75",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "41.00",
              },
              {
                value: "1:2",
                odd: "41.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.30",
              },
              {
                value: "Home/Away",
                odd: "1.36",
              },
              {
                value: "Draw/Away",
                odd: "1.62",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "3.50",
              },
              {
                value: "Draw",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "3.50",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Draw",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "2.63",
              },
            ],
          },
          {
            id: 15,
            name: "Team To Score Last",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Away",
                odd: "2.63",
              },
              {
                value: "No goal",
                odd: "5.50",
              },
            ],
          },
          {
            id: 32,
            name: "Win Both Halves",
            odds: [
              {
                value: "Home",
                odd: "10.00",
              },
              {
                value: "Away",
                odd: "13.00",
              },
            ],
          },
          {
            id: 16,
            name: "Total - Home",
            odds: [
              {
                value: "Over 3.5",
                odd: "10.50",
              },
              {
                value: "Under 3.5",
                odd: "1.03",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "6.50",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
            ],
          },
          {
            id: 17,
            name: "Total - Away",
            odds: [
              {
                value: "Over 3.5",
                odd: "15.00",
              },
              {
                value: "Under 3.5",
                odd: "1.01",
              },
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "8.50",
              },
              {
                value: "Under 2.5",
                odd: "1.05",
              },
            ],
          },
          {
            id: 18,
            name: "Handicap Result - First Half",
            odds: [
              {
                value: "Home -1",
                odd: "11.00",
              },
              {
                value: "Away -1",
                odd: "1.29",
              },
              {
                value: "Draw -1",
                odd: "4.33",
              },
              {
                value: "Home +1",
                odd: "1.29",
              },
              {
                value: "Away +1",
                odd: "12.00",
              },
              {
                value: "Draw +1",
                odd: "4.50",
              },
              {
                value: "Home -2",
                odd: "34.00",
              },
              {
                value: "Draw -2",
                odd: "15.00",
              },
              {
                value: "Away -2",
                odd: "1.04",
              },
            ],
          },
          {
            id: 19,
            name: "Asian Handicap First Half",
            odds: [
              {
                value: "Home +0",
                odd: "1.58",
              },
              {
                value: "Away +0",
                odd: "2.35",
              },
              {
                value: "Home -0.25",
                odd: "2.68",
              },
              {
                value: "Away -0.25",
                odd: "1.45",
              },
              {
                value: "Home +0.25",
                odd: "1.43",
              },
              {
                value: "Away +0.25",
                odd: "2.75",
              },
              {
                value: "Home -0.5",
                odd: "3.55",
              },
              {
                value: "Away -0.5",
                odd: "1.28",
              },
              {
                value: "Home +0.5",
                odd: "1.28",
              },
              {
                value: "Away +0.5",
                odd: "3.55",
              },
              {
                value: "Home -0.75",
                odd: "5.00",
              },
              {
                value: "Away -0.75",
                odd: "1.17",
              },
              {
                value: "Home +0.75",
                odd: "1.16",
              },
              {
                value: "Away +0.75",
                odd: "5.25",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.29",
              },
              {
                value: "Home/Away",
                odd: "1.83",
              },
              {
                value: "Draw/Away",
                odd: "1.29",
              },
            ],
          },
          {
            id: 34,
            name: "Both Teams Score - First Half",
            odds: [
              {
                value: "Yes",
                odd: "7.50",
              },
              {
                value: "No",
                odd: "1.07",
              },
            ],
          },
          {
            id: 35,
            name: "Both Teams To Score - Second Half",
            odds: [
              {
                value: "Yes",
                odd: "5.00",
              },
              {
                value: "No",
                odd: "1.14",
              },
            ],
          },
          {
            id: 36,
            name: "Win To Nil",
            odds: [
              {
                value: "Home",
                odd: "3.00",
              },
              {
                value: "Away",
                odd: "4.75",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.38",
              },
              {
                value: "Even",
                odd: "1.57",
              },
            ],
          },
          {
            id: 39,
            name: "To Win Either Half",
            odds: [
              {
                value: "Home",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "2.10",
              },
            ],
          },
          {
            id: 40,
            name: "Home Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "4.50",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.63",
              },
              {
                value: "more 3",
                odd: "6.50",
              },
            ],
          },
          {
            id: 41,
            name: "Away Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "6.00",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.00",
              },
              {
                value: "more 3",
                odd: "8.50",
              },
            ],
          },
          {
            id: 24,
            name: "Results/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "7.00",
              },
              {
                value: "Draw/Yes",
                odd: "5.50",
              },
              {
                value: "Away/Yes",
                odd: "10.00",
              },
              {
                value: "Home/No",
                odd: "3.00",
              },
              {
                value: "Draw/No",
                odd: "5.50",
              },
              {
                value: "Away/No",
                odd: "4.75",
              },
            ],
          },
          {
            id: 25,
            name: "Result/Total Goals",
            odds: [
              {
                value: "Home/Over 2.5",
                odd: "4.75",
              },
              {
                value: "Away/Over 2.5",
                odd: "7.50",
              },
              {
                value: "Home/Under 2.5",
                odd: "3.75",
              },
              {
                value: "Away/Under 2.5",
                odd: "5.50",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.10",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 48,
            name: "To Score In Both Halves By Teams",
            odds: [
              {
                value: "Home",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 50,
            name: "Goal Line",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.75",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.63",
              },
              {
                value: "Under 1.5",
                odd: "2.25",
              },
              {
                value: "Over 2.5",
                odd: "2.75",
              },
              {
                value: "Under 2.5",
                odd: "1.43",
              },
              {
                value: "Over 2",
                odd: "2.10",
              },
              {
                value: "Under 2",
                odd: "1.70",
              },
              {
                value: "Over 3",
                odd: "4.50",
              },
              {
                value: "Under 3",
                odd: "1.19",
              },
              {
                value: "Over 2.25",
                odd: "2.43",
              },
              {
                value: "Under 2.25",
                odd: "1.53",
              },
              {
                value: "Over 3.25",
                odd: "5.25",
              },
              {
                value: "Under 3.25",
                odd: "1.16",
              },
              {
                value: "Over 2.75",
                odd: "3.45",
              },
              {
                value: "Under 2.75",
                odd: "1.30",
              },
              {
                value: "Over 1.25",
                odd: "1.43",
              },
              {
                value: "Under 1.25",
                odd: "2.75",
              },
              {
                value: "Over 1.75",
                odd: "1.80",
              },
              {
                value: "Under 1.75",
                odd: "2.00",
              },
              {
                value: "Over 1",
                odd: "1.22",
              },
              {
                value: "Under 1",
                odd: "4.15",
              },
              {
                value: "Over 0.75",
                odd: "1.18",
              },
              {
                value: "Under 0.75",
                odd: "4.80",
              },
            ],
          },
          {
            id: 72,
            name: "Goal Line (1st Half)",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.23",
              },
              {
                value: "Over 1.25",
                odd: "3.45",
              },
              {
                value: "Under 1.25",
                odd: "1.30",
              },
              {
                value: "Over 1.75",
                odd: "5.75",
              },
              {
                value: "Under 1.75",
                odd: "1.14",
              },
              {
                value: "Over 1",
                odd: "2.75",
              },
              {
                value: "Under 1",
                odd: "1.43",
              },
              {
                value: "Over 0.75",
                odd: "1.98",
              },
              {
                value: "Under 0.75",
                odd: "1.83",
              },
            ],
          },
          {
            id: 52,
            name: "Halftime Result/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "34.00",
              },
              {
                value: "Draw/Yes",
                odd: "12.00",
              },
              {
                value: "Away/Yes",
                odd: "34.00",
              },
              {
                value: "Home/No",
                odd: "3.75",
              },
              {
                value: "Draw/No",
                odd: "2.10",
              },
              {
                value: "Away/No",
                odd: "3.75",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592154,
          date: "2020-09-19T11:30:00+00:00",
          home: {
            id: 45,
            name: "Everton",
          },
          away: {
            id: 60,
            name: "West Brom",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "2.15",
              },
              {
                value: "Draw",
                odd: "2.90",
              },
              {
                value: "Away",
                odd: "3.25",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.53",
              },
              {
                value: "Away",
                odd: "2.38",
              },
            ],
          },
          {
            id: 3,
            name: "Second Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.63",
              },
              {
                value: "Draw",
                odd: "2.20",
              },
              {
                value: "Away",
                odd: "3.60",
              },
            ],
          },
          {
            id: 4,
            name: "Asian Handicap",
            odds: [
              {
                value: "Home +0",
                odd: "1.88",
              },
              {
                value: "Away +0",
                odd: "1.93",
              },
              {
                value: "Home -0.25",
                odd: "1.90",
              },
              {
                value: "Away -0.25",
                odd: "1.90",
              },
              {
                value: "Home +0.25",
                odd: "1.40",
              },
              {
                value: "Away +0.25",
                odd: "2.85",
              },
              {
                value: "Home -0.5",
                odd: "2.20",
              },
              {
                value: "Away -0.5",
                odd: "1.65",
              },
              {
                value: "Home +0.5",
                odd: "1.33",
              },
              {
                value: "Away +0.5",
                odd: "3.30",
              },
              {
                value: "Home -0.75",
                odd: "2.60",
              },
              {
                value: "Away -0.75",
                odd: "1.48",
              },
              {
                value: "Home +0.75",
                odd: "1.22",
              },
              {
                value: "Away +0.75",
                odd: "4.15",
              },
              {
                value: "Home -1",
                odd: "3.45",
              },
              {
                value: "Away -1",
                odd: "1.30",
              },
              {
                value: "Home +1",
                odd: "1.11",
              },
              {
                value: "Away +1",
                odd: "6.60",
              },
              {
                value: "Home -1.5",
                odd: "4.40",
              },
              {
                value: "Away -1.5",
                odd: "1.20",
              },
              {
                value: "Home +1.5",
                odd: "1.13",
              },
              {
                value: "Away +1.5",
                odd: "5.90",
              },
              {
                value: "Home -1.25",
                odd: "3.90",
              },
              {
                value: "Away -1.25",
                odd: "1.24",
              },
              {
                value: "Home -1.75",
                odd: "5.90",
              },
              {
                value: "Away -1.75",
                odd: "1.13",
              },
              {
                value: "Home +1.25",
                odd: "1.10",
              },
              {
                value: "Away +1.25",
                odd: "7.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.00",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.62",
              },
              {
                value: "Under 1.5",
                odd: "2.20",
              },
              {
                value: "Over 4.5",
                odd: "9.00",
              },
              {
                value: "Under 4.5",
                odd: "1.04",
              },
              {
                value: "Over 2.5",
                odd: "2.88",
              },
              {
                value: "Under 2.5",
                odd: "1.40",
              },
              {
                value: "Over 0.5",
                odd: "1.13",
              },
              {
                value: "Under 0.5",
                odd: "5.50",
              },
              {
                value: "Over 5.5",
                odd: "15.00",
              },
              {
                value: "Under 5.5",
                odd: "1.01",
              },
            ],
          },
          {
            id: 6,
            name: "Goals Over/Under First Half",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "13.00",
              },
              {
                value: "Under 2.5",
                odd: "1.04",
              },
              {
                value: "Over 0.5",
                odd: "1.67",
              },
              {
                value: "Under 0.5",
                odd: "2.10",
              },
            ],
          },
          {
            id: 26,
            name: "Goals Over/Under - Second Half",
            odds: [
              {
                value: "Over 3.5",
                odd: "19.00",
              },
              {
                value: "Under 3.5",
                odd: "1.02",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "7.00",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
              {
                value: "Over 0.5",
                odd: "1.40",
              },
              {
                value: "Under 0.5",
                odd: "2.75",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "19.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "7.00",
              },
              {
                value: "Draw/Draw",
                odd: "4.00",
              },
              {
                value: "Home/Home",
                odd: "4.33",
              },
              {
                value: "Draw/Home",
                odd: "5.00",
              },
              {
                value: "Away/Home",
                odd: "26.00",
              },
              {
                value: "Away/Draw",
                odd: "15.00",
              },
              {
                value: "Away/Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 8,
            name: "Both Teams Score",
            odds: [
              {
                value: "Yes",
                odd: "2.50",
              },
              {
                value: "No",
                odd: "1.50",
              },
            ],
          },
          {
            id: 9,
            name: "Handicap Result",
            odds: [
              {
                value: "Home -1",
                odd: "4.33",
              },
              {
                value: "Away -1",
                odd: "1.62",
              },
              {
                value: "Draw -1",
                odd: "3.75",
              },
              {
                value: "Home +1",
                odd: "1.30",
              },
              {
                value: "Away +1",
                odd: "7.00",
              },
              {
                value: "Draw +1",
                odd: "4.75",
              },
              {
                value: "Home +2",
                odd: "1.07",
              },
              {
                value: "Draw +2",
                odd: "11.00",
              },
              {
                value: "Away +2",
                odd: "19.00",
              },
              {
                value: "Home -2",
                odd: "9.00",
              },
              {
                value: "Draw -2",
                odd: "6.50",
              },
              {
                value: "Away -2",
                odd: "1.18",
              },
              {
                value: "Home -3",
                odd: "23.00",
              },
              {
                value: "Draw -3",
                odd: "15.00",
              },
              {
                value: "Away -3",
                odd: "1.05",
              },
              {
                value: "Home +3",
                odd: "1.03",
              },
              {
                value: "Draw +3",
                odd: "19.00",
              },
              {
                value: "Away +3",
                odd: "29.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "9.00",
              },
              {
                value: "2:1",
                odd: "12.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "26.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "4:1",
                odd: "51.00",
              },
              {
                value: "4:2",
                odd: "81.00",
              },
              {
                value: "5:0",
                odd: "67.00",
              },
              {
                value: "5:1",
                odd: "81.00",
              },
              {
                value: "6:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "5.50",
              },
              {
                value: "1:1",
                odd: "7.00",
              },
              {
                value: "2:2",
                odd: "23.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "7.50",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "34.00",
              },
              {
                value: "0:4",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "15.00",
              },
              {
                value: "1:3",
                odd: "34.00",
              },
              {
                value: "1:4",
                odd: "67.00",
              },
              {
                value: "2:3",
                odd: "51.00",
              },
            ],
          },
          {
            id: 11,
            name: "Highest Scoring Half",
            odds: [
              {
                value: "Draw",
                odd: "3.00",
              },
              {
                value: "1st Half",
                odd: "3.25",
              },
              {
                value: "2nd Half",
                odd: "2.20",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "4.75",
              },
              {
                value: "2:0",
                odd: "15.00",
              },
              {
                value: "2:1",
                odd: "41.00",
              },
              {
                value: "3:0",
                odd: "41.00",
              },
              {
                value: "3:1",
                odd: "81.00",
              },
              {
                value: "4:0",
                odd: "81.00",
              },
              {
                value: "0:0",
                odd: "2.10",
              },
              {
                value: "1:1",
                odd: "12.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "4.75",
              },
              {
                value: "0:2",
                odd: "15.00",
              },
              {
                value: "0:3",
                odd: "41.00",
              },
              {
                value: "1:2",
                odd: "41.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.30",
              },
              {
                value: "Home/Away",
                odd: "1.36",
              },
              {
                value: "Draw/Away",
                odd: "1.62",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "3.50",
              },
              {
                value: "Draw",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "3.50",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Draw",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "2.63",
              },
            ],
          },
          {
            id: 15,
            name: "Team To Score Last",
            odds: [
              {
                value: "Home",
                odd: "1.80",
              },
              {
                value: "Away",
                odd: "2.63",
              },
              {
                value: "No goal",
                odd: "5.50",
              },
            ],
          },
          {
            id: 32,
            name: "Win Both Halves",
            odds: [
              {
                value: "Home",
                odd: "10.00",
              },
              {
                value: "Away",
                odd: "13.00",
              },
            ],
          },
          {
            id: 16,
            name: "Total - Home",
            odds: [
              {
                value: "Over 3.5",
                odd: "10.50",
              },
              {
                value: "Under 3.5",
                odd: "1.03",
              },
              {
                value: "Over 1.5",
                odd: "2.75",
              },
              {
                value: "Under 1.5",
                odd: "1.40",
              },
              {
                value: "Over 2.5",
                odd: "6.50",
              },
              {
                value: "Under 2.5",
                odd: "1.10",
              },
            ],
          },
          {
            id: 17,
            name: "Total - Away",
            odds: [
              {
                value: "Over 3.5",
                odd: "15.00",
              },
              {
                value: "Under 3.5",
                odd: "1.01",
              },
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.22",
              },
              {
                value: "Over 2.5",
                odd: "8.50",
              },
              {
                value: "Under 2.5",
                odd: "1.05",
              },
            ],
          },
          {
            id: 18,
            name: "Handicap Result - First Half",
            odds: [
              {
                value: "Home -1",
                odd: "11.00",
              },
              {
                value: "Away -1",
                odd: "1.29",
              },
              {
                value: "Draw -1",
                odd: "4.33",
              },
              {
                value: "Home +1",
                odd: "1.29",
              },
              {
                value: "Away +1",
                odd: "12.00",
              },
              {
                value: "Draw +1",
                odd: "4.50",
              },
              {
                value: "Home -2",
                odd: "34.00",
              },
              {
                value: "Draw -2",
                odd: "15.00",
              },
              {
                value: "Away -2",
                odd: "1.04",
              },
            ],
          },
          {
            id: 19,
            name: "Asian Handicap First Half",
            odds: [
              {
                value: "Home +0",
                odd: "1.58",
              },
              {
                value: "Away +0",
                odd: "2.35",
              },
              {
                value: "Home -0.25",
                odd: "2.68",
              },
              {
                value: "Away -0.25",
                odd: "1.45",
              },
              {
                value: "Home +0.25",
                odd: "1.43",
              },
              {
                value: "Away +0.25",
                odd: "2.75",
              },
              {
                value: "Home -0.5",
                odd: "3.55",
              },
              {
                value: "Away -0.5",
                odd: "1.28",
              },
              {
                value: "Home +0.5",
                odd: "1.28",
              },
              {
                value: "Away +0.5",
                odd: "3.55",
              },
              {
                value: "Home -0.75",
                odd: "5.00",
              },
              {
                value: "Away -0.75",
                odd: "1.17",
              },
              {
                value: "Home +0.75",
                odd: "1.16",
              },
              {
                value: "Away +0.75",
                odd: "5.25",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.29",
              },
              {
                value: "Home/Away",
                odd: "1.83",
              },
              {
                value: "Draw/Away",
                odd: "1.29",
              },
            ],
          },
          {
            id: 34,
            name: "Both Teams Score - First Half",
            odds: [
              {
                value: "Yes",
                odd: "7.50",
              },
              {
                value: "No",
                odd: "1.07",
              },
            ],
          },
          {
            id: 35,
            name: "Both Teams To Score - Second Half",
            odds: [
              {
                value: "Yes",
                odd: "5.00",
              },
              {
                value: "No",
                odd: "1.14",
              },
            ],
          },
          {
            id: 36,
            name: "Win To Nil",
            odds: [
              {
                value: "Home",
                odd: "3.00",
              },
              {
                value: "Away",
                odd: "4.75",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.38",
              },
              {
                value: "Even",
                odd: "1.57",
              },
            ],
          },
          {
            id: 39,
            name: "To Win Either Half",
            odds: [
              {
                value: "Home",
                odd: "1.83",
              },
              {
                value: "Away",
                odd: "2.10",
              },
            ],
          },
          {
            id: 40,
            name: "Home Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "4.50",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.63",
              },
              {
                value: "more 3",
                odd: "6.50",
              },
            ],
          },
          {
            id: 41,
            name: "Away Team Exact Goals Number",
            odds: [
              {
                value: 2,
                odd: "6.00",
              },
              {
                value: 1,
                odd: "2.63",
              },
              {
                value: 0,
                odd: "2.00",
              },
              {
                value: "more 3",
                odd: "8.50",
              },
            ],
          },
          {
            id: 24,
            name: "Results/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "7.00",
              },
              {
                value: "Draw/Yes",
                odd: "5.50",
              },
              {
                value: "Away/Yes",
                odd: "10.00",
              },
              {
                value: "Home/No",
                odd: "3.00",
              },
              {
                value: "Draw/No",
                odd: "5.50",
              },
              {
                value: "Away/No",
                odd: "4.75",
              },
            ],
          },
          {
            id: 25,
            name: "Result/Total Goals",
            odds: [
              {
                value: "Home/Over 2.5",
                odd: "4.75",
              },
              {
                value: "Away/Over 2.5",
                odd: "7.50",
              },
              {
                value: "Home/Under 2.5",
                odd: "3.75",
              },
              {
                value: "Away/Under 2.5",
                odd: "5.50",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.10",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 48,
            name: "To Score In Both Halves By Teams",
            odds: [
              {
                value: "Home",
                odd: "5.50",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 50,
            name: "Goal Line",
            odds: [
              {
                value: "Over 3.5",
                odd: "5.75",
              },
              {
                value: "Under 3.5",
                odd: "1.14",
              },
              {
                value: "Over 1.5",
                odd: "1.63",
              },
              {
                value: "Under 1.5",
                odd: "2.25",
              },
              {
                value: "Over 2.5",
                odd: "2.75",
              },
              {
                value: "Under 2.5",
                odd: "1.43",
              },
              {
                value: "Over 2",
                odd: "2.10",
              },
              {
                value: "Under 2",
                odd: "1.70",
              },
              {
                value: "Over 3",
                odd: "4.50",
              },
              {
                value: "Under 3",
                odd: "1.19",
              },
              {
                value: "Over 2.25",
                odd: "2.43",
              },
              {
                value: "Under 2.25",
                odd: "1.53",
              },
              {
                value: "Over 3.25",
                odd: "5.25",
              },
              {
                value: "Under 3.25",
                odd: "1.16",
              },
              {
                value: "Over 2.75",
                odd: "3.45",
              },
              {
                value: "Under 2.75",
                odd: "1.30",
              },
              {
                value: "Over 1.25",
                odd: "1.43",
              },
              {
                value: "Under 1.25",
                odd: "2.75",
              },
              {
                value: "Over 1.75",
                odd: "1.80",
              },
              {
                value: "Under 1.75",
                odd: "2.00",
              },
              {
                value: "Over 1",
                odd: "1.22",
              },
              {
                value: "Under 1",
                odd: "4.15",
              },
              {
                value: "Over 0.75",
                odd: "1.18",
              },
              {
                value: "Under 0.75",
                odd: "4.80",
              },
            ],
          },
          {
            id: 72,
            name: "Goal Line (1st Half)",
            odds: [
              {
                value: "Over 1.5",
                odd: "4.00",
              },
              {
                value: "Under 1.5",
                odd: "1.23",
              },
              {
                value: "Over 1.25",
                odd: "3.45",
              },
              {
                value: "Under 1.25",
                odd: "1.30",
              },
              {
                value: "Over 1.75",
                odd: "5.75",
              },
              {
                value: "Under 1.75",
                odd: "1.14",
              },
              {
                value: "Over 1",
                odd: "2.75",
              },
              {
                value: "Under 1",
                odd: "1.43",
              },
              {
                value: "Over 0.75",
                odd: "1.98",
              },
              {
                value: "Under 0.75",
                odd: "1.83",
              },
            ],
          },
          {
            id: 52,
            name: "Halftime Result/Both Teams Score",
            odds: [
              {
                value: "Home/Yes",
                odd: "34.00",
              },
              {
                value: "Draw/Yes",
                odd: "12.00",
              },
              {
                value: "Away/Yes",
                odd: "34.00",
              },
              {
                value: "Home/No",
                odd: "3.75",
              },
              {
                value: "Draw/No",
                odd: "2.10",
              },
              {
                value: "Away/No",
                odd: "3.75",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592155,
          date: "2020-09-19T14:00:00+00:00",
          home: {
            id: 63,
            name: "Leeds",
          },
          away: {
            id: 36,
            name: "Fulham",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "1.44",
              },
              {
                value: "Draw",
                odd: "3.75",
              },
              {
                value: "Away",
                odd: "6.50",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.14",
              },
              {
                value: "Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 2.5",
                odd: "2.15",
              },
              {
                value: "Under 2.5",
                odd: "1.68",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "17.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "13.00",
              },
              {
                value: "Draw/Draw",
                odd: "5.50",
              },
              {
                value: "Home/Home",
                odd: "2.30",
              },
              {
                value: "Draw/Home",
                odd: "4.00",
              },
              {
                value: "Away/Home",
                odd: "23.00",
              },
              {
                value: "Away/Draw",
                odd: "21.00",
              },
              {
                value: "Away/Away",
                odd: "12.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "6.00",
              },
              {
                value: "2:1",
                odd: "11.00",
              },
              {
                value: "3:0",
                odd: "9.00",
              },
              {
                value: "3:1",
                odd: "17.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "17.00",
              },
              {
                value: "4:1",
                odd: "29.00",
              },
              {
                value: "4:2",
                odd: "67.00",
              },
              {
                value: "5:0",
                odd: "29.00",
              },
              {
                value: "5:1",
                odd: "51.00",
              },
              {
                value: "6:0",
                odd: "51.00",
              },
              {
                value: "0:0",
                odd: "7.50",
              },
              {
                value: "1:1",
                odd: "8.50",
              },
              {
                value: "2:2",
                odd: "26.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "15.00",
              },
              {
                value: "0:2",
                odd: "34.00",
              },
              {
                value: "0:3",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "23.00",
              },
              {
                value: "1:3",
                odd: "51.00",
              },
              {
                value: "2:3",
                odd: "67.00",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "3.40",
              },
              {
                value: "2:0",
                odd: "7.00",
              },
              {
                value: "2:1",
                odd: "29.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "51.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "0:0",
                odd: "2.50",
              },
              {
                value: "1:1",
                odd: "13.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "8.50",
              },
              {
                value: "0:2",
                odd: "34.00",
              },
              {
                value: "1:2",
                odd: "51.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.08",
              },
              {
                value: "Home/Away",
                odd: "1.22",
              },
              {
                value: "Draw/Away",
                odd: "2.50",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.00",
              },
              {
                value: "Draw",
                odd: "2.10",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.33",
              },
              {
                value: "Draw",
                odd: "7.50",
              },
              {
                value: "Away",
                odd: "4.33",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.10",
              },
              {
                value: "Home/Away",
                odd: "1.67",
              },
              {
                value: "Draw/Away",
                odd: "1.73",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.20",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.00",
              },
              {
                value: "Even",
                odd: "1.73",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592156,
          date: "2020-09-20T18:00:00+00:00",
          home: {
            id: 46,
            name: "Leicester",
          },
          away: {
            id: 44,
            name: "Burnley",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "1.44",
              },
              {
                value: "Draw",
                odd: "3.75",
              },
              {
                value: "Away",
                odd: "6.50",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.14",
              },
              {
                value: "Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 2.5",
                odd: "2.15",
              },
              {
                value: "Under 2.5",
                odd: "1.68",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "17.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "13.00",
              },
              {
                value: "Draw/Draw",
                odd: "5.50",
              },
              {
                value: "Home/Home",
                odd: "2.30",
              },
              {
                value: "Draw/Home",
                odd: "4.00",
              },
              {
                value: "Away/Home",
                odd: "23.00",
              },
              {
                value: "Away/Draw",
                odd: "21.00",
              },
              {
                value: "Away/Away",
                odd: "12.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "6.00",
              },
              {
                value: "2:1",
                odd: "11.00",
              },
              {
                value: "3:0",
                odd: "9.00",
              },
              {
                value: "3:1",
                odd: "17.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "17.00",
              },
              {
                value: "4:1",
                odd: "29.00",
              },
              {
                value: "4:2",
                odd: "67.00",
              },
              {
                value: "5:0",
                odd: "29.00",
              },
              {
                value: "5:1",
                odd: "51.00",
              },
              {
                value: "6:0",
                odd: "51.00",
              },
              {
                value: "0:0",
                odd: "7.50",
              },
              {
                value: "1:1",
                odd: "8.50",
              },
              {
                value: "2:2",
                odd: "26.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "15.00",
              },
              {
                value: "0:2",
                odd: "34.00",
              },
              {
                value: "0:3",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "23.00",
              },
              {
                value: "1:3",
                odd: "51.00",
              },
              {
                value: "2:3",
                odd: "67.00",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "3.40",
              },
              {
                value: "2:0",
                odd: "7.00",
              },
              {
                value: "2:1",
                odd: "29.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "51.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "0:0",
                odd: "2.50",
              },
              {
                value: "1:1",
                odd: "13.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "8.50",
              },
              {
                value: "0:2",
                odd: "34.00",
              },
              {
                value: "1:2",
                odd: "51.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.08",
              },
              {
                value: "Home/Away",
                odd: "1.22",
              },
              {
                value: "Draw/Away",
                odd: "2.50",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.00",
              },
              {
                value: "Draw",
                odd: "2.10",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.33",
              },
              {
                value: "Draw",
                odd: "7.50",
              },
              {
                value: "Away",
                odd: "4.33",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.10",
              },
              {
                value: "Home/Away",
                odd: "1.67",
              },
              {
                value: "Draw/Away",
                odd: "1.73",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.20",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.00",
              },
              {
                value: "Even",
                odd: "1.73",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592157,
          date: "2020-09-19T16:30:00+00:00",
          home: {
            id: 33,
            name: "Manchester United",
          },
          away: {
            id: 52,
            name: "Crystal Palace",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "1.44",
              },
              {
                value: "Draw",
                odd: "3.75",
              },
              {
                value: "Away",
                odd: "6.50",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.14",
              },
              {
                value: "Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 2.5",
                odd: "2.15",
              },
              {
                value: "Under 2.5",
                odd: "1.68",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "17.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "13.00",
              },
              {
                value: "Draw/Draw",
                odd: "5.50",
              },
              {
                value: "Home/Home",
                odd: "2.30",
              },
              {
                value: "Draw/Home",
                odd: "4.00",
              },
              {
                value: "Away/Home",
                odd: "23.00",
              },
              {
                value: "Away/Draw",
                odd: "21.00",
              },
              {
                value: "Away/Away",
                odd: "12.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "6.00",
              },
              {
                value: "2:1",
                odd: "11.00",
              },
              {
                value: "3:0",
                odd: "9.00",
              },
              {
                value: "3:1",
                odd: "17.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "17.00",
              },
              {
                value: "4:1",
                odd: "29.00",
              },
              {
                value: "4:2",
                odd: "67.00",
              },
              {
                value: "5:0",
                odd: "29.00",
              },
              {
                value: "5:1",
                odd: "51.00",
              },
              {
                value: "6:0",
                odd: "51.00",
              },
              {
                value: "0:0",
                odd: "7.50",
              },
              {
                value: "1:1",
                odd: "8.50",
              },
              {
                value: "2:2",
                odd: "26.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "15.00",
              },
              {
                value: "0:2",
                odd: "34.00",
              },
              {
                value: "0:3",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "23.00",
              },
              {
                value: "1:3",
                odd: "51.00",
              },
              {
                value: "2:3",
                odd: "67.00",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "3.40",
              },
              {
                value: "2:0",
                odd: "7.00",
              },
              {
                value: "2:1",
                odd: "29.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "51.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "0:0",
                odd: "2.50",
              },
              {
                value: "1:1",
                odd: "13.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "8.50",
              },
              {
                value: "0:2",
                odd: "34.00",
              },
              {
                value: "1:2",
                odd: "51.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.08",
              },
              {
                value: "Home/Away",
                odd: "1.22",
              },
              {
                value: "Draw/Away",
                odd: "2.50",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.00",
              },
              {
                value: "Draw",
                odd: "2.10",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.33",
              },
              {
                value: "Draw",
                odd: "7.50",
              },
              {
                value: "Away",
                odd: "4.33",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.10",
              },
              {
                value: "Home/Away",
                odd: "1.67",
              },
              {
                value: "Draw/Away",
                odd: "1.73",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.20",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.00",
              },
              {
                value: "Even",
                odd: "1.73",
              },
            ],
          },
        ],
      },
      {
        fixture: {
          id: 592158,
          date: "2020-09-20T13:00:00+00:00",
          home: {
            id: 34,
            name: "Newcastle",
          },
          away: {
            id: 51,
            name: "Brighton",
          },
        },
        bets: [
          {
            id: 1,
            name: "Match Winner",
            odds: [
              {
                value: "Home",
                odd: "1.44",
              },
              {
                value: "Draw",
                odd: "3.75",
              },
              {
                value: "Away",
                odd: "6.50",
              },
            ],
          },
          {
            id: 2,
            name: "Home/Away",
            odds: [
              {
                value: "Home",
                odd: "1.14",
              },
              {
                value: "Away",
                odd: "5.00",
              },
            ],
          },
          {
            id: 5,
            name: "Goals Over/Under",
            odds: [
              {
                value: "Over 2.5",
                odd: "2.15",
              },
              {
                value: "Under 2.5",
                odd: "1.68",
              },
            ],
          },
          {
            id: 7,
            name: "HT/FT Double",
            odds: [
              {
                value: "Home/Draw",
                odd: "17.00",
              },
              {
                value: "Home/Away",
                odd: "41.00",
              },
              {
                value: "Draw/Away",
                odd: "13.00",
              },
              {
                value: "Draw/Draw",
                odd: "5.50",
              },
              {
                value: "Home/Home",
                odd: "2.30",
              },
              {
                value: "Draw/Home",
                odd: "4.00",
              },
              {
                value: "Away/Home",
                odd: "23.00",
              },
              {
                value: "Away/Draw",
                odd: "21.00",
              },
              {
                value: "Away/Away",
                odd: "12.00",
              },
            ],
          },
          {
            id: 10,
            name: "Exact Score",
            odds: [
              {
                value: "1:0",
                odd: "5.50",
              },
              {
                value: "2:0",
                odd: "6.00",
              },
              {
                value: "2:1",
                odd: "11.00",
              },
              {
                value: "3:0",
                odd: "9.00",
              },
              {
                value: "3:1",
                odd: "17.00",
              },
              {
                value: "3:2",
                odd: "41.00",
              },
              {
                value: "4:0",
                odd: "17.00",
              },
              {
                value: "4:1",
                odd: "29.00",
              },
              {
                value: "4:2",
                odd: "67.00",
              },
              {
                value: "5:0",
                odd: "29.00",
              },
              {
                value: "5:1",
                odd: "51.00",
              },
              {
                value: "6:0",
                odd: "51.00",
              },
              {
                value: "0:0",
                odd: "7.50",
              },
              {
                value: "1:1",
                odd: "8.50",
              },
              {
                value: "2:2",
                odd: "26.00",
              },
              {
                value: "3:3",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "15.00",
              },
              {
                value: "0:2",
                odd: "34.00",
              },
              {
                value: "0:3",
                odd: "67.00",
              },
              {
                value: "1:2",
                odd: "23.00",
              },
              {
                value: "1:3",
                odd: "51.00",
              },
              {
                value: "2:3",
                odd: "67.00",
              },
            ],
          },
          {
            id: 31,
            name: "Correct Score - First Half",
            odds: [
              {
                value: "1:0",
                odd: "3.40",
              },
              {
                value: "2:0",
                odd: "7.00",
              },
              {
                value: "2:1",
                odd: "29.00",
              },
              {
                value: "3:0",
                odd: "19.00",
              },
              {
                value: "3:1",
                odd: "51.00",
              },
              {
                value: "4:0",
                odd: "41.00",
              },
              {
                value: "0:0",
                odd: "2.50",
              },
              {
                value: "1:1",
                odd: "13.00",
              },
              {
                value: "2:2",
                odd: "81.00",
              },
              {
                value: "0:1",
                odd: "8.50",
              },
              {
                value: "0:2",
                odd: "34.00",
              },
              {
                value: "1:2",
                odd: "51.00",
              },
            ],
          },
          {
            id: 12,
            name: "Double Chance",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.08",
              },
              {
                value: "Home/Away",
                odd: "1.22",
              },
              {
                value: "Draw/Away",
                odd: "2.50",
              },
            ],
          },
          {
            id: 13,
            name: "First Half Winner",
            odds: [
              {
                value: "Home",
                odd: "2.00",
              },
              {
                value: "Draw",
                odd: "2.10",
              },
              {
                value: "Away",
                odd: "7.00",
              },
            ],
          },
          {
            id: 14,
            name: "Team To Score First",
            odds: [
              {
                value: "Home",
                odd: "1.33",
              },
              {
                value: "Draw",
                odd: "7.50",
              },
              {
                value: "Away",
                odd: "4.33",
              },
            ],
          },
          {
            id: 20,
            name: "Double Chance - First Half",
            odds: [
              {
                value: "Home/Draw",
                odd: "1.10",
              },
              {
                value: "Home/Away",
                odd: "1.67",
              },
              {
                value: "Draw/Away",
                odd: "1.73",
              },
            ],
          },
          {
            id: 21,
            name: "Odd/Even",
            odds: [
              {
                value: "Odd",
                odd: "1.95",
              },
              {
                value: "Even",
                odd: "1.90",
              },
            ],
          },
          {
            id: 22,
            name: "Odd/Even - First Half",
            odds: [
              {
                value: "Odd",
                odd: "2.20",
              },
              {
                value: "Even",
                odd: "1.67",
              },
            ],
          },
          {
            id: 63,
            name: "Odd/Even - Second Half",
            odds: [
              {
                value: "Odd",
                odd: "2.00",
              },
              {
                value: "Even",
                odd: "1.73",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default HomeClient;
