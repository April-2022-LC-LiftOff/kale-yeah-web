import classes from "./Welcome.module.css";



const Welcome = () => {
  return (
    <div className={classes.welcomeContainer}>
      
      <div className={classes.welcomeBox}>
        <p className={classes.kaleYeah}>Kale Yeah!</p>
        {/* <p>Lettuce be thankful for this app.</p> */}
        </div>

      <div className={classes.welcomeBox}>

      </div>
      
    </div>
  )
}

export default Welcome
