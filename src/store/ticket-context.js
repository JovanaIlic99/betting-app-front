import { createContext, useState } from "react";

const TicketContext = createContext({
  ticket: [],
  wager: 0,
  totalOdds: 1,
  payout: 0,
  setTicket: (ticket) => {},
  addBetToTicket: (bet) => {},
  betIsOnTicket: (bet) => {},
  clearTicket:()=>{},
});

export function TicketContextProvider(props) {
  const [current_ticket, setTicket] = useState([]);
  const [current_wager, setCurrentWager] = useState(0);
  const [current_odds, setCurrentOdds] = useState(1);
  const [current_payout, setCurrentPayout] = useState(0);

  function clearTicketHandler(){
    setTicket([]);
    setCurrentWager(0);
    setCurrentOdds(1);
    setCurrentPayout(0)
  }

  function setCurrentWagerHandler(amount) {
    console.log(amount);
    var numAmount = parseFloat(amount);
    setCurrentWager(numAmount);
    setCurrentPayout(numAmount * current_odds);
  }

  function addBetToTicketHandler(bet) {
    if (current_ticket === undefined || current_ticket.length === 0) {
      setTicket((prevTicket) => {
        setCurrentOdds(current_odds * parseFloat(bet.bet.odd));
        setCurrentWager(20);
        setCurrentPayout(0);
        return prevTicket.concat(bet);
      });
    } else {
      if (betIsOnTicketHandler(bet.fixture.id)) {
        var dummy_ticket = current_ticket;
        for (var i = 0; i < current_ticket.length; i++) {
          if (
            current_ticket[i].fixture.id === bet.fixture.id &&
            current_ticket[i].bet.id === bet.bet.id &&
            current_ticket[i].bet.name === bet.bet.name
          ) {
            dummy_ticket.splice(i, 1);
            setCurrentOdds(current_odds / parseFloat(bet.bet.odd));
            setCurrentWager(20);
            setCurrentPayout(0);
            break;
          } else if (current_ticket[i].fixture.id === bet.fixture.id) {
            setCurrentOdds((current_odds * parseFloat(bet.bet.odd)) /current_ticket[i].bet.odd);
            setCurrentWager(20);
            setCurrentPayout(0);
            dummy_ticket[i] = bet;
            break;
          }
        }
        setTicket(dummy_ticket);
        setCurrentWager(20);
        setCurrentPayout(0);
      } else {
        setTicket((prevTicket) => {
          setCurrentOdds(current_odds * parseFloat(bet.bet.odd));
          setCurrentWager(20);
          setCurrentPayout(0);
          return prevTicket.concat(bet);
        });
      }
    }
  }

  function betIsOnTicketHandler(betId) {
    for (var i = 0; i < current_ticket.length; i++) {
      if (current_ticket[i].fixture.id === betId) {
        return true;
      }
    }
    return false;
  }

  const context = {
    ticket: current_ticket,
    wager: current_wager,
    totalOdds: current_odds,
    payout: current_payout,
    addBetToTicket: addBetToTicketHandler,
    betIsOnTicket: betIsOnTicketHandler,
    setCurrentWager: setCurrentWagerHandler,
    clearTicket: clearTicketHandler,
  };

  return (
    <TicketContext.Provider value={context}>
      {props.children}
    </TicketContext.Provider>
  );
}

export default TicketContext;
