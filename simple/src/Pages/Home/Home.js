import { Link } from "react-router-dom";
import res from "../../Photos/resume.png"
import  './Home.css'
const Home = () => {
  return (
    <div className="home-container">
        <div className="home">
            <div className="home-txt">
            <h1>Build your resume online!</h1>
            <Link to="/About"> <button className="home-button">Get Started</button></Link>
            </div>
            <img src={res} />
        </div>
      
    </div>
  );
}
 
export default Home;