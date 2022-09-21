
import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import image from "../img/Map.PNG"

const box ={
    margin:"3%",
    width:"96%"
}
const container_text={
    width:"100%",
    padding:"50px 50px 50px 50px"
}
const container_img={
    width:"80%",
    margin:"auto",
    padding:"50px 50px 50px 50px"
}
const title={
    margin:"10px"
}
const boxField={
    margin:"auto",

}

function Contact() {
  return (
    <Stack direction={"column"} sx={box}>
      <Box sx={container_text}>
      <Stack direction={"column"} >
          <Box sx={boxField}>
            <Typography sx={title}>Email: triumphbet@triumph.com</Typography>
          </Box>
          <Box sx={boxField}>
            <Typography sx={title}>Phone: +1 702 385 1906</Typography>
          </Box>
          <Box sx={boxField}>
            <Typography sx={title}>Adress: 1 E Fremont St, Las Vegas, NV 89101, United States</Typography>
          </Box>
        </Stack>
      </Box>
      <Box sx={container_img}>
      <img
        src={image}
        alt="map"
        width="100%"
      />
      </Box>
    </Stack>
  );
}

export default Contact;
