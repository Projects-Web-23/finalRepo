import { Link } from "react-router-dom";
import res from "../../Photos/resume.png"
import  './Home.css'
const Home = () => {
  return (
    <div className="home-container">
        <div className="home">
            <div className="home-txt">
            <h1>Build your resume online!</h1>
            <button className="home-button">Get Started</button>
            </div>
            <img src={res} />
        </div>
      
    </div>
  );
}
 
export default Home;