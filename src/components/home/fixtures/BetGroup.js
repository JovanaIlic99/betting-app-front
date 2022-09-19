import { Box } from "@mui/system";
import Bets from "./Bets";

const title = {
    color: "white",
    backgroundColor: "var(--color-primary-light)",
    letterSpacing: "1.3px",
    fontSize: "0.9rem",
    fontWeight: "500",
    textAlign: "left",
    margin: "auto",
    borderBottom: "1px solid white",
    padding: "5px 5px 5px 1.669%",
  };

  const box_style={
    width:"100%",
    margin:"0 0 0 0",
    backgroundColor: "var(--color-gray-light)",

  }

  
function BetGroup(props) {
  return (
    <Box sx={box_style}>
      <h2 style={title}>{props.group.name}</h2>
      <Bets key ={props.group.id} group={props.group} odds={props.group.odds} bet={props.bet} handleClick={props.handleClick}  />
    </Box>
  );
}

export default BetGroup;