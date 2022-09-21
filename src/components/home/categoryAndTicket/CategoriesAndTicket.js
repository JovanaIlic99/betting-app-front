import { Button } from "@mui/material";
import { useState } from "react";
import * as React from "react";

import classes from "./CategoriesAndTicket.module.css";
import Stack from "@mui/material/Stack";
import CategoryDrawer from "./CategoryDrawer";
import TicketDrawer from "./TicketDrawer";

const button = {
  width: "100%",
  backgroundColor: "var(--color-primary)",
  fontSize: "1rem",
  fontWeight: "500",
  color: "white",
  margin: "10px 20px 10px 10px",
  borderRadius: "0",
  border: "1px solid white",
  margin: "0",
  ":hover": {
    backgroundColor: "var(--color-primary-light)",
    fontWeight: "600",
    letterSpacing: "1.5px",
  },
  "&:before": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "-3px",
    left: "50%",
    transform: "translate(-50%,0%)",
    backgroundColor: "var(--color-white)",
    transformOrigin: "center",
    visibility: "hidden",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover:before": {
    visibility: "visible",
    width: "80%",
  },
};

function CategoriesAndTicket(props) {
  const [openCategories, setOpenCategories] = React.useState(false);
  const [openTicket, setOpenTicket] = React.useState(false);

  function handleDrawerOpenCategories() {
    console.log("--------------------opening");
    setOpenCategories(true);
    console.log(openCategories);
  };

  function handleDrawerCloseCategories () {
    console.log("--------------------closing");
    setOpenCategories(false);
    console.log(openCategories);
  };
  function handleDrawerOpenTicket () {
    setOpenTicket(true);
  };

  const handleDrawerCloseTickets = () => {
    setOpenTicket(false);
  };
  const toggleDrawer =(open) => {
    setOpenCategories(false);}

  return (
    <div className={classes.btn_div}>
      <Stack direction="row">
        <Button
          sx={button}
          aria-label="open drawer"
          onClick={handleDrawerOpenCategories}
        >
          {(openCategories && 
            <CategoryDrawer
              filter_function={props.filter_function}
              isOpen={openCategories}
              openFunc={handleDrawerOpenCategories}
              closeFunc={handleDrawerCloseCategories}
            />
          ) }
          CATEGORIES
        </Button>
        <Button
          sx={button}
          aria-label="open drawer"
          onClick={handleDrawerOpenTicket}
        >
          {(openTicket && 
            <TicketDrawer
              isOpen={openTicket}
              openFunc={handleDrawerOpenTicket}
              closeFunc={handleDrawerCloseTickets}
            />
          ) }
          TICKET
        </Button>
      </Stack>
    </div>
  );
}

export default CategoriesAndTicket;
