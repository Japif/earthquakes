import classes from "./Button.module.css";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function Button(props) {
  return (
    <div
      onClick={() => openInNewTab(props.url)}
      className={classes.container}
      style={props.style}
    >
      {props.children}
    </div>
  );
}

export default Button;
