import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const versus_style = {
  width: "50%",
  display: { xs: "none", sm: "none", md: "block" },
  padding: "10px 10px 10px 10px",
  justifyContent: "center",
};
const date_style = {
  width: "30%",
  display: { xs: "none", sm: "none", md: "block" },
  padding: "10px 10px 10px 10px",
};
const view_odds_buton_style = {
  display: { xs: "none", sm: "none", md: "block" },
  width: "20%",
  padding: "10px 10px 10px 10px",
};

const versus_style_mobile = {
  width: "50%",
  display: { xs: "block", sm: "block", md: "none" },
  flexDirection: { xs: "column", sm: "column", md: "row" },
  borderRight: "1px solid var(--color-primary-light)",
  paddingLeft: "10px",
  margin: "auto",
};
const date_style_mobile = {
  width: "25%",
  display: { xs: "block", sm: "block", md: "none" },
  flexDirection: { xs: "column", sm: "column", md: "row" },
  justifyContent: "center",
  paddingLeft: "10px",
  margin: "auto",
};
const view_odds_buton_style_mobile = {
  display: { xs: "block", sm: "block", md: "none" },
  width: "25%",
  padding: "0",
  margin: "auto",
};

const button = {
  width: "95%",
  height:"100%",
  color: "white",
  fontSize: "1rem",
  fontWeight: "500",
  borderRadius: "0",
  margin: "0",
  backgroundColor: "var(--color-primary-light)",
  ":hover": {
    backgroundColor: "var(--color-primary)",
    color: "white",
    border: "1px solid white",
  },
};

const text = {
  margin: "10px 10px 10px 0",
};

function FixtureInfo(props) {
  function createDateString(datestr) {
    const date = new Date(datestr);
    const dayString = date.getDate();
    const dayIndex = date.getDay();
    const dayName = days[dayIndex];
    const monthString = date.getMonth() + 1;

    return `${dayName},  ${dayString}.${monthString}`;
  }
  function createTimeString(dateStr) {
    const date = new Date(dateStr);
    const hourString = date.getHours();
    const minuteString = date.getMinutes();
    return `  ${hourString}:${minuteString}`;
  }

  return (
    <Box
      sx={{
        width: "100% ",
        height: "100% ",
        borderRadius: "1",
        
  borderBottom: "1px solid var(--color-primary-light)", 
      }}
    >
      <Stack direction={"row"}>
        <Box sx={versus_style}>
          <Typography sx={text}>
            {props.fixture.home.name} {" - "} {props.fixture.away.name}
          </Typography>
        </Box>
        <Box sx={date_style}>
          <Typography sx={text}>
            {" "}
            {createDateString(props.fixture.date)}{" "}
            {createTimeString(props.fixture.date)}
          </Typography>
        </Box>
        <Box sx={versus_style_mobile} display={"column"}>
          <Typography sx={{ padding:"5px" }}>
            {props.fixture.home.name}
          </Typography>
          <Typography sx={{ padding:"5px" }}>
            {props.fixture.away.name}
          </Typography>
        </Box>
        <Box sx={date_style_mobile} display={"column"}>
          <Typography sx={{  padding:"0 5px 0 5px" }}>
            {createTimeString(props.fixture.date)}
          </Typography>

          <Typography sx={{ padding:"0 5px 0 5px" }}>
            {createDateString(props.fixture.date)}
          </Typography>
        </Box>
        <Box sx={view_odds_buton_style}>
          <Button onClick={props.view_bets} sx={button}>
            {" "}
            View bets
          </Button>
        </Box>
        <Box sx={view_odds_buton_style_mobile}>
          <Button onClick={props.view_bets} sx={button}>
            <Typography sx={{ padding: "0" }}>View bets</Typography>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default FixtureInfo;
