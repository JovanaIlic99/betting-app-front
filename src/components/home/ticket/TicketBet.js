import { Box, Typography } from "@mui/material";

const title = {
  color: "var(--color-primary)",
  letterSpacing: "1.3px",
  fontSize: "1.5rem",
  fontWeight:"600",
  textAlign: "center",
  margin: "auto",
};
const box = {
  display: "flex",
  width: "100%",
  borderBottom: "1px solid var(--color-gray)",
  padding: "5px",
};
const teams = {
  width: "50%",
  padding: "0 10px 0 10px",
};
const bet = {
  width: "30%",
  padding: "0 10px 0 10px",
  borderLeft: "1px solid var(--color-gray)",
};
const odd = {
  display: "flex",
  width: "20%",
  padding: "0 10px 0 10px",
  borderLeft: "1px solid var(--color-gray)",
};
const group = {
  fontSize: "0.8rem",
  padding:"2px"
};
const bettype = {
  fontSize: "1.1rem",
  margin: "auto",
  fontWeight:"600",
  padding:"2px"
};
const teamName={
    fontWeight:"600",
    padding:"3px"
}

function TicketBet(props) {
  return (
    <Box flexDirection={"row"} sx={box}>
      <Box flexDirection={"column"} sx={teams}>
        <Box>
          <Typography sx={teamName}>{props.home}</Typography>
        </Box>
        <Box>
          <Typography sx={teamName}>{props.away}</Typography>
        </Box>
      </Box>
      <Box flexDirection={"column"} sx={bet}>
        <Box sx={group}>{props.bet_group}</Box>
        <Box sx={bettype}>{props.bet_name}</Box>
      </Box>
      <Box sx={odd}>
        <Typography sx={title}>{props.odd}</Typography>{" "}
      </Box>
    </Box>
  );
}

export default TicketBet;
