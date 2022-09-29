import Header from "./Header";
import classes from "./App.module.css";
import Card from "./Card";
import { useEffect, useState } from "react";

function App() {
  const [events, setEvents] = useState(false);

  const fetchEvents = () => {
    fetch("http://localhost:5000/api/v1/getevents")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvents(data);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      <div className={classes["list-container"]}>
        <div className={classes.explain}>
          This is a simple project i made in my free time, it allows you to see
          the details about the last earthquakes that happened around the world.
          At the current state you can only see events from the last 7 days and
          with a ML greater than 2.5
        </div>
        {!events && <div>Loading...</div>}
        {events && events.map((event) => <Card key={event.id} data={event} />)}
      </div>
    </div>
  );
}

export default App;
