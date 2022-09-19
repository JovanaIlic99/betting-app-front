
import Button from '@mui/material/Button';



function OddsButton(props) {

  const button = {
    width: "100%",
    color: "white",
    fontSize: "1rem",
    fontWeight: "500",
    backgroundColor: props.name === props.league ? "black": "var(--color-primary)",
    margin: "10px 20px 10px 10px",
    borderRadius: "0",
    border: "1px solid white",
    ":hover": {
      backgroundColor: "var(--color-primary-light)",
      fontWeight: "600",
      letterSpacing: "1.5px",
    }
  };

  return (
    <div className="container_margin">
      <Button 
              key = {props.id} value={props.odd} name={props.name} odd={props.odd} sx={button} variant="outlined">
        {props.name}
      </Button>
    </div>
  );
}

export default OddsButton;
