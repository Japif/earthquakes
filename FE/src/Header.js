import classes from './Header.module.css';

function Header() {
    return (
      <div className={classes.container}>
        <div className={classes.inner}>EarthQuakes</div>
      </div>
    );
  }
  
  export default Header;
  