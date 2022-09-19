import { createContext, useState } from "react";

const FixtureContext = createContext({
  leagues: [],
  fixtures: [],
  ticket: [],
  addToTicket: (bet) => {},
  removeFromTicket: (bet) => {},
  setLeagues: (leagues) => {},
  setFixtures: (leagues) => {},
});

export function FixtureContextProvider() {
  const [leagues, setLeagues] = useState([]);
  const [current_ticket, addToTicket] = useState([]);
  const [all_fixtures, setFixtures] = useState([]);

  setLeaguesHandler = (all_leagues) => {
    all_leagues.map((league) => {
      var filtered_league = { id: league.id, name: league.name };
      addLeague(filtered_league);
    });
  };

  addLeague = (league) => {
    setLeagues((prevLeagues) => {
      return prevLeagues.concat(league);
    });
  };

  addToTicketHandler = (fixture) => {
    addToTicket((prevTicket) => {
      return prevTicket.concat(fixture);
    });
  };

  removeFromTicketHandler = (betId) => {
    setTicketHandler((prevTicket) => {
      return prevTicket.filter((bet) => bet.id !== betId);
    });
  };

  setFixturesHandler = (all_fixtures) => {
    all_fixtures.map((fixture) => {
      addFixture(fixture);
    });
  };

  addFixture = (fixture) => {
    setFixtures((prevFixtures) => {
      return prevFixtures.concat(fixture);
    });
  };

  const context = {
    leagues: leagues,
    fixtures: all_fixtures,
    ticket: current_ticket,
    addToTicket: addToTicketHandler(bet),
    removeFromTicket: removeFromTicketHandler(betId),
    setLeagues: setLeaguesHandler(all_leagues), 
    setFixtures: setFixturesHandler(leagues),
  };

  return (
    <FixtureContext.Provider value={context}>
      {children}
    </FixtureContext.Provider>
  );
}

export default FixtureContext;
