import classes from "./Welcome.module.css";
import Login from "../Login";


const Welcome = () => {
  return (
    <div className={classes.welcomeContainer}>
      
      <div className={classes.welcomeBox}>
        <p className={classes.kaleYeah}>Kale Yeah!</p>
        <p>Lettuce be thankful for this app.</p>
        </div>

      <div className={classes.welcomeBox}>
        <Login />
      </div>
      
    </div>
  )
}

export default Welcome
