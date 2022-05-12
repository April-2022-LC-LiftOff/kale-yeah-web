import Features from './Features';
import Footer from '../Navigation/Footer';
import Welcome from './Welcome';
import Login from '../Login/Login';
import './LandingPage.css'

const LandingPage = () => {
  return (
      <div>
      <Welcome />
      <div className="login"><Login /></div>
      <Features />
      <Footer />
    </div>
  );
}

export default LandingPage