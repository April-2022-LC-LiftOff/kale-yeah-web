import "./Welcome.css";
import Login from "./Login";

const Welcome = () => {
  return (
    <div className="welcome-container">
      
      <div className="welcome-box">
        <p className="kale-yeah">Kale Yeah!</p>
        <p className="lettuce">Lettuce be thankful for this app.</p>
        </div>

      <div className="welcome-box">
        <div className="login"><Login /></div>
      </div>
      
    </div>
  )
}

export default Welcome
