
import Drawer from '@mui/material/Drawer';
import { Box } from "@mui/material";
import Ticket from '../ticket/Ticket';


function TicketDrawer(props) {

  

  return (
    <Drawer anchor="right" onClose={props.closeFunc} open={props.isOpen} onClick={(event) => {event.stopPropagation()}} >
      <Box sx={{width:"80vw", height:"100vh"}}>
        <Ticket  />
      </Box>
    </Drawer>
  );
}

export default TicketDrawer;