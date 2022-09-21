import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const row = {
  backgroundColor: "white",
  height: "50px",
  border:"1px solid var(--color-gray)"
};
const title = {
  color: "black",
  letterSpacing: "1.2px",
  fontSize: "1.2rem",
  fontWeight: "500",
  textAlign: "center",
  margin: "auto",
};
const boxField = {
  margin: "0",
  padding: "5px",
  width: "20%",
  border: "1px solid gray",
};

const not_over={
    color:"black",
    fontSize: "1.5rem",
    textAlign: "center",
    margin: "auto",
}
const win={
    color:"var(--color-primary)",
    fontSize: "1.5rem",
    
  fontWeight: "600",
  textAlign: "center",
  margin: "auto",
}
const lost={
    color:"red)",
    fontSize: "1.5rem",
    textAlign: "center",
    margin: "auto",
    
  fontWeight: "600",
}

function TicketRow(props ) {
  return (
    <Stack direction={"row"} sx={row}>
      <Box sx={boxField}>
        <Typography sx={title}>{props.id}</Typography>
      </Box>
      <Box sx={boxField}>
        <Typography sx={title}>{props.odds}</Typography>
      </Box>
      <Box sx={boxField}>
        <Typography sx={title}>{props.wager}</Typography>
      </Box>
      <Box sx={boxField}>
        <Typography sx={title}>{props.payout}</Typography>
      </Box>
      <Box sx={boxField}>
        {props.state === "-" ? (
          <Typography sx={not_over}>{props.state}</Typography>
        ) : props.state === "win" ? (
          <Typography sx={win}>{props.state}</Typography>
        ) : (
          <Typography sx={lost}>{props.state}</Typography>
        )}
      </Box>
    </Stack>
  );
}
export default TicketRow;
