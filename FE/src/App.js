import Header from "./Header";
import classes from "./App.module.css";
import Card from "./Card";

function App() {
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

        <Card />
      </div>
    </div>
  );
}

export default App;
