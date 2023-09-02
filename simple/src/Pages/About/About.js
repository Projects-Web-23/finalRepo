import { Link } from "react-router-dom";
import  './About.css';
import resume2 from "../../Photos/resume2.png"
import resIcon from "../../Photos/res-icon.png"
import formIcon from "../../Photos/form-icon.png"
import downloadIcon from "../../Photos/download-icon.png"
import arrowIcon from "../../Photos/Arrow 2.svg"
const About = () => {
  return (
    <div className="about-container">
        <div className="about-us">
            <div className="about-txt">
               <h1>About us</h1>
               <p>Resumeness is a 
                 user-focused resume builder website dedicated 
                 to simplifying the resume-building process. With 
                 customizable templates, expert guidance, and a 
                 commitment to privacy and security, we empower
                 individuals to create professional resumes that highlight 
                 their unique skills and experiences.
                 Join Resumeness today and unlock your career potential.
                 </p>
             </div>
             <img src={resume2} />
        </div>
        <div className="how-to-container">
            <h1>How to use <span>Resumeness</span></h1>
            <div className="how-to">
                <div className="how-item">
                    <img src={resIcon} alt="resume"/>
                    <h2>Go to resume page</h2>
                </div>
                <div className="arrow">
                 <img src={arrowIcon} alt="arrow" />
                 </div>
                <div className="how-item">
                    <img src={formIcon} alt="form"/>
                    <h2>Fill in your Information</h2>
                </div>
                <div className="arrow">
                <img src={arrowIcon} alt="arrow" />
                </div>
                <div className="how-item">
                    <img src={downloadIcon} alt="download"/>
                    <h2>Download PDF</h2>
                </div>

                


            </div>

        </div>
        
      
    </div>
  );
}
 
export default About;