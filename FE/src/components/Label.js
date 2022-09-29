import classes from "./Label.module.css";

function Label(props) {
  return (
    <div className={classes.location}>
      <span
        style={{ fontSize: "12pt", paddingRight: "0.2rem" }}
        className="material-symbols-outlined"
      >
        {props.icon}
      </span>
      <span>{props.children}</span>
    </div>
  );
}

export default Label;
