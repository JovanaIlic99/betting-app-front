import { Box } from "@mui/material";
import * as React from "react";
import FixtureInfo from "./FixtureInfo";
import FixtureBets from "./FixtureBets";

function Fixture(props) {
  const [view_bets, setViewBets] = React.useState(false);

  function setViewBetsHandler() {
    setViewBets(!view_bets);
  }

  const [selectedBet, setBet] = React.useState({});

  const handleClick = (e) => {
    if (e.target.value !== undefined) {
      var bet_clicked = JSON.parse(e.target.value);
      if (
        selectedBet !== undefined &&
        selectedBet.bet !== undefined &&
        bet_clicked.id === selectedBet.bet.id &&
        bet_clicked.bet_group_name === selectedBet.bet.bet_group_name &&
        bet_clicked.name === selectedBet.bet.name
      ) {
        props.addBet(selectedBet);
        setBet({});
      } else {
        var selected_bet = {
          fixture: {
            id: props.fixture.id,
            date: props.fixture.date,
            home: {
              id: props.fixture.home.id,
              name: props.fixture.home.name,
            },
            away: { id: props.fixture.away.id, name: props.fixture.away.name },
          },
          bet: bet_clicked,
        };

        setBet(selected_bet);
        props.addBet(selected_bet);
      }
    }
  };


  function setBetHandler(sel_bet) {
    var selected_bet = {
      fixture: {
        id: props.fixture.id,
        date: props.fixture.date,
        home: {
          id: props.fixture.home.id,
          name: props.fixture.home.name,
        },
        away: { id: props.fixture.away.id, name: props.fixture.away.name },
      },
      bet: sel_bet,
    };
    setBet(selected_bet);
  }

  return (
    <Box
      sx={{
        width: "100% ",
        height: "100% ",
        borderRadius: "1",
      }}
    >
      <FixtureInfo fixture={props.fixture} view_bets={setViewBetsHandler} />
      {view_bets ? (
        <FixtureBets
          bets={props.fixture_bets}
          bet={selectedBet}
          setBet={setBetHandler}
          handleClick={handleClick}
        />
      ) : (
        <></>
      )}
    </Box>
  );
}

export default Fixture;
