import classes from "./Card.module.css";
import Button from "./components/Button";
import Label from "./components/Label";

const mapsUrl = (lat, lon) => {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
};

const hearUrl = (id) => {
  return `https://www.hsit.it/xml-server.php?item=quest&action=compile&event_id=${id}&output=int`;
};

function Card(props) {
  return (
    <div className={classes.container}>
      <div className={classes["info-container"]}>
        <Label icon="location_on">Location: {props.data.place}</Label>
        <Label icon="schedule">Time: {props.data.date}</Label>
        <Label icon="arrow_downward">Depth: {props.data.ipo}km</Label>
        <Label icon="language">
          Coordinates: {props.data.lat}, {props.data.lon}
        </Label>
      </div>
      <div className={classes["button-container"]}>
        <Button
          url={props.data.url}
          style={{ borderColor: `#d9dfe6`, backgroundColor: `white` }}
        >
          Open details
        </Button>
        <Button
          url={mapsUrl(props.data.lat, props.data.lon)}
          style={{ borderColor: `#d9dfe6`, backgroundColor: `white` }}
        >
          View on Google Maps
        </Button>
        <Button url={hearUrl(props.data.id)} style={{}}>
          Did you hear it?
        </Button>
      </div>
    </div>
  );
}

export default Card;
