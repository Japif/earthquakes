import classes from "./Card.module.css";
import Button from "./components/Button";
import Label from "./components/Label";

function Card() {
  return (
    <div className={classes.container}>
      <div>
        <Label icon="location_on">Location: Rome</Label>
        <Label icon="schedule">Time: 21/09/2022 09:15</Label>
        <Label icon="arrow_downward">Depth: 12km</Label>
        <Label icon="language">Coordinates: 41.2, 12.6</Label>
      </div>
      <div className={classes["button-container"]}>
        <Button style={{borderColor: `#d9dfe6`, backgroundColor: `white`}}>Open details</Button>
        <Button style={{borderColor: `#d9dfe6`, backgroundColor: `white`}}>View on Google Maps</Button>
        <Button style={{}}>Did you hear it?</Button>
      </div>
    </div>
  );
}

export default Card;
