import classes from "./Button.module.css";

function Button(props) {
  return (
    <div className={classes.container} style={props.style}>
        {props.children}
    </div>
  );
}

export default Button;
