import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import * as React from "react";
import Fixture from "./Fixture";

const title = {
  color: "white",
  backgroundColor: "var(--color-primary-light)",
  letterSpacing: "1.3px",
  fontSize: "1.2rem",
  fontWeight: "500",
  textAlign: "left",
  margin: "auto",
  borderBottom: "1px solid white",
  padding: "10px 10px 10px 10px",
};


function League(props) {
  return (
    <Box
      sx={{
        marginTop: "1px",
        width: "100% ",
        height: "98% ",
        borderRadius: "1",
      }}
    >
      <h2 style={ title}>
        {props.league_info.league.name}
      </h2>
      <Stack direction={"column"}>
        {props.league_info.fixtures.map((league_fixture) => {
          return (
            <Fixture
            key={league_fixture.fixture.id}
              fixture={league_fixture.fixture}
              fixture_bets={league_fixture.bets}
              addBet={props.addBet}
            />
          );
        })}
      </Stack>
    </Box>
  );
}

export default League;
