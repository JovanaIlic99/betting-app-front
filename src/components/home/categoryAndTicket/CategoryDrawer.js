
import Drawer from '@mui/material/Drawer';
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import CategoriesFilter from "../category/CategoriesFilter";

function CategoryDrawer(props) {

  

  return (
    <Drawer anchor="left" onClose={props.closeFunc} open={props.isOpen} onClick={(event) => {event.stopPropagation()}} >
      <Box sx={{width:"80vw", height:"100vh"}}>
        <CategoriesFilter filter_function={props.filter_function} />
      </Box>
    </Drawer>
  );
}

export default CategoryDrawer;
